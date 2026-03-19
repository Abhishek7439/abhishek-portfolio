"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const WHITE   = "#ffffff";
const ZINC300 = "#d4d4d8";
const ZINC400 = "#a1a1aa";
const ZINC500 = "#71717a";

export default function BentoContact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  const links = [
    { icon: Mail,     label: "Email",    value: personalInfo.email,       href: `mailto:${personalInfo.email}`, color: "#a78bfa", ring: "hover:border-violet-500/40" },
    { icon: Linkedin, label: "LinkedIn", value: "abhishek-kothe2006",     href: personalInfo.linkedin,          color: "#60a5fa", ring: "hover:border-blue-500/40" },
    { icon: Github,   label: "GitHub",   value: "Abhishek7439",           href: personalInfo.github,            color: "#e4e4e7", ring: "hover:border-white/25" },
    { icon: Phone,    label: "Phone",    value: personalInfo.phone,       href: `tel:${personalInfo.phone}`,    color: "#34d399", ring: "hover:border-emerald-500/40" },
  ];

  return (
    <motion.div
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bento-card p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-rose-500 to-pink-500" />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ZINC500 }}>Get In Touch</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="space-y-5">
          {/* Availability badge */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-400">Open to Opportunities</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: ZINC400 }}>
              Looking for <strong style={{ color: WHITE }}>full-time roles</strong> and internships. Response within 24 hours.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2.5">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-3 p-3 rounded-xl border border-white/6 bg-white/2 ${l.ring} transition-all group`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/6 flex items-center justify-center flex-shrink-0">
                  <l.icon className="w-4 h-4" style={{ color: l.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs" style={{ color: ZINC500 }}>{l.label}</div>
                  <div className="text-xs font-semibold truncate" style={{ color: l.color }}>{l.value}</div>
                </div>
                <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: l.color }}>→</span>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 p-3 rounded-xl border border-white/6">
            <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold" style={{ color: WHITE }}>{personalInfo.location}</div>
              <div className="text-xs" style={{ color: ZINC500 }}>Remote / Hybrid / On-site</div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {(["name", "email"] as const).map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wide" style={{ color: ZINC500 }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                  placeholder={field === "email" ? "you@email.com" : "Your name"}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/4 border border-white/8 focus:border-violet-500/40 outline-none text-sm transition-all"
                  style={{ color: WHITE }}
                />
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wide" style={{ color: ZINC500 }}>Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder="Tell me about the opportunity or project..."
              className="w-full px-3 py-2.5 rounded-xl bg-white/4 border border-white/8 focus:border-violet-500/40 outline-none text-sm transition-all resize-none"
              style={{ color: WHITE }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all text-white ${
              status === "success"  ? "bg-emerald-600"
              : status === "loading" ? "bg-violet-600/60 cursor-wait"
              : "bg-gradient-to-r from-violet-600 to-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
            }`}
          >
            {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
              : status === "success" ? <><CheckCircle2 className="w-4 h-4" /> Sent!</>
              : <><Send className="w-4 h-4" /> Send Message</>}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
