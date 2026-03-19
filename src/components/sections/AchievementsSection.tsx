"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-mono text-sm uppercase tracking-widest">Impact & Results</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            Achievements & <span className="gradient-text">Impact</span>
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group cursor-default"
            >
              {/* Gradient line */}
              <div className={`h-1 w-full rounded-full bg-gradient-to-r ${achievement.gradient} mb-6`} />

              {/* Icon */}
              <div className="text-4xl mb-4">{achievement.icon}</div>

              {/* Value */}
              <div className={`text-4xl font-black bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform`}>
                {achievement.value}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold dark:text-white text-gray-800 mb-2">{achievement.title}</h3>

              {/* Description */}
              <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coding Journey Timeline */}
        <JourneyTimeline inView={inView} />
      </div>
    </section>
  );
}

function JourneyTimeline({ inView }: { inView: boolean }) {
  const journeyItems = [
    { year: "2021", title: "Started Coding", desc: "First Python programs, discovered programming", icon: "💻" },
    { year: "2022", title: "Diploma CSE", desc: "Started Computer Engineering, built first web app", icon: "🎓" },
    { year: "2024", title: "GRRAS Internship", desc: "Built 3+ production apps, 30% stability boost", icon: "💼" },
    { year: "2025", title: "NEO AI + B.Tech", desc: "Multi-LLM AI assistant + joined YCCE", icon: "🤖" },
    { year: "2026", title: "RapidAlert", desc: "Production AI disaster system, $0 API cost", icon: "🚨" },
    { year: "Now", title: "DSA Grind", desc: "Targeting top-tier tech companies", icon: "⚡" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16"
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl font-black dark:text-white text-gray-900">
          Coding <span className="gradient-text">Journey</span>
        </h3>
      </div>

      <div className="relative">
        {/* Horizontal line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {journeyItems.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Circle */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-2xl glass border border-violet-500/20 flex items-center justify-center text-2xl mb-3 relative z-10 hover:border-violet-500/40 transition-all"
              >
                {item.icon}
              </motion.div>

              <div className="text-xs font-bold text-violet-400 mb-1">{item.year}</div>
              <div className="text-xs font-semibold dark:text-white text-gray-800 mb-1">{item.title}</div>
              <div className="text-xs dark:text-gray-500 text-gray-400 leading-tight">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
