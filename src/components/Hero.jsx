import { useEffect, useRef, useState } from "react";
import myphoto from "../assets/mern-copy1.png"

const FloatingIcon = ({ children, style }) => (
  <div
    className="absolute flex items-center justify-center rounded-2xl text-2xl font-bold shadow-2xl animate-float"
    style={{ ...style, background: "var(--card)", border: "1px solid var(--border)" }}
  >
    {children}
  </div>
);

const TypingText = ({ texts }) => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span style={{ color: "var(--accent)" }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero({themeName}) {
  const canvasRef = useRef(null);
let [showTerminal,setshowTerminal]=useState(false)


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#00ff9d";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent + "60";
        ctx.fill();

        particles.forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = accent + Math.floor((1 - dist / 100) * 30).toString(16).padStart(2, "0");
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ background: "var(--accent)", animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-mono" style={{ color: "var(--textMuted)" }}>
                Hi, I'm
              </span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-none" style={{ color: "var(--text)" }}>
                Ravi{" "}
                <span style={{ color: "var(--accent)" }}>Prajapati</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold mt-2" style={{ color: "var(--text)" }}>
                Full Stack{" "}
                <TypingText texts={["MERN Developer", "React Engineer", "Nest.js Expert", "MongoDB Dev"]} />
              </h2>
            </div>

            <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--textMuted)" }}>
              I build scalable, performant and user-focused web applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </button>
              <button
                className="px-6 py-3 rounded-xl font-bold text-sm border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              {["GitHub", "LinkedIn", "Twitter", "Email"].map((s, i) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--textMuted)",
                    background: "var(--card)",
                  }}
                  title={s}
                >
                  {["⌥", "in", "𝕏", "✉"][i]}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Terminal / Visual */}
          {themeName=="Terminal"?<div className="relative hidden lg:block">
            <div
              className="relative rounded-2xl border overflow-hidden shadow-2xl animate-slideUp"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs font-mono" style={{ color: "var(--textMuted)" }}>
                  ravi@portfolio:~$
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2" style={{ minHeight: 280 }}>
                <p style={{ color: "var(--textMuted)" }}>ravi@portfolio:~$ help</p>
                <p className="font-bold" style={{ color: "var(--accent)" }}>Available Commands:</p>
                {[
                  ["about", "Show who I am"],
                  ["skills", "Show my skills"],
                  ["projects", "Show my projects"],
                  ["experience", "Show my experience"],
                  ["resume", "Download my resume"],
                  ["contact", "Get in touch"],
                  ["clear", "Clear the terminal"],
                ].map(([cmd, desc]) => (
                  <div key={cmd} className="flex gap-4">
                    <span className="w-20 font-bold" style={{ color: "var(--accent)" }}>
                      &gt; {cmd}
                    </span>
                    <span style={{ color: "var(--textMuted)" }}>{desc}</span>
                  </div>
                ))}
                <p className="mt-4" style={{ color: "var(--textMuted)" }}>
                  ravi@portfolio:~$ <span className="animate-pulse">█</span>
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-bold border"
              style={{ background: "var(--card)", borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              ⚡ Available for work
            </div>
            <div
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-bold border"
              style={{ background: "var(--card)", borderColor: "var(--border)", color: "var(--textMuted)" }}
            >
              🌍 India
            </div>
          </div>:<div className="relative hidden lg:block animate-slideUp">
            <img src={myphoto} className="w-full  " alt="profile"></img>
            </div>}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-mono" style={{ color: "var(--textMuted)" }}>
          Scroll Down
        </span>
        <span style={{ color: "var(--textMuted)" }}>↓</span>
      </div>
    </section>
  );
}
