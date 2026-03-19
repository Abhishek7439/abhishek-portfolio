"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";

const TECH_CHIPS = ["Next.js", "Python", "Firebase", "AI/ML", "DSA"];

export default function BentoHero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div id="home">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* ── Main Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bento-card md:col-span-3 relative overflow-hidden p-8 min-h-[380px] flex flex-col justify-between"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-40" />
          {/* Ambient glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top row: status + avatar */}
            <div className="flex items-start justify-between mb-6">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold">Available for Opportunities</span>
              </div>

              {/* Avatar */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="relative flex-shrink-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 flex items-center justify-center text-2xl font-black text-white shadow-2xl shadow-violet-500/30">
                  AK
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#111118]" />
              </motion.div>
            </div>

            {/* Name — uses CSS var so it flips in light mode */}
            <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-3">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-heading block"
              >
                Abhishek
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="gradient-text text-glow block"
              >
                Kothe
              </motion.span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 h-6 mb-3">
              <span className="text-subtle">—</span>
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((r) => [r, 2000])}
                speed={55}
                repeat={Infinity}
                className="text-sm font-semibold text-violet-400"
              />
            </div>

            {/* Tagline */}
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-4">
              {personalInfo.tagline}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5">
              {TECH_CHIPS.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="tag-pill"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-shadow"
            >
              View Projects <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <motion.a
              href="/Abhishek_Resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-violet-500/20 text-body text-sm font-semibold hover:border-violet-500/50 hover:text-violet-500 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right column cards ── */}
        <div className="md:col-span-2 flex flex-col gap-5">

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-card p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-subtle">Location</p>
              <p className="text-sm font-semibold text-heading">{personalInfo.location}</p>
              <p className="text-xs mt-0.5 text-subtle">Open to remote &amp; on-site</p>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bento-card p-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: "SGPA",       value: "8.77",   color: "#a78bfa" },
              { label: "Diploma %",  value: "89.41%", color: "#22d3ee" },
              { label: "Projects",   value: "6+",     color: "#34d399" },
              { label: "Internship", value: "1",      color: "#fbbf24" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="text-2xl font-black"
                  style={{ color: s.color }}
                >
                  {s.value}
                </motion.div>
                <div className="text-xs mt-0.5 text-subtle">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card p-5 flex items-center justify-between"
          >
            {[
              { icon: Github,   href: personalInfo.github,            label: "GitHub"   },
              { icon: Linkedin, href: personalInfo.linkedin,          label: "LinkedIn" },
              { icon: Mail,     href: `mailto:${personalInfo.email}`, label: "Email"    },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="flex flex-col items-center gap-1.5 text-muted hover:text-violet-500 transition-colors group"
                aria-label={label}
              >
                <div className="w-10 h-10 rounded-xl border border-[var(--c-border)] bg-violet-500/5 flex items-center justify-center group-hover:border-violet-500/30 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs">{label}</span>
              </motion.a>
            ))}

            {/* DSA grind */}
            <div className="flex flex-col items-center gap-1.5 text-muted">
              <div className="w-10 h-10 rounded-xl border border-violet-500/25 bg-violet-500/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-violet-400" />
              </div>
              <span className="text-xs">DSA 🔥</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
