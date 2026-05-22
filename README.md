# Sanskar-
Faceless ai script genrator 
import React, { useState } from 'react';
import { Video, Sparkles, Copy, Check } from 'lucide-react';

const PRESET_DATASET = [
  {
    id: 1,
    category: "Space & Sci-Fi",
    topic: "dark secrets of space",
    tone: "Suspenseful",
    script: {
      hook: "⏱️ [0:00 - 0:05]\nDid you know there is a giant invisible structure in space that is devouring entire galaxies?",
      body: "⏱️ [0:05 - 0:45]\nDeep in the cosmic void lies 'The Great Attractor'. It’s a gravitational anomaly so massive that our entire Milky Way galaxy is being pulled toward it at 1.4 million miles per hour!",
      cta: "⏱️ [0:45 - 1:00]\nHit that follow button for more terrifying space mysteries!"
    },
    prompts: [
      "Scene 1: A massive cinematic dark void swallowing glowing spiral galaxies, 8k resolution.",
      "Scene 2: Telescope view showing galaxies warping and speeding towards an invisible central point."
    ]
  }
];

export default function App() {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('Space & Sci-Fi');
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const matched = PRESET_DATASET.find(item => topic.toLowerCase().includes(item.topic));
      if (matched) {
        setOutput(matched);
      } else {
        setOutput({
          topic, category,
          script: {
            hook: `⏱️ [0:00 - 0:05]\nStop scrolling! This viral fact about "${topic}" will blow your mind.`,
            body: `⏱️ [0:05 - 0:45]\nResearch shows that "${topic}" holds secrets most creators never talk about. The dynamic structure inside this niche is changing rapidly.`,
            cta: "⏱️ [0:45 - 1:00]\nFollow for more daily analytical breakdowns!"
          },
          prompts: [`Scene 1: Cinematic high-end 3D concept render of ${topic}, premium lighting layout.`]
        });
      }
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-xl text-center">
          <h2 className="text-xl font-extrabold text-white flex items-center justify-center gap-2">
            <Video className="text-indigo-500" /> ScriptWave Studio
          </h2>
          <p className="text-gray-400 text-xs mt-1">AI Faceless Video Generator Dashboard</p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase">Video Topic / Keyword</label>
            <input type="text" placeholder="e.g., dark secrets of space..." value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full bg-[#1f2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white mt-1 focus:outline-none focus:border-indigo-500" />
          </div>

          <button onClick={handleGenerate} disabled={isGenerating || !topic.trim()} className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2">
            {isGenerating ? "Analyzing Patterns..." : "Generate Viral Script"}
          </button>
        </div>

        {output && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111827] border border-gray-800 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-indigo-400 uppercase">Voiceover Script</h3>
              <p className="text-xs bg-gray-800/50 p-2.5 rounded border border-gray-700">{output.script.hook}</p>
              <p className="text-xs bg-gray-800/50 p-2.5 rounded border border-gray-700">{output.script.body}</p>
              <p className="text-xs bg-gray-800/50 p-2.5 rounded border border-gray-700">{output.script.cta}</p>
            </div>
            <div className="bg-[#111827] border border-gray-800 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-purple-400 uppercase">AI Image Prompts</h3>
              {output.prompts.map((p, i) => (
                <p key={i} className="text-xs bg-[#1f2937] p-3 rounded border border-gray-800 font-mono">{p}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
