"use client";

import React, { useEffect, useCallback } from "react";
import {
  LayoutDashboard,
  Bookmark,
  Compass,
  Settings,
  Search,
  Copy,
  Check,
  Trash2,
  BookmarkPlus,
  Sparkles,
  ChevronRight,
  Zap,
  FileText,
  Image as ImageIcon,
  Menu,
  X,
  ArrowRight,
  Clock,
  Tag,
  MessageSquare,
  Wand2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAppStore, type AppView } from "@/lib/store";
import { generateScriptAndPrompts, getAllTemplates } from "@/lib/generator";
import {
  getSavedScripts,
  saveScript,
  removeScript,
  searchSavedScripts,
} from "@/lib/storage";
import { NICHES, TONES, type Niche, type Tone, type ScriptPromptCombo } from "@/lib/data";

// ============================================================================
// Sidebar Component
// ============================================================================
function AppSidebar() {
  const { currentView, setCurrentView, sidebarOpen, setSidebarOpen } = useAppStore();

  const navItems: { view: AppView; icon: React.ReactNode; label: string }[] = [
    { view: "dashboard", icon: <LayoutDashboard className="h-5 w-5" />, label: "Dashboard" },
    { view: "saved", icon: <Bookmark className="h-5 w-5" />, label: "Saved Scripts" },
    { view: "explore", icon: <Compass className="h-5 w-5" />, label: "Explore Templates" },
    { view: "settings", icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#0d0d14] border-r border-white/[0.06] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-5 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Faceless AI</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Script Generator
            </p>
          </div>
          <button
            className="ml-auto lg:hidden text-muted-foreground hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Separator className="bg-white/[0.06]" />

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentView === item.view
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-muted-foreground hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
              {currentView === item.view && (
                <ChevronRight className="h-4 w-4 ml-auto text-indigo-400" />
              )}
            </button>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="p-4 m-3 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300">Pro Tip</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Plug in your own OpenAI API key in Settings for unlimited AI-powered generation.
          </p>
        </div>
      </aside>
    </>
  );
}

// ============================================================================
// Header Component
// ============================================================================
function AppHeader() {
  const { searchQuery, setSearchQuery, setSidebarOpen } = useAppStore();

  return (
    <header className="sticky top-0 z-30 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex items-center gap-4 px-4 md:px-6 h-14">
        <button
          className="lg:hidden text-muted-foreground hover:text-white"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search bar */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search scripts, topics, prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white/[0.04] border-white/[0.08] text-sm placeholder:text-muted-foreground/60 h-9"
          />
        </div>

        {/* Profile avatar */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
            FA
          </div>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// Generator Form Component
// ============================================================================
function GeneratorForm() {
  const {
    topic,
    niche,
    tone,
    setTopic,
    setNiche,
    setTone,
    isGenerating,
    setIsGenerating,
    setGeneratingPhase,
    setGeneratedResult,
    autoSave,
  } = useAppStore();

  const [copied, setCopied] = React.useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      toast.error("Please enter a video topic or keyword");
      return;
    }

    setIsGenerating(true);
    setGeneratedResult(null);

    // Simulate generation phases with delays
    const phases = [
      "Analyzing niche...",
      "Writing hook...",
      "Building script structure...",
      "Generating visual prompts...",
      "Finalizing output...",
    ];

    for (let i = 0; i < phases.length; i++) {
      setGeneratingPhase(phases[i]);
      await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));
    }

    const result = generateScriptAndPrompts(topic.trim(), niche, tone);
    setGeneratedResult(result);
    setIsGenerating(false);

    if (autoSave) {
      saveScript(result);
      const scripts = getSavedScripts();
      useAppStore.getState().setSavedScripts(scripts);
    }

    toast.success("Script & prompts generated successfully!");
  }, [topic, niche, tone, autoSave, setIsGenerating, setGeneratingPhase, setGeneratedResult]);

  return (
    <Card className="bg-[#111118] border-white/[0.06]">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-indigo-400" />
          <CardTitle className="text-lg">Script Generator</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground/70">
          Enter your video topic and customize settings to generate a viral script with AI image prompts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Topic Input */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Video Topic or Keyword</Label>
          <Input
            placeholder='e.g., "Top 3 Dark Secrets of Space"'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-white/[0.04] border-white/[0.08] h-11 text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleGenerate();
            }}
          />
        </div>

        {/* Dropdowns Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Niche / Category</Label>
            <Select value={niche} onValueChange={(v) => setNiche(v as Niche)}>
              <SelectTrigger className="bg-white/[0.04] border-white/[0.08] h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a2e] border-white/[0.08]">
                {NICHES.map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Tone of Voice</Label>
            <Select value={tone} onValueChange={(v) => setTone(v as Tone)}>
              <SelectTrigger className="bg-white/[0.04] border-white/[0.08] h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a2e] border-white/[0.08]">
                {TONES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`w-full h-12 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 ${
            isGenerating ? "" : "glow-button"
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {useAppStore.getState().generatingPhase}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Generate Script
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Script Output Panel
// ============================================================================
function ScriptOutput({ script, topic }: { script: ScriptPromptCombo["script"]; topic: string }) {
  const [copied, setCopied] = React.useState(false);

  const fullScript = script.map((s) => `[${s.timestamp}] ${s.label}\n${s.content}`).join("\n\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    toast.success("Script copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-[#111118] border-white/[0.06] h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-indigo-400" />
            <CardTitle className="text-base">Video Script</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 text-xs text-muted-foreground hover:text-white hover:bg-white/[0.06]"
          >
            {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
            {copied ? "Copied!" : "Copy Script"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] md:h-[500px] pr-4">
          <div className="space-y-4">
            {script.map((section, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-[10px] border-indigo-500/30 text-indigo-400 bg-indigo-500/10"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {section.timestamp}
                  </Badge>
                  <span className="text-xs font-semibold text-white/80">{section.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground pl-0.5">
                  {section.content}
                </p>
                {idx < script.length - 1 && (
                  <Separator className="mt-4 bg-white/[0.04]" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Prompts Output Panel
// ============================================================================
function PromptsOutput({ prompts }: { prompts: ScriptPromptCombo["prompts"] }) {
  const [copied, setCopied] = React.useState(false);

  const fullPrompts = prompts.map((p) => `[${p.timestamp}] ${p.scene}\n${p.prompt}`).join("\n\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPrompts);
    setCopied(true);
    toast.success("Prompts copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-[#111118] border-white/[0.06] h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-purple-400" />
            <CardTitle className="text-base">Visual AI Prompts</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 text-xs text-muted-foreground hover:text-white hover:bg-white/[0.06]"
          >
            {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
            {copied ? "Copied!" : "Copy Prompts"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] md:h-[500px] pr-4">
          <div className="space-y-4">
            {prompts.map((prompt, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 150 + 300}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-[10px] border-purple-500/30 text-purple-400 bg-purple-500/10"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {prompt.timestamp}
                  </Badge>
                  <span className="text-xs font-semibold text-white/80">{prompt.scene}</span>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/[0.06] border border-purple-500/10">
                  <p className="text-sm leading-relaxed text-purple-200/80 italic">
                    {prompt.prompt}
                  </p>
                </div>
                {idx < prompts.length - 1 && (
                  <Separator className="mt-4 bg-white/[0.04]" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Result Panel (Split View)
// ============================================================================
function ResultPanel({ result }: { result: ScriptPromptCombo }) {
  const { savedScripts, setSavedScripts } = useAppStore();
  const isSaved = savedScripts.some((s) => s.id === result.id);

  const handleSave = () => {
    if (isSaved) {
      removeScript(result.id);
      toast.success("Script removed from library");
    } else {
      saveScript(result);
      toast.success("Script saved to library!");
    }
    setSavedScripts(getSavedScripts());
  };

  return (
    <div className="space-y-4">
      {/* Result header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30">
            <Tag className="h-3 w-3 mr-1" />
            {result.niche}
          </Badge>
          <Badge variant="outline" className="border-white/[0.1] text-white/60">
            <MessageSquare className="h-3 w-3 mr-1" />
            {result.tone}
          </Badge>
        </div>
        <Button
          variant={isSaved ? "default" : "outline"}
          size="sm"
          onClick={handleSave}
          className={
            isSaved
              ? "h-8 text-xs bg-indigo-600 hover:bg-indigo-500"
              : "h-8 text-xs border-white/[0.1] text-muted-foreground hover:text-white hover:bg-white/[0.06]"
          }
        >
          {isSaved ? (
            <Bookmark className="h-3.5 w-3.5 mr-1 fill-current" />
          ) : (
            <BookmarkPlus className="h-3.5 w-3.5 mr-1" />
          )}
          {isSaved ? "Saved" : "Save to Library"}
        </Button>
      </div>

      {/* Split view */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ScriptOutput script={result.script} topic={result.topic} />
        <PromptsOutput prompts={result.prompts} />
      </div>
    </div>
  );
}

