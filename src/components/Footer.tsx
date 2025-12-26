import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pt-6 sm:pt-8 border-t border-border">
      <div className="flex items-center justify-between">
        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sandip-pathe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-all hover:-rotate-12"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sandippathe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-all hover:-rotate-12"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sandippathe9689@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-all hover:-rotate-12"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/sandip_pathe26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-all hover:-rotate-12"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
        </div>

        {/* Easter egg - blue heart */}
        <Link
          href="/essays/editor"
          className="text-blue-500 hover:text-blue-400 transition-colors opacity-60 hover:opacity-100"
          title="Made with love"
        >
          💙
        </Link>
      </div>
    </footer>
  );
}
