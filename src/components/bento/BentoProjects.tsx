"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { projects, achievements } from "@/lib/data";

const WHITE   = "#ffffff";
const ZINC300 = "#d4d4d8";
const ZINC400 = "#a1a1aa";
const ZINC500 = "#71717a";

export default function BentoProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div ref={ref} id="projects" className="space-y-5">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center gap-2"
      >
        <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ZINC500 }}>Featured Projects</span>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="bento-card project-card overflow-hidden"
        >
          <div className={`h-px w-full bg-gradient-to-r ${project.gradient}`} />

          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Content */}
              <div className="flex-1 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-xl font-black" style={{ color: WHITE }}>{project.title}</h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/8 border border-amber-500/20 text-amber-400 text-xs font-bold">
                          <Star className="w-2.5 h-2.5" /> Featured
                        </span>
                      )}
                      {project.status === "active" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                          <Zap className="w-2.5 h-2.5" /> Active
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.subtitle}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: ZINC500 }}>{project.period}</p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <motion.a
                      href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center hover:text-violet-400 hover:border-violet-500/30 transition-all"
                      style={{ color: ZINC400 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                      style={{ color: ZINC400 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: ZINC400 }}>{project.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {project.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs" style={{ color: ZINC300 }}>
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${project.gradient}`} />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Expand button */}
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  {expandedId === project.id
                    ? <><ChevronUp className="w-3 h-3" /> Less</>
                    : <>More details <ChevronDown className="w-3 h-3" /></>}
                </button>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs leading-relaxed border-t border-white/5 pt-3" style={{ color: ZINC400 }}>
                        {project.longDescription}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium border border-violet-500/15 bg-violet-500/6 text-violet-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right visual */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`lg:w-52 h-36 lg:h-auto flex-shrink-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-[0.08] hover:opacity-[0.14] transition-opacity flex items-center justify-center text-7xl`}
              >
                {project.icon}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Achievements + Journey */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        id="achievements"
        className="bento-card p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ZINC500 }}>Achievements & Impact</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="text-2xl mb-1">{a.icon}</div>
              <div className={`text-lg font-black bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}>{a.value}</div>
              <div className="text-xs mt-0.5 leading-tight" style={{ color: ZINC500 }}>{a.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Coding Journey */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ZINC500 }}>Coding Journey</div>
          <div className="relative">
            <div className="absolute top-5 left-4 right-4 h-px bg-white/5" />
            <div className="flex justify-between relative z-10">
              {[
                { year: "2021", icon: "💻", label: "Started" },
                { year: "2022", icon: "🎓", label: "Diploma" },
                { year: "2024", icon: "💼", label: "GRRAS" },
                { year: "2025", icon: "🤖", label: "NEO AI" },
                { year: "2025", icon: "🏛️", label: "YCCE" },
                { year: "2026", icon: "🚨", label: "RapidAlert" },
                { year: "Now",  icon: "⚡", label: "DSA" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.06 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center text-lg hover:border-violet-500/25 transition-all">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-violet-400">{item.year}</div>
                  <div className="text-xs text-center" style={{ color: ZINC500 }}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
