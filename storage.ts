// =============================================================================
// Local Storage Integration for Saved Scripts
// =============================================================================

import type { ScriptPromptCombo } from "./data";

const STORAGE_KEY = "faceless-ai-saved-scripts";

export function getSavedScripts(): ScriptPromptCombo[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveScript(script: ScriptPromptCombo): void {
  if (typeof window === "undefined") return;
  try {
    const saved = getSavedScripts();
    // Check if already saved
    if (saved.some((s) => s.id === script.id)) return;
    saved.unshift(script); // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    console.error("Failed to save script to local storage");
  }
}

export function removeScript(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const saved = getSavedScripts().filter((s) => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    console.error("Failed to remove script from local storage");
  }
}

export function isScriptSaved(id: string): boolean {
  if (typeof window === "undefined") return false;
  return getSavedScripts().some((s) => s.id === id);
}

export function searchSavedScripts(query: string): ScriptPromptCombo[] {
  const saved = getSavedScripts();
  if (!query.trim()) return saved;
  const normalized = query.toLowerCase();
  return saved.filter(
    (s) =>
      s.topic.toLowerCase().includes(normalized) ||
      s.niche.toLowerCase().includes(normalized) ||
      s.script.some((section) => section.content.toLowerCase().includes(normalized))
  );
}
