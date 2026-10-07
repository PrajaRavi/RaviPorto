import ReactICon from "../assets/react.png"
import NestIcon from "../assets/node-js-icon.png"
import MongodbIcon from "../assets/mongodb-icon.png"
import MusicwebVideo from "../assets/video/MusicWeb.mp4"
import ExpenseTracker from "../assets/video/wc.mp4"
import NginxIcon from "../assets/nginx-icon.png"
import prodRagVideo from "../assets/video/prodrag.mp4"
import TruthlensVideo from "../assets/video/Truthlens.mp4"
import redisicon from "../assets/redis-512px.png"

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export const techStack = [
  { name: "React", sub: "Frontend", icon:ReactICon },
  { name: "Express.js", sub: "Backend", icon: NestIcon },
  { name: "Node.js", sub: "Runtime", icon: NestIcon },
  { name: "MongoDB", sub: "Database", icon: MongodbIcon},
];

export const projects = [
  {
    title: "Spotify Clone",
    desc: "Music streaming app with authentication, playlists, real-time search and premium features.",
    tags: ["MERN", "Redux", "Tailwind", "Socket.IO", "JWT"],
    stars: "1",
    git:"https://github.com/PrajaRavi/ravistudio_micro_service",
    color: "#1DB954",
    src:MusicwebVideo
  },
  {
    title: "WhatsApp Clone",
    desc: "Whatsapp clone website for gain practical experince of websocket.",
    tags: ["MERN", "Socket.IO", "JWT","rechart.js","Redux"],
    stars: "0k",
    git:"https://github.com/PrajaRavi/WhatsAppClone.git",
    color: "#61dafb",
    src:ExpenseTracker
  },
  {
    title: "prodRag",
    desc: "Full-featured e-commerce platform with Razorpay payments and admin panel.",
    tags: ["RAG","Agents","Langchain","LangGraph"],
    stars: "0k",
    git:"https://github.com/PrajaRavi/prodRAG.git",
    demo:"https://prodrag-2.onrender.com/",
    color: "#f97316",
    src:prodRagVideo

  },
  {
    title: "TruthLensAI-misinformation detection system",
    desc: "Misinformation analysis platform",
    tags: ["AI","Gemini","Groq","LangChain","LangGraph"],
    stars: "0k",
    git:"https://github.com/PrajaRavi/TruthLens-AI-Misinformation-Intelligence.git",
    demo:"https://truthlensai-vqrl.onrender.com/",
    color: "#a855f7",
    src:TruthlensVideo
  },
];

export const stats = [
  { value: "5+", label: "Projects Built", icon: "🚀" },
  { value: "5K+", label: "Lines of Code", icon: "✏️" },
  { value: "10+", label: "Technologies", icon: "🎮" },
  { value: "80%", label: "Performance Score", icon: "⚡" },
];

export const architecture = [
  { name: "Client", sub: "React App", icon:ReactICon  },
  { name: "Nginx", sub: "Load Balancer", icon: NginxIcon },
  { name: "Node.js", sub: "Express Server", icon: NestIcon },
  { name: "Redis", sub: "Cache", icon: redisicon },
  { name: "MongoDB", sub: "Database", icon: MongodbIcon},
];

export const archFeatures = [
  "JWT Auth",
  "Rate Limiting",
  "WebSocket",
  "Caching",
  "Compression",
  "Security",
];

export const skills = [
  { name: "React", level: 95, color: "#61dafb" },
  { name: "Node.js", level: 92, color: "#68d391" },
  { name: "MongoDB", level: 88, color: "#4ade80" },
  { name: "TypeScript", level: 85, color: "#3b82f6" },
  { name: "Redis", level: 80, color: "#ef4444" },
  { name: "Docker", level: 78, color: "#38bdf8" },
];

export const codeSnippet = `const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return res.status(401).json(
    { message: 'Not authorized' }
  );

  try {
    const decoded = jwt.verify(
      token, process.env.JWT_SECRET
    );
    req.user = await User.findById(
      decoded.id
    ).select('-password');
    next();
  } catch (error) {
    res.status(401).json(
      { message: 'Not authorized' }
    );
  }
};`;

export const terminalCommands = {
  help: `Available Commands:
  > about       Show who I am
  > skills      Show my skills
  > projects    Show my projects
  > experience  Show my experience
  > resume      Download my resume
  > contact     Get in touch with me
  > clear       Clear the terminal`,
  about: `Hi! I'm Ravi Prajapati
  Full Stack MERN Developer
  I build scalable, performant and
  user-focused web applications.`,
  skills: `Tech Stack:
  → React, Redux, TypeScript
  → Node.js, Express.js
  → MongoDB, Redis
  → Docker, AWS, Nginx`,
  projects: `Featured Projects:
  → Spotify Clone   (2.1k ⭐)
  → DevConnect      (1.6k ⭐)
  → E-Commerce      (1.8k ⭐)
  → Task Manager    (1.3k ⭐)`,
  contact: `Get in Touch:
  📧 hello@raviPrajapati.dev
  📱 +91 98765 43210
  📍 India`,
  clear: "__CLEAR__",
};
