// =============================================================================
// Global App State with Zustand
// =============================================================================

import { create } from "zustand";
import type { ScriptPromptCombo, Niche, Tone } from "./data";

export type AppView = "dashboard" | "saved" | "explore" | "settings";

interface AppState {
  // Navigation
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // Generation state
  isGenerating: boolean;
  generatingPhase: string;
  generatedResult: ScriptPromptCombo | null;
  topic: string;
  niche: Niche;
  tone: Tone;
  setTopic: (topic: string) => void;
  setNiche: (niche: Niche) => void;
  setTone: (tone: Tone) => void;
  setIsGenerating: (val: boolean) => void;
  setGeneratingPhase: (phase: string) => void;
  setGeneratedResult: (result: ScriptPromptCombo | null) => void;

  // Saved scripts
  savedScripts: ScriptPromptCombo[];
  setSavedScripts: (scripts: ScriptPromptCombo[]) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Settings
  defaultNiche: Niche;
  defaultTone: Tone;
  autoSave: boolean;
  setDefaultNiche: (niche: Niche) => void;
  setDefaultTone: (tone: Tone) => void;
  setAutoSave: (val: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  currentView: "dashboard",
  setCurrentView: (view) => set({ currentView: view }),
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  // Generation state
  isGenerating: false,
  generatingPhase: "",
  generatedResult: null,
  topic: "",
  niche: "Space & Sci-Fi",
  tone: "Dramatic",
  setTopic: (topic) => set({ topic }),
  setNiche: (niche) => set({ niche }),
  setTone: (tone) => set({ tone }),
  setIsGenerating: (val) => set({ isGenerating: val }),
  setGeneratingPhase: (phase) => set({ generatingPhase: phase }),
  setGeneratedResult: (result) => set({ generatedResult: result }),

  // Saved scripts
  savedScripts: [],
  setSavedScripts: (scripts) => set({ savedScripts: scripts }),

  // Search
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Settings
  defaultNiche: "Space & Sci-Fi",
  defaultTone: "Dramatic",
  autoSave: true,
  setDefaultNiche: (niche) => set({ defaultNiche: niche }),
  setDefaultTone: (tone) => set({ defaultTone: tone }),
  setAutoSave: (val) => set({ autoSave: val }),
}));
