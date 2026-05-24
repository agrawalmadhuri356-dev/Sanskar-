// =============================================================================
// Frontend Generation Engine
// Dynamic matching + fallback generation for script-prompt combos
// =============================================================================

import {
  SCRIPT_DATABASE,
  HOOK_TEMPLATES,
  BODY_TEMPLATES,
  CTA_TEMPLATES,
  PROMPT_TEMPLATES,
  type Niche,
  type Tone,
  type ScriptSection,
  type PromptSection,
  type ScriptPromptCombo,
} from "./data";

// Generate a unique ID
function generateId(): string {
  return `gen-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Normalize text for matching: lowercase, remove special chars
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

// Calculate a simple relevance score between input and a combo
function calculateRelevance(inputTopic: string, combo: ScriptPromptCombo): number {
  const normalizedInput = normalize(inputTopic);
  const inputWords = normalizedInput.split(/\s+/);

  let score = 0;

  // Exact topic match
  if (normalize(combo.topic) === normalizedInput) {
    score += 100;
  }

  // Partial topic match
  if (normalize(combo.topic).includes(normalizedInput) || normalizedInput.includes(normalize(combo.topic))) {
    score += 50;
  }

  // Keyword matching
  for (const keyword of combo.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedInput.includes(normalizedKeyword)) {
      score += 20;
    }
    for (const word of inputWords) {
      if (normalizedKeyword.includes(word) && word.length > 2) {
        score += 10;
      }
    }
  }

  // Niche match bonus
  if (inputWords.some(w => normalize(combo.niche).includes(w))) {
    score += 15;
  }

  return score;
}

// Find the best matching pre-built combo
function findBestMatch(topic: string, niche: Niche): ScriptPromptCombo | null {
  let bestMatch: ScriptPromptCombo | null = null;
  let bestScore = 0;

  for (const combo of SCRIPT_DATABASE) {
    if (combo.niche !== niche) continue;
    const score = calculateRelevance(topic, combo);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = combo;
    }
  }

  // Only return a match if the score is high enough
  return bestScore >= 20 ? bestMatch : null;
}

// Dynamic text generation function - builds a script from templates
function generateFromTemplates(topic: string, niche: Niche, tone: Tone): {
  script: ScriptSection[];
  prompts: PromptSection[];
} {
  const hookTemplates = HOOK_TEMPLATES[niche];
  const bodyTemplates = BODY_TEMPLATES[niche];
  const ctaTemplates = CTA_TEMPLATES[niche];
  const promptTemplates = PROMPT_TEMPLATES[niche];

  // Select templates based on tone
  const toneIndex = tone === "Dramatic" ? 0 : tone === "Energetic" ? 0 : tone === "Suspenseful" ? 1 : 0;

  const hook = hookTemplates[toneIndex % hookTemplates.length].replace("{topic}", topic);
  const body = bodyTemplates[toneIndex % bodyTemplates.length].replace(/{topic}/g, topic);
  const cta = ctaTemplates[toneIndex % ctaTemplates.length].replace(/{topic}/g, topic);

  // Generate prompts for each scene
  const prompts: PromptSection[] = [
    {
      scene: "Scene 1",
      timestamp: "0:00-0:05",
      prompt: promptTemplates[0].replace("{n}", "1").replace("{topic}", topic),
    },
    {
      scene: "Scene 2",
      timestamp: "0:05-0:30",
      prompt: promptTemplates[1 % promptTemplates.length].replace("{n}", "2").replace("{topic}", topic),
    },
    {
      scene: "Scene 3",
      timestamp: "0:30-0:60",
      prompt: promptTemplates[0].replace("{n}", "3").replace("{topic}", topic),
    },
  ];

  return {
    script: [
      { timestamp: "0:00-0:05", label: "Hook", content: hook },
      { timestamp: "0:05-0:30", label: "Core Body", content: body },
      { timestamp: "0:30-0:60", label: "CTA & Outro", content: cta },
    ],
    prompts,
  };
}

// Main generation function - tries to match from database, falls back to templates
export function generateScriptAndPrompts(
  topic: string,
  niche: Niche,
  tone: Tone
): ScriptPromptCombo {
  // Try to find a matching pre-built combo
  const match = findBestMatch(topic, niche);

  if (match) {
    // If tone matches exactly, return as-is
    if (match.tone === tone) {
      return {
        ...match,
        id: generateId(),
      };
    }
    // If tone differs, use the script but regenerate with template-adapted CTA
    const ctaTemplates = CTA_TEMPLATES[niche];
    const toneIndex = tone === "Dramatic" ? 0 : tone === "Energetic" ? 1 : tone === "Suspenseful" ? 0 : 1;
    const adaptedCTA = ctaTemplates[toneIndex % ctaTemplates.length].replace(/{topic}/g, topic);

    return {
      ...match,
      id: generateId(),
      tone,
      script: [
        match.script[0],
        match.script[1],
        { ...match.script[2], content: adaptedCTA },
      ],
    };
  }

  // Fallback: generate from templates
  const { script, prompts } = generateFromTemplates(topic, niche, tone);

  return {
    id: generateId(),
    niche,
    topic,
    keywords: topic.toLowerCase().split(/\s+/).filter(w => w.length > 2),
    tone,
    script,
    prompts,
  };
}

// Get all templates for the explore page
export function getAllTemplates(): ScriptPromptCombo[] {
  return SCRIPT_DATABASE;
}
