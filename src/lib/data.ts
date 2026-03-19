export const personalInfo = {
  name: "Abhishek Kothe",
  email: "abhishekkothe0101@gmail.com",
  phone: "+91 9309407439",
  location: "Nagpur, India",
  linkedin: "https://linkedin.com/in/abhishek-kothe2006/",
  github: "https://github.com/Abhishek7439",
  tagline: "Building Scalable Systems with AI + Full Stack Engineering",
  bio: "I'm a passionate Full Stack Developer & AI Enthusiast currently pursuing B.Tech in Computer Technology at YCCE Nagpur. I craft production-grade AI systems and web applications that solve real-world problems at scale — from disaster management platforms to intelligent desktop assistants.",
  roles: [
    "Full Stack Developer",
    "AI Engineer",
    "DSA Learner",
    "Problem Solver",
    "System Architect",
  ],
};

export const education = [
  {
    institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
    degree: "B.Tech in Computer Technology",
    score: "SGPA: 8.77/10",
    period: "Aug 2025 – May 2028",
    location: "Nagpur, India",
    icon: "🎓",
  },
  {
    institution: "J D College of Engineering and Management",
    degree: "Diploma in Computer Engineering",
    score: "89.41%",
    period: "Sep 2022 – May 2025",
    location: "Nagpur, India",
    icon: "🏆",
  },
  {
    institution: "Swami Awadheshanand Public School",
    degree: "Secondary Education (CBSE Class X)",
    score: "82.40%",
    period: "July 2021 – March 2022",
    location: "Nagpur, India",
    icon: "📚",
  },
];

export const experiences = [
  {
    company: "GRRAS Solution Pvt. Ltd.",
    role: "Web Developer Intern",
    period: "May 2024 – Jul 2024",
    location: "Nagpur, India",
    type: "internship",
    highlights: [
      "Developed a full-stack Password Manager web application using HTML5, CSS3, and JavaScript with database integration during a 6-week internship",
      "Built and integrated front-end and back-end modules across 3+ web applications, following a full-stack workflow (UI → server logic → database)",
      "Conducted end-to-end QA testing on 3+ production web applications, identifying UI/functional bugs and improving stability by 30%",
      "Utilized 4 core web technologies delivering assigned features within sprint deadlines",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "SQL"],
    impact: "30% stability improvement",
  },
  {
    company: "J D College of Engineering & Management",
    role: "President & Vice President",
    period: "Sep 2022 – Mar 2025",
    location: "Nagpur, India",
    type: "leadership",
    highlights: [
      "Led college-level technical and non-technical events as President & Vice President, managing a 10+ member team",
      "Organized 2+ annual events, improving student engagement by 40%",
      "Drove initiatives that increased club membership and cross-departmental collaboration",
    ],
    tech: ["Leadership", "Event Management", "Team Building"],
    impact: "40% engagement boost",
  },
];