// ============================================================================
// Loading Skeleton
// ============================================================================
function GeneratingSkeleton() {
  const { generatingPhase } = useAppStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-6 w-24 rounded-full bg-indigo-600/20 shimmer" />
        <div className="h-6 w-20 rounded-full bg-white/[0.06] shimmer" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Script skeleton */}
        <Card className="bg-[#111118] border-white/[0.06]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-indigo-500/20 shimmer" />
              <div className="h-5 w-24 rounded bg-white/[0.06] shimmer" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-20 rounded-full bg-indigo-500/10 shimmer" />
                  <div className="h-5 w-16 rounded bg-white/[0.04] shimmer" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-full rounded bg-white/[0.04] shimmer" />
                  <div className="h-3 w-4/5 rounded bg-white/[0.04] shimmer" />
                  <div className="h-3 w-3/5 rounded bg-white/[0.04] shimmer" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Prompts skeleton */}
        <Card className="bg-[#111118] border-white/[0.06]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-purple-500/20 shimmer" />
              <div className="h-5 w-28 rounded bg-white/[0.06] shimmer" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-20 rounded-full bg-purple-500/10 shimmer" />
                  <div className="h-5 w-14 rounded bg-white/[0.04] shimmer" />
                </div>
                <div className="p-3 rounded-lg bg-purple-500/[0.04] border border-purple-500/5 space-y-1.5">
                  <div className="h-3 w-full rounded bg-white/[0.04] shimmer" />
                  <div className="h-3 w-3/4 rounded bg-white/[0.04] shimmer" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <p className="text-sm text-indigo-400 animate-pulse">{generatingPhase}</p>
      </div>
    </div>
  );
}

