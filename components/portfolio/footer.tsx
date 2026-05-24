"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { Icon: Github, href: "https://github.com/krishmalhotra", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/krishmalhotra", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:contact@krishmalhotra.dev", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 py-12 px-6">
      {/* Gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="mb-2 inline-block text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Krish Malhotra
            </motion.a>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive" />
            <span>using Next.js & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/50 bg-card/50 p-2 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