export const projects = [
  {
    id: "rapidalert",
    title: "RapidAlert",
    subtitle: "AI-Powered Disaster Management System",
    description:
      "A production-grade disaster management platform for government admins and citizens, built with Firebase, PWA, and an in-house AI engine. Handles 6 disaster types across 4 severity levels with real-time geo-targeted alerts.",
    longDescription:
      "RapidAlert is a mission-critical AI system built to help government admins manage disasters and alert citizens in real-time. It features NLP-based severity detection, a 15-min SOS spike detector, point-in-polygon geo-targeting (±50m accuracy), and a fully offline-capable PWA.",
    tech: ["JavaScript", "Firebase", "Firestore", "PWA", "NLP", "Geofencing", "Service Worker"],
    highlights: [
      "3-module AI engine: NLP severity detection + 15-min SOS spike detector + risk predictor",
      "0-100 risk scores per district with $0 AI API cost",
      "Geo-targeted push alerts with ±50m location accuracy",
      "100% offline capability with 70% smaller bundle size",
      "Citizen PWA with Phone OTP auth and GPS-based SOS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Abhishek7439",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-cyan-600",
    icon: "🌪️",
    period: "Feb 2026 – Present",
    status: "active",
  },
  {
    id: "neo",
    title: "NEO",
    subtitle: "AI Desktop Assistant",
    description:
      "A voice-activated AI desktop assistant integrating 4 LLMs (LLaMA3-70B, Mixtral-8x7B, Cohere Command-R+, Stable Diffusion XL) supporting 12+ intent categories with async automation engine.",
    longDescription:
      "NEO is an advanced multi-LLM desktop assistant with async task automation, multilingual voice support, and a stateful chatbot. It executes 7+ desktop tasks concurrently and achieves 500ms response latency with persistent JSON chat memory.",
    tech: ["Python", "Groq API", "Selenium", "Hugging Face", "Web Speech API", "asyncio", "LLaMA3"],
    highlights: [
      "Multi-LLM integration: LLaMA3-70B, Mixtral-8x7B, Cohere, Stable Diffusion",
      "Async engine for 70% faster multi-task execution",
      "Speech-to-text pipeline with multilingual support (Hindi → English)",
      "80% reduction in speech processing cost",
      "500ms response latency with persistent chat memory",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Abhishek7439",
    featured: true,
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    icon: "🤖",
    period: "Apr 2025 – May 2025",
    status: "completed",
  },
];

export const skills = {
  Languages: [
    { name: "Java", level: 85 },
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
  ],
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 82 },
    { name: "REST APIs", level: 85 },
    { name: "Firebase", level: 88 },
    { name: "SQL", level: 78 },
    { name: "Firestore", level: 85 },
  ],
  "AI & ML": [
    { name: "Groq API", level: 88 },
    { name: "Hugging Face", level: 82 },
    { name: "NLP", level: 80 },
    { name: "LLaMA3", level: 85 },
    { name: "asyncio", level: 83 },
  ],
  "Tools & DevOps": [
    { name: "Git", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Firebase", level: 88 },
    { name: "PWA", level: 85 },
    { name: "Selenium", level: 80 },
  ],
  Concepts: [
    { name: "PWA", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "Geofencing", level: 80 },
    { name: "Async Systems", level: 85 },
    { name: "RBAC", level: 78 },
  ],
};

export const achievements = [
  {
    title: "Diploma Excellence",
    value: "89.41%",
    description: "Top academic performance in Computer Engineering Diploma",
    icon: "🏅",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "B.Tech SGPA",
    value: "8.77",
    description: "Current SGPA at YCCE — consistently in top tier",
    icon: "🎯",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "$0 AI API Cost",
    value: "Zero Cost",
    description: "Built production AI systems with zero API spend using on-device inference",
    icon: "💡",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Team Leadership",
    value: "10+ Members",
    description: "Led multi-disciplinary team as President & Vice President",
    icon: "👑",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Engagement Growth",
    value: "+40%",
    description: "Increased student engagement through technical events",
    icon: "📈",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Systems Built",
    value: "6+",
    description: "Production web apps and AI systems shipped",
    icon: "🚀",
    gradient: "from-purple-500 to-indigo-500",
  },
];

export const journey = [
  {
    year: "2021",
    title: "Started Coding",
    description: "Wrote first lines of code in Python. Fell in love with programming.",
    icon: "💻",
  },
  {
    year: "2022",
    title: "Started Diploma CSE",
    description: "Enrolled in Computer Engineering Diploma. Discovered web development.",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "Built First Web App",
    description: "Created first full-stack application. Explored JavaScript ecosystem deeply.",
    icon: "🌐",
  },
  {
    year: "2024",
    title: "Intern @ GRRAS",
    description: "Professional internship — built 3+ production apps, improved code stability 30%.",
    icon: "💼",
  },
  {
    year: "2025",
    title: "NEO AI Assistant",
    description: "Built multi-LLM AI desktop assistant integrating 4 LLMs with async automation.",
    icon: "🤖",
  },
  {
    year: "2025",
    title: "Joined YCCE (B.Tech)",
    description: "Upgraded to B.Tech Computer Technology. Currently at SGPA 8.77.",
    icon: "🏛️",
  },
  {
    year: "2026",
    title: "RapidAlert Launch",
    description: "Shipped production-grade AI disaster management system with $0 API cost.",
    icon: "🚨",
  },
  {
    year: "Now",
    title: "Mastering DSA",
    description: "Grinding LeetCode, learning system design, targeting top tech companies.",
    icon: "⚡",
  },
];

export const currentlyLearning = [
  { name: "Data Structures & Algorithms", progress: 55, icon: "🧮", color: "from-violet-500 to-purple-500" },
  { name: "System Design", progress: 35, icon: "🏗️", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js & React Advanced", progress: 70, icon: "⚛️", color: "from-teal-500 to-emerald-500" },
  { name: "TypeScript", progress: 65, icon: "📘", color: "from-blue-500 to-indigo-500" },
];