// ============================================================================
// Dashboard View (Main Generator)
// ============================================================================
function DashboardView() {
  const { generatedResult, isGenerating, topic } = useAppStore();

  return (
    <div className="space-y-6">
      {/* Hero section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent border border-indigo-500/10 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">Generate Viral Scripts</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            Create high-converting YouTube Shorts & Reels scripts with perfectly timed AI image
            generation prompts. Just enter a topic and watch the magic happen.
          </p>
        </div>
      </div>

      {/* Generator Form */}
      <GeneratorForm />

      {/* Result Area */}
      {isGenerating && <GeneratingSkeleton />}
      {generatedResult && !isGenerating && <ResultPanel result={generatedResult} />}

      {/* Empty state */}
      {!generatedResult && !isGenerating && (
        <div className="text-center py-12">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-indigo-400/50" />
          </div>
          <h3 className="text-lg font-semibold text-white/60 mb-2">Ready to Generate</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Enter a video topic above and click &quot;Generate Script&quot; to create your viral
            faceless video script and AI image prompts.
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Saved Scripts View
// ============================================================================
function SavedScriptsView() {
  const { savedScripts, setSavedScripts, searchQuery, setCurrentView, setTopic, setNiche } =
    useAppStore();

  const filteredScripts = searchQuery
    ? searchSavedScripts(searchQuery)
    : savedScripts;

  const handleDelete = (id: string) => {
    removeScript(id);
    setSavedScripts(getSavedScripts());
    toast.success("Script deleted");
  };

  const handleLoad = (script: ScriptPromptCombo) => {
    setTopic(script.topic);
    setNiche(script.niche);
    setCurrentView("dashboard");
    toast.info("Topic loaded into generator");
  };

  if (filteredScripts.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Saved Scripts</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Your saved scripts library with local persistence
          </p>
        </div>
        <div className="text-center py-16">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
            <Bookmark className="h-8 w-8 text-muted-foreground/30" />
          </div>
          <h3 className="text-lg font-semibold text-white/60 mb-2">No Saved Scripts Yet</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
            Generate a script and click &quot;Save to Library&quot; to start building your collection.
          </p>
          <Button
            onClick={() => setCurrentView("dashboard")}
            variant="outline"
            className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-600/10"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            Go to Generator
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Saved Scripts</h2>
        <p className="text-muted-foreground text-sm mt-1">
          {filteredScripts.length} script{filteredScripts.length !== 1 ? "s" : ""} in your library
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredScripts.map((script) => (
          <Card
            key={script.id}
            className="bg-[#111118] border-white/[0.06] hover:border-indigo-500/20 transition-colors group"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-sm font-semibold truncate">
                    {script.topic}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Badge
                      variant="outline"
                      className="text-[10px] border-indigo-500/30 text-indigo-400 bg-indigo-500/10"
                    >
                      {script.niche}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] border-white/[0.08] text-white/50">
                      {script.tone}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                {script.script[0]?.content}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLoad(script)}
                  className="h-7 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-600/10"
                >
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Load
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(script.id)}
                  className="h-7 text-xs text-red-400/60 hover:text-red-400 hover:bg-red-600/10"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Explore Templates View
// ============================================================================
function ExploreTemplatesView() {
  const { setTopic, setNiche, setTone, setCurrentView } = useAppStore();
  const [filterNiche, setFilterNiche] = React.useState<Niche | "All">("All");
  const templates = getAllTemplates();

  const filteredTemplates =
    filterNiche === "All" ? templates : templates.filter((t) => t.niche === filterNiche);

  const handleUseTemplate = (template: ScriptPromptCombo) => {
    setTopic(template.topic);
    setNiche(template.niche);
    setTone(template.tone);
    setCurrentView("dashboard");
    toast.info(`Template "${template.topic}" loaded into generator`);
  };

  const nicheColors: Record<string, string> = {
    "Space & Sci-Fi": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Horror/Crime Stories": "bg-red-500/10 text-red-400 border-red-500/30",
    "Financial Freedom": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "Unsolved Mysteries": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Motivation: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Explore Templates</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Pre-built viral script templates ready to customize
        </p>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant={filterNiche === "All" ? "default" : "ghost"}
          size="sm"
          onClick={() => setFilterNiche("All")}
          className={
            filterNiche === "All"
              ? "h-8 text-xs bg-indigo-600 hover:bg-indigo-500"
              : "h-8 text-xs text-muted-foreground hover:text-white"
          }
        >
          All
        </Button>
        {NICHES.map((n) => (
          <Button
            key={n}
            variant={filterNiche === n ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterNiche(n)}
            className={
              filterNiche === n
                ? "h-8 text-xs bg-indigo-600 hover:bg-indigo-500"
                : "h-8 text-xs text-muted-foreground hover:text-white"
            }
          >
            {n}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredTemplates.map((template) => (
          <Card
            key={template.id}
            className="bg-[#111118] border-white/[0.06] hover:border-indigo-500/20 transition-all duration-200 group"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge
                  variant="outline"
                  className={`text-[10px] ${nicheColors[template.niche] || "border-white/[0.1] text-white/60"}`}
                >
                  {template.niche}
                </Badge>
                <Badge variant="outline" className="text-[10px] border-white/[0.08] text-white/40">
                  {template.tone}
                </Badge>
              </div>
              <CardTitle className="text-sm font-semibold group-hover:text-indigo-300 transition-colors">
                {template.topic}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
                {template.script[0]?.content}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground/50">
                  {template.script.length} sections · {template.prompts.length} prompts
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleUseTemplate(template)}
                  className="h-7 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-600/10"
                >
                  Use Template
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Settings View
// ============================================================================
function SettingsView() {
  const {
    defaultNiche,
    defaultTone,
    autoSave,
    setDefaultNiche,
    setDefaultTone,
    setAutoSave,
    savedScripts,
  } = useAppStore();

  const [apiKey, setApiKey] = React.useState("");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Configure your generator preferences and API integration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Preferences */}
        <Card className="bg-[#111118] border-white/[0.06]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-indigo-400" />
              <CardTitle className="text-base">Default Preferences</CardTitle>
            </div>
            <CardDescription>Set your default niche and tone for new generations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Default Niche</Label>
              <Select value={defaultNiche} onValueChange={(v) => setDefaultNiche(v as Niche)}>
                <SelectTrigger className="bg-white/[0.04] border-white/[0.08]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-white/[0.08]">
                  {NICHES.map((n) => (
                    <SelectItem key={n} value={n}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Default Tone</Label>
              <Select value={defaultTone} onValueChange={(v) => setDefaultTone(v as Tone)}>
                <SelectTrigger className="bg-white/[0.04] border-white/[0.08]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-white/[0.08]">
                  {TONES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <Label className="text-sm">Auto-Save Scripts</Label>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Automatically save generated scripts to your library
                </p>
              </div>
              <Switch checked={autoSave} onCheckedChange={setAutoSave} />
            </div>
          </CardContent>
        </Card>

        {/* API Configuration */}
        <Card className="bg-[#111118] border-white/[0.06]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" />
              <CardTitle className="text-base">API Integration</CardTitle>
            </div>
            <CardDescription>
              Connect your own OpenAI or Anthropic API key for unlimited AI generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">API Provider</Label>
              <Select defaultValue="openai">
                <SelectTrigger className="bg-white/[0.04] border-white/[0.08]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-white/[0.08]">
                  <SelectItem value="openai">OpenAI (GPT-4)</SelectItem>
                  <SelectItem value="anthropic">Anthropic (Claude)</SelectItem>
                  <SelectItem value="local">Local / Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">API Key</Label>
              <Input
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="bg-white/[0.04] border-white/[0.08]"
              />
              <p className="text-[10px] text-muted-foreground/60">
                Your key is stored locally and never sent to our servers. Generation logic is
                separate from components for easy integration.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full border-indigo-500/30 text-indigo-400 hover:bg-indigo-600/10"
              onClick={() => toast.info("API integration is a template feature — plug in your own key to enable live AI generation.")}
            >
              <Zap className="h-4 w-4 mr-2" />
              Connect API Key
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="bg-[#111118] border-white/[0.06] md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base">Data Management</CardTitle>
            </div>
            <CardDescription>Manage your local data and storage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div>
                <p className="text-sm font-medium">Saved Scripts</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {savedScripts.length} script{savedScripts.length !== 1 ? "s" : ""} stored in local
                  browser storage
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-400 hover:bg-red-600/10 hover:text-red-300"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.removeItem("faceless-ai-saved-scripts");
                    useAppStore.getState().setSavedScripts([]);
                    toast.success("All saved scripts cleared");
                  }
                }}
              >
                <Trash2 className="h-3.5 w-3.5 mr-1" />
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ============================================================================
// Main Page
// ============================================================================
export default function Home() {
  const { currentView, savedScripts, setSavedScripts } = useAppStore();

  // Load saved scripts from localStorage on mount
  useEffect(() => {
    setSavedScripts(getSavedScripts());
  }, [setSavedScripts]);

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <AppHeader />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {currentView === "dashboard" && <DashboardView />}
          {currentView === "saved" && <SavedScriptsView />}
          {currentView === "explore" && <ExploreTemplatesView />}
          {currentView === "settings" && <SettingsView />}
        </main>
      </div>
    </div>
  );
}
