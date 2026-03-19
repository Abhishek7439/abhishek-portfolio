"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Clock, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">What I&apos;ve Built</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base dark:text-gray-400 text-gray-500 max-w-xl mx-auto">
            Production-grade AI systems and web applications built to solve real-world problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="project-card glass rounded-3xl border border-white/10 overflow-hidden hover:border-violet-500/20 transition-all"
            >
              {/* Gradient header */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Info */}
                  <div className="flex-1 space-y-5">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-4xl">{project.icon}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-2xl font-black dark:text-white text-gray-900">{project.title}</h3>
                              {project.featured && (
                                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                                  <Star className="w-3 h-3" />
                                  Featured
                                </span>
                              )}
                              {project.status === "active" && (
                                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                                  <Zap className="w-3 h-3" />
                                  Active
                                </span>
                              )}
                            </div>
                            <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs dark:text-gray-500 text-gray-400">
                          <Clock className="w-3 h-3" />
                          {project.period}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 flex-shrink-0">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.slice(0, 4).map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs dark:text-gray-300 text-gray-600"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${project.gradient}`} />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
                    >
                      {expandedId === project.id ? (
                        <>Less details <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>More details <ChevronDown className="w-3.5 h-3.5" /></>
                      )}
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 border-t border-white/10">
                            <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
                              {project.longDescription}
                            </p>
                            {project.highlights[4] && (
                              <div className="mt-3 flex items-start gap-2 text-xs dark:text-gray-300 text-gray-600">
                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${project.gradient}`} />
                                {project.highlights[4]}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {project.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-xs font-medium border skill-badge`}
                          style={{
                            background: `linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))`,
                            borderColor: "rgba(124,58,237,0.2)",
                            color: "rgb(167,139,250)",
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual */}
                  <div className="lg:w-64 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className={`h-48 lg:h-full min-h-[200px] rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center text-8xl`}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Abhishek7439"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 dark:text-gray-300 text-gray-600 hover:border-violet-500/30 hover:text-violet-400 transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
