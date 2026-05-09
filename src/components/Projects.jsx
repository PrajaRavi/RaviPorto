import { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import MusicWeb from "../assets/video/MusicWeb.mp4"
import ExpenseTracker from "../assets/video/ExpenseTracker.mp4"
function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
      style={{
        background: "var(--card)",
        borderColor: hovered ? project.color : "var(--border)",
        boxShadow: hovered ? `0 0 30px ${project.color}30` : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.5s ease ${index * 120}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview mockup */}
      <div
        className="h-40 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, var(--surface), ${project.color}20)` }}
      >
        <div className="absolute  flex items-center justify-center">
          <div
            className="w-full h-full z-50  rounded-lg flex items-center justify-center text-3xl font-black opacity-1"
            style={{ background: project.color + "20", color: project.color }}
          >
            {project?.src?<video src={project.src}   controls={true} className="w-full h-full" autoPlay={true}></video>:null}
          </div>
        </div>
        {/* Scan line effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${project.color}40 2px, ${project.color}40 4px)`,
          }}
        />
        {/* Color accent strip */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: project.color }}
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--textMuted)" }}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ background: "var(--surface)", color: "var(--textMuted)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-2">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:opacity-80"
              style={{ background: project.color, color: "#000" }}
            >
              ▶ Live Demo
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105"
              style={{ borderColor: "var(--border)", color: "var(--text)", background: "transparent" }}
            >
              GitHub
            </button>
          </div>
          <span className="text-xs font-mono" style={{ color: "var(--textMuted)" }}>
            ⭐ {project.stars}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            FEATURED PROJECTS
          </span>
          <h2 className="text-4xl font-black mt-2" style={{ color: "var(--text)" }}>
            Things I have built
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="px-6 py-2.5 rounded-xl text-sm font-bold border transition-all hover:scale-105"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              background: "transparent",
            }}
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
