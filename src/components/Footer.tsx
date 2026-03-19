"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-4">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold" style={{ color: "#ffffff" }}>Abhishek Kothe</div>
              <div className="text-xs" style={{ color: "#52525b" }}>Full Stack Developer &amp; AI Engineer</div>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center hover:text-violet-400 hover:border-violet-500/30 transition-all"
                style={{ color: "#52525b" }}
                aria-label={label}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright + scroll to top */}
          <div className="flex items-center gap-3">
            <span className="text-xs flex items-center gap-1.5" style={{ color: "#3f3f46" }}>
              Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> by Abhishek
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -2, scale: 1.1 }}
              className="w-7 h-7 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center hover:text-violet-400 transition-all"
              style={{ color: "#52525b" }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
