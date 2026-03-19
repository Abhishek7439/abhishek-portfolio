"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, Brain, Rocket, MapPin, Calendar } from "lucide-react";
import { education, personalInfo } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { label: "Years Coding", value: "4+", icon: Code2, color: "text-violet-400" },
    { label: "Projects Built", value: "6+", icon: Rocket, color: "text-cyan-400" },
    { label: "AI Systems", value: "2", icon: Brain, color: "text-emerald-400" },
    { label: "B.Tech SGPA", value: "8.77", icon: GraduationCap, color: "text-amber-400" },
  ];

  const traits = [
    { icon: "⚡", title: "Full Stack", desc: "End-to-end web apps from UI to database" },
    { icon: "🧠", title: "AI Builder", desc: "Production AI systems with $0 API cost" },
    { icon: "🏗️", title: "System Thinker", desc: "Scalable, offline-first architectures" },
    { icon: "📈", title: "Growth Mindset", desc: "Actively mastering DSA & System Design" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/10">
              <p className="text-base dark:text-gray-300 text-gray-600 leading-relaxed">
                I&apos;m <strong className="dark:text-white text-gray-900">Abhishek Kothe</strong>, a passionate Full Stack Developer and AI enthusiast from Nagpur, India.
                Currently pursuing B.Tech in Computer Technology at{" "}
                <span className="text-violet-400 font-semibold">YCCE (SGPA 8.77)</span>, 
                I build real-world AI systems and scalable web applications that solve real problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/10">
              <p className="text-base dark:text-gray-300 text-gray-600 leading-relaxed">
                My journey started with a <span className="text-cyan-400 font-semibold">Diploma in Computer Engineering (89.41%)</span> where I discovered the power of code. I then built
                production-grade systems — from an AI disaster management platform with NLP to a multi-LLM desktop assistant that integrates 4 large language models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/10">
              <p className="text-base dark:text-gray-300 text-gray-600 leading-relaxed">
                I&apos;m passionate about <span className="text-emerald-400 font-semibold">building at the intersection of AI and Full Stack Engineering</span> — 
                crafting systems that are not just functional, but intelligent, scalable, and impactful. Currently grinding DSA and System Design to join top-tier tech companies.
              </p>
            </motion.div>

            {/* Traits */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-violet-500/20 transition-all group"
                >
                  <div className="text-2xl mb-2">{trait.icon}</div>
                  <div className="font-semibold text-sm dark:text-white text-gray-800 mb-1">{trait.title}</div>
                  <div className="text-xs dark:text-gray-400 text-gray-500">{trait.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl p-5 border border-white/10 text-center group hover:border-violet-500/20 transition-all"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs dark:text-gray-400 text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-sm font-bold dark:text-white text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i + 0.5 }}
                    className="relative pl-5 border-l-2 border-violet-500/30 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-violet-500/30 border border-violet-400" />
                    <div className="font-semibold text-sm dark:text-white text-gray-800 leading-tight">
                      {edu.institution}
                    </div>
                    <div className="text-xs dark:text-gray-400 text-gray-500 mt-0.5">{edu.degree}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-bold text-violet-400">{edu.score}</span>
                      <span className="flex items-center gap-1 text-xs dark:text-gray-500 text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-4 border border-white/10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <div className="font-semibold text-sm dark:text-white text-gray-800">{personalInfo.location}</div>
                <div className="text-xs dark:text-gray-400 text-gray-500">Available for remote / on-site opportunities</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Open to Work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
