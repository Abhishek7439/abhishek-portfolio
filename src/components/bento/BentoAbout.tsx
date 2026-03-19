"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/lib/data";

export default function BentoAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bento-card p-6 h-full space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500" />
        <span className="text-xs font-bold uppercase tracking-widest text-subtle">About Me</span>
      </div>

      {/* Bio */}
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-body">
          I&apos;m a <span className="font-semibold text-heading">Full Stack Developer &amp; AI Enthusiast</span> from{" "}
          <span className="text-violet-400 font-medium">Nagpur, India</span>, currently pursuing B.Tech at{" "}
          <span className="font-semibold text-heading">YCCE</span> with a SGPA of{" "}
          <span className="text-violet-400 font-semibold">8.77</span>.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          I build production-grade AI systems and scalable web apps — from a{" "}
          <span className="text-cyan-400 font-medium">AI Disaster Management Platform</span> with NLP to a{" "}
          <span className="text-emerald-400 font-medium">Multi-LLM Desktop Assistant</span> integrating 4 LLMs with{" "}
          <span className="font-semibold text-heading">$0 API cost</span>.
        </p>
      </div>

      {/* Traits */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: "⚡", label: "Full Stack",    desc: "End-to-end engineering" },
          { icon: "🧠", label: "AI Builder",    desc: "$0 API cost systems" },
          { icon: "🏗️", label: "System Design", desc: "Scalable architectures" },
          { icon: "📈", label: "DSA Grind",     desc: "Targeting top companies" },
        ].map((t) => (
          <motion.div
            key={t.label}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl p-3 border border-[var(--c-border)] bg-violet-500/3 flex items-center gap-2.5"
          >
            <span className="text-xl flex-shrink-0">{t.icon}</span>
            <div>
              <div className="text-xs font-semibold text-heading">{t.label}</div>
              <div className="text-xs text-subtle">{t.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <div className="border-t border-[var(--c-border)] pt-4 space-y-3">
        <div className="flex items-center gap-1.5 mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-subtle">Education</span>
        </div>
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold leading-tight text-heading">{edu.institution}</div>
              <div className="text-xs mt-0.5 text-subtle">{edu.degree}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-bold text-violet-400">{edu.score}</span>
                <span className="flex items-center gap-0.5 text-xs text-subtle">
                  <Calendar className="w-2.5 h-2.5" />
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
