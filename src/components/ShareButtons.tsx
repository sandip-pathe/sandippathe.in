"use client";

import { useState } from "react";
import { Share2, Check, Linkedin, Twitter, Mail, Link2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
  summary?: string;
}

export default function ShareButtons({
  title,
  url,
  summary,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedSummary = summary ? encodeURIComponent(summary) : "";

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="border-t border-border pt-8 mt-12">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground">
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share this essay</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all hover:scale-105 active:scale-95 font-medium text-sm"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>

        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0c85d0] transition-all hover:scale-105 active:scale-95 font-medium text-sm"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
          <span>Twitter</span>
        </a>

        {/* Email */}
        <a
          href={shareLinks.email}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all hover:scale-105 active:scale-95 font-medium text-sm border border-border"
          aria-label="Share via Email"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all hover:scale-105 active:scale-95 font-medium text-sm border border-border"
          aria-label="Copy link"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
