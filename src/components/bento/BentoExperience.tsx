"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, CheckCircle2, TrendingUp } from "lucide-react";
import { experiences } from "@/lib/data";

export default function BentoExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bento-card p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
        <span className="text-xs font-bold uppercase tracking-widest text-subtle">Experience</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-[var(--c-border)] bg-violet-500/2 p-5 transition-all hover:border-violet-500/25"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-2 ${
                  exp.type === "internship"
                    ? "border-violet-500/20 bg-violet-500/8 text-violet-400"
                    : "border-cyan-500/20 bg-cyan-500/8 text-cyan-400"
                }`}>
                  {exp.type === "internship" ? <Briefcase className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                  {exp.type === "internship" ? "Internship" : "Leadership"}
                </div>
                <h3 className="text-base font-black leading-tight text-heading">{exp.role}</h3>
                <p className={`text-sm font-semibold mt-0.5 ${exp.type === "internship" ? "text-violet-400" : "text-cyan-400"}`}>
                  {exp.company}
                </p>
                <p className="text-xs mt-0.5 text-subtle">{exp.period} · {exp.location}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                exp.type === "internship" ? "bg-violet-500/10 border border-violet-500/20" : "bg-cyan-500/10 border border-cyan-500/20"
              }`}>
                {exp.type === "internship"
                  ? <Briefcase className="w-4 h-4 text-violet-400" />
                  : <Users className="w-4 h-4 text-cyan-400" />}
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-4">
              {exp.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                  <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${exp.type === "internship" ? "text-violet-400" : "text-cyan-400"}`} />
                  {h}
                </li>
              ))}
            </ul>

            {/* Impact + tech */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/8 border border-emerald-500/15 text-xs font-bold text-emerald-400">
                <TrendingUp className="w-3 h-3" /> {exp.impact}
              </div>
              <div className="flex flex-wrap gap-1">
                {exp.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs bg-[var(--c-border)] text-subtle border border-[var(--c-border)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
