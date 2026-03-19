"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  Languages: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-300", dot: "bg-violet-400" },
  Frontend: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300", dot: "bg-cyan-400" },
  Backend: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-300", dot: "bg-emerald-400" },
  "AI & ML": { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-300", dot: "bg-rose-400" },
  "Tools & DevOps": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300", dot: "bg-amber-400" },
  Concepts: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-300", dot: "bg-indigo-400" },
};

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">My Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base dark:text-gray-400 text-gray-500 max-w-xl mx-auto">
            A curated set of tools, languages, and frameworks I use to build production systems.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              activeCategory === null
                ? "bg-violet-500/20 border-violet-500/40 text-violet-300"
                : "glass border-white/10 dark:text-gray-400 text-gray-500 hover:border-violet-500/20"
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const colors = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? `${colors.bg} ${colors.border} ${colors.text}`
                    : "glass border-white/10 dark:text-gray-400 text-gray-500 hover:border-violet-500/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-8">
          {categories
            .filter((cat) => !activeCategory || activeCategory === cat)
            .map((category, cidx) => {
              const colors = categoryColors[category];
              const categorySkills = skills[category as keyof typeof skills];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: cidx * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <h3 className={`text-sm font-bold uppercase tracking-widest ${colors.text}`}>{category}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {categorySkills.map((skill, sidx) => (
                      <SkillBadge
                        key={skill.name}
                        skill={skill}
                        colors={colors}
                        delay={sidx * 0.05}
                        inView={inView}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 glass rounded-2xl p-6 border border-violet-500/20"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">📈</span>
            <h3 className="text-sm font-bold text-violet-400 uppercase tracking-widest">Currently Learning</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Data Structures & Algorithms", progress: 55, icon: "🧮", color: "from-violet-500 to-purple-500" },
              { name: "System Design", progress: 35, icon: "🏗️", color: "from-cyan-500 to-blue-500" },
              { name: "Next.js & React Advanced", progress: 70, icon: "⚛️", color: "from-teal-500 to-emerald-500" },
              { name: "TypeScript", progress: 65, icon: "📘", color: "from-blue-500 to-indigo-500" },
            ].map((item, i) => (
              <LearningItem key={item.name} item={item} delay={i * 0.1} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBadgeProps {
  skill: { name: string; level: number };
  colors: { bg: string; border: string; text: string; dot: string };
  delay: number;
  inView: boolean;
}

function SkillBadge({ skill, colors, delay, inView }: SkillBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-xl p-3 text-center cursor-default transition-all duration-300 border ${
        hovered ? `${colors.bg} ${colors.border}` : "glass border-white/5"
      }`}
    >
      <div className={`text-xs font-semibold ${hovered ? colors.text : "dark:text-gray-300 text-gray-600"} transition-colors`}>
        {skill.name}
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5"
        >
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.6 }}
              className={`h-full bg-gradient-to-r ${colors.dot === "bg-violet-400" ? "from-violet-500 to-violet-400" : colors.dot === "bg-cyan-400" ? "from-cyan-500 to-cyan-400" : "from-emerald-500 to-emerald-400"} rounded-full`}
            />
          </div>
          <div className={`text-xs ${colors.text} mt-0.5`}>{skill.level}%</div>
        </motion.div>
      )}
    </motion.div>
  );
}

function LearningItem({
  item,
  delay,
  inView,
}: {
  item: { name: string; progress: number; icon: string; color: string };
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay + 0.3 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>{item.icon}</span>
          <span className="text-sm dark:text-gray-300 text-gray-600 font-medium">{item.name}</span>
        </div>
        <span className="text-xs dark:text-gray-500 text-gray-400">{item.progress}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.progress}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
        />
      </div>
    </motion.div>
  );
}
