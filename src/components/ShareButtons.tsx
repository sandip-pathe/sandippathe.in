"use client";

import { FaTwitter, FaLinkedin, FaFacebook, FaLink } from "react-icons/fa";
import { useState } from "react";
import { Check } from "lucide-react";

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

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary || "");

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
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
    <div className="flex items-center gap-4">
      <span className="text-sm text-[#999]">Share:</span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-[#666] hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 rounded-full transition-colors"
        title="Share on Twitter"
      >
        <FaTwitter className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-[#666] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-colors"
        title="Share on LinkedIn"
      >
        <FaLinkedin className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-[#666] hover:text-[#1877F2] hover:bg-[#1877F2]/10 rounded-full transition-colors"
        title="Share on Facebook"
      >
        <FaFacebook className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className="p-2 text-[#666] hover:text-[#333] hover:bg-[#e5e4df] rounded-full transition-colors"
        title="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <FaLink className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
