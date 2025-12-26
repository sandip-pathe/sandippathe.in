"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Trash2,
  Plus,
  Eye,
  Edit3,
  FileText,
  Check,
  Loader2,
  Menu,
  X,
  Lock,
} from "lucide-react";
import {
  getEssays,
  createEssay,
  updateEssay,
  deleteEssay,
  generateSlug,
  estimateReadTime,
  getCurrentDate,
  Essay,
} from "@/helper/firebase-essays";
import ThemeToggle from "@/components/ThemeToggle";

// Simple password protection - change this to your desired password
const EDITOR_PASSWORD = "sandip2025";

export default function EssayEditor() {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  // Check for saved auth on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("essay-editor-auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle password submit
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === EDITOR_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("essay-editor-auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
      setPassword("");
    }
  };

  // Load essays from Firebase on mount
  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }

    async function fetchEssays() {
      try {
        const firebaseEssays = await getEssays();
        if (firebaseEssays.length > 0) {
          setEssays(firebaseEssays);
        } else {
          setEssays([]);
        }
      } catch (error) {
        console.error("Error fetching essays:", error);
        setEssays([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEssays();
  }, [isAuthenticated]);

  // Load selected essay into form
  useEffect(() => {
    if (selectedEssay) {
      setTitle(selectedEssay.title);
      setSummary(selectedEssay.summary);
      setContent(selectedEssay.content);
    }
  }, [selectedEssay]);

  // Create new essay
  const handleNew = () => {
    setSelectedEssay(null);
    setTitle("");
    setSummary("");
    setContent("");
    setIsPreview(false);
    setIsSaved(false);
  };

  // Save essay to Firebase
  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;

    setIsSaving(true);
    try {
      const essayData = {
        slug: generateSlug(title),
        title: title.trim(),
        date: selectedEssay?.date || getCurrentDate(),
        readTime: estimateReadTime(content),
        summary: summary.trim(),
        content: content.trim(),
      };

      if (selectedEssay) {
        // Update existing essay
        await updateEssay(selectedEssay.id, essayData);
        const updatedEssays = essays.map((e) =>
          e.id === selectedEssay.id ? { ...e, ...essayData } : e
        );
        setEssays(updatedEssays);
        setSelectedEssay({ ...selectedEssay, ...essayData });
      } else {
        // Create new essay
        const newEssay = await createEssay(essayData as Omit<Essay, "id">);
        if (newEssay) {
          setEssays([newEssay, ...essays]);
          setSelectedEssay(newEssay);
        }
      }

      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error("Error saving essay:", error);
      alert("Failed to save essay. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete essay from Firebase
  const handleDelete = async () => {
    if (!selectedEssay) return;
    if (!confirm("Are you sure you want to delete this essay?")) return;

    setIsDeleting(true);
    try {
      await deleteEssay(selectedEssay.id);
      const updatedEssays = essays.filter((e) => e.id !== selectedEssay.id);
      setEssays(updatedEssays);
      handleNew();
    } catch (error) {
      console.error("Error deleting essay:", error);
      alert("Failed to delete essay. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const paragraphs = content.split("\n\n").filter(Boolean);

  // Password gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Lock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Essay Editor
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter password to access the editor
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full px-4 py-3 bg-muted/30 dark:bg-muted/50 border rounded-lg focus:outline-none text-foreground placeholder-muted-foreground ${
                  authError
                    ? "border-red-500"
                    : "border-border focus:border-foreground"
                }`}
                autoFocus
              />
              {authError && (
                <p className="text-red-500 text-sm mt-2">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-colors font-medium"
            >
              Access Editor
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/essays"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Essays
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {showSidebar ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/essays"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Back to Essays</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
                isPreview
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground border border-border hover:border-foreground"
              }`}
            >
              {isPreview ? (
                <>
                  <Edit3 className="w-4 h-4" />{" "}
                  <span className="hidden sm:inline">Edit</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />{" "}
                  <span className="hidden sm:inline">Preview</span>
                </>
              )}
            </button>

            <button
              onClick={handleSave}
              disabled={!title.trim() || !content.trim() || isSaving}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-foreground text-background rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />{" "}
                  <span className="hidden sm:inline">Saving...</span>
                </>
              ) : isSaved ? (
                <>
                  <Check className="w-4 h-4" />{" "}
                  <span className="hidden sm:inline">Saved</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />{" "}
                  <span className="hidden sm:inline">Save</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar - Essay List (Mobile: overlay, Desktop: fixed) */}
          <div
            className={`
            ${
              showSidebar
                ? "fixed inset-0 z-30 bg-background pt-16 px-4"
                : "hidden"
            }
            lg:block lg:relative lg:pt-0 lg:px-0 lg:col-span-1
          `}
          >
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Essays
                </h2>
                <button
                  onClick={() => {
                    handleNew();
                    setShowSidebar(false);
                  }}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  New
                </button>
              </div>

              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {essays.map((essay) => (
                  <button
                    key={essay.id}
                    onClick={() => {
                      setSelectedEssay(essay);
                      setIsPreview(false);
                      setShowSidebar(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedEssay?.id === essay.id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{essay.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedEssay && (
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex items-center gap-2 mt-6 text-sm text-red-500 hover:text-red-600 disabled:opacity-50 transition-colors"
                >
                  {isDeleting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete Essay
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Main Editor / Preview */}
          <div className="lg:col-span-3">
            {isPreview ? (
              /* Preview Mode */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-muted/30 dark:bg-muted/50 rounded-lg border border-border p-6 sm:p-8 lg:p-12"
              >
                <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-4">
                  {title || "Untitled Essay"}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                  {getCurrentDate()} · {estimateReadTime(content)}
                </p>
                {summary && (
                  <p className="text-muted-foreground italic mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border text-sm sm:text-base">
                    {summary}
                  </p>
                )}
                <div className="prose prose-lg dark:prose-invert">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-foreground leading-[1.8] text-base sm:text-[17px] font-serif mb-5 sm:mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Edit Mode */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Title */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Essay title..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xl sm:text-2xl font-serif bg-muted/30 dark:bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-foreground text-foreground placeholder-muted-foreground"
                  />
                </div>

                {/* Summary */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Summary
                  </label>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="A brief summary that appears in the essay list..."
                    rows={2}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/30 dark:bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-foreground text-foreground placeholder-muted-foreground resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Content
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your essay...

Press Enter twice for a new paragraph.
Press Enter once for a line break within the same paragraph.

Tips:
• Keep paragraphs focused on one idea
• Use blank lines to separate sections"
                    rows={20}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-muted/30 dark:bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-foreground text-foreground placeholder-muted-foreground resize-none font-serif text-base sm:text-[17px] leading-[1.8]"
                  />
                </div>

                {/* Word count */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                  <span>
                    {content.split(/\s+/).filter(Boolean).length} words
                  </span>
                  <span>{estimateReadTime(content)}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
