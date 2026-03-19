"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  { label: "Languages",    color: "#a78bfa", dot: "bg-violet-400",  skills: ["Java","Python","JavaScript","TypeScript","HTML5","CSS3"] },
  { label: "Frontend",     color: "#22d3ee", dot: "bg-cyan-400",    skills: ["React","Next.js","Tailwind CSS","Framer Motion"] },
  { label: "Backend & DB", color: "#34d399", dot: "bg-emerald-400", skills: ["Node.js","Firebase","Firestore","SQL","REST APIs"] },
  { label: "AI & ML",      color: "#f87171", dot: "bg-rose-400",    skills: ["Groq API","LLaMA3","Mixtral","Hugging Face","NLP"] },
  { label: "Tools",        color: "#fbbf24", dot: "bg-amber-400",   skills: ["Git","VS Code","Selenium","PWA","asyncio"] },
];

export default function BentoSkills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];

  return (
    <motion.div
      ref={ref}
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bento-card p-6 h-full flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-cyan-500 to-emerald-500" />
        <span className="text-xs font-bold uppercase tracking-widest text-subtle">Skills &amp; Tools</span>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-1.5">
        {skillCategories.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setActive(i)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all"
            style={{
              color: active === i ? c.color : "var(--c-subtle)",
              borderColor: active === i ? c.color + "44" : "var(--c-border)",
              background: active === i ? c.color + "14" : "transparent",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Skills pills */}
      <div className="flex-1">
        <div className="flex items-center gap-1.5 mb-3">
          <div className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
          <span className="text-xs font-bold" style={{ color: cat.color }}>{cat.label}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="px-3 py-1.5 rounded-xl text-xs font-medium border border-[var(--c-border)] bg-violet-500/4 text-muted cursor-default hover:border-violet-500/30 hover:text-violet-400 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Learning progress */}
      <div className="border-t border-[var(--c-border)] pt-4">
        <div className="text-xs font-bold uppercase tracking-widest mb-3 text-subtle">Currently Leveling Up</div>
        <div className="space-y-2.5">
          {[
            { name: "DSA / LeetCode",   progress: 55, color: "from-violet-500 to-purple-500" },
            { name: "System Design",    progress: 35, color: "from-cyan-500 to-blue-500" },
            { name: "Next.js Advanced", progress: 70, color: "from-teal-500 to-emerald-500" },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted">{item.name}</span>
                <span className="text-subtle">{item.progress}%</span>
              </div>
              <div className="h-1 bg-[var(--c-border)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.progress}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
