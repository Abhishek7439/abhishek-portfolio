"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abhishek-kothe2006",
      href: personalInfo.linkedin,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Abhishek7439",
      href: personalInfo.github,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">Let&apos;s Connect</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-900 mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base dark:text-gray-400 text-gray-500 max-w-xl mx-auto">
            I&apos;m open to full-time roles, internships, and interesting project collaborations. 
            Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Available for Opportunities</span>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
                Currently open to <strong className="dark:text-white text-gray-800">full-time positions</strong> and 
                exciting freelance projects. Response time: within 24 hours.
              </p>
            </div>

            {/* Contact links */}
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className={`flex items-center gap-4 p-4 rounded-xl glass border ${link.border} hover:shadow-lg transition-all group`}
              >
                <div className={`w-11 h-11 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center`}>
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                </div>
                <div>
                  <div className="text-xs dark:text-gray-500 text-gray-400 font-medium">{link.label}</div>
                  <div className={`text-sm font-semibold ${link.color} group-hover:underline`}>{link.value}</div>
                </div>
                <div className="ml-auto">
                  <div className={`text-xs ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`}>→</div>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10"
            >
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <div className="text-xs dark:text-gray-500 text-gray-400 font-medium">Location</div>
                <div className="text-sm font-semibold dark:text-gray-200 text-gray-700">{personalInfo.location}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/10 space-y-5"
            >
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-6">Send me a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 dark:text-white text-gray-800 placeholder:text-gray-500 focus:border-violet-500/50 focus:bg-white/8 outline-none text-sm transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 dark:text-white text-gray-800 placeholder:text-gray-500 focus:border-violet-500/50 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState((p) => ({ ...p, subject: e.target.value }))}
                  placeholder="Job opportunity / Collaboration / ..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 dark:text-white text-gray-800 placeholder:text-gray-500 focus:border-violet-500/50 outline-none text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 dark:text-white text-gray-800 placeholder:text-gray-500 focus:border-violet-500/50 outline-none text-sm transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                  status === "success"
                    ? "bg-emerald-600 text-white"
                    : status === "loading"
                    ? "bg-violet-600/70 text-white cursor-wait"
                    : "bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-violet-500/25"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
