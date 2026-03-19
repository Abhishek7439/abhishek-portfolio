"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, CheckCircle2, TrendingUp } from "lucide-react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                      exp.type === "internship"
                        ? "border-violet-500 bg-violet-500/20"
                        : "border-cyan-500 bg-cyan-500/20"
                    }`}
                  >
                    {exp.type === "internship" ? (
                      <Briefcase className="w-3 h-3 text-violet-400" />
                    ) : (
                      <Users className="w-3 h-3 text-cyan-400" />
                    )}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-violet-500/20 transition-all group"
                  >
                    {/* Header */}
                    <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === "internship"
                          ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                          : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      }`}>
                        {exp.type === "internship" ? "Internship" : "Leadership"}
                      </div>
                      <h3 className="text-xl font-black dark:text-white text-gray-900">{exp.role}</h3>
                      <p className={`font-semibold text-base ${
                        exp.type === "internship" ? "text-violet-400" : "text-cyan-400"
                      }`}>
                        {exp.company}
                      </p>
                      <div className={`flex items-center gap-3 text-xs dark:text-gray-500 text-gray-400 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>📍 {exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`flex gap-2 text-sm dark:text-gray-400 text-gray-500 leading-relaxed ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            exp.type === "internship" ? "text-violet-400" : "text-cyan-400"
                          }`} />
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Impact badge */}
                    <div className={`mt-4 flex ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400">{exp.impact}</span>
                      </div>
                    </div>

                    {/* Tech */}
                    <div className={`mt-3 flex flex-wrap gap-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-xs dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-500 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
