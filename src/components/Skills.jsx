import { useEffect, useRef, useState } from "react";
import { skills } from "../data";

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            TECHNICAL SKILLS
          </span>
          <h2 className="text-4xl font-black mt-2" style={{ color: "var(--text)" }}>
            What I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="space-y-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  {skill.name}
                </span>
                <span className="text-sm font-mono" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "var(--card)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    transitionDelay: `${i * 100 + 200}ms`,
                    boxShadow: `0 0 10px ${skill.color}60`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap gap-3 justify-center">
          {[
            "React", "TypeScript", "Node.js", "Express", "MongoDB",
            "Redis", "Docker", "AWS", "Nginx", "Socket.IO",
            "JWT", "GraphQL", "Tailwind", "Next.js", "Git"
          ].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-mono border transition-all hover:scale-105 hover:border-current"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--textMuted)",
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.8)",
                transition: `all 0.4s ease ${i * 40}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--textMuted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
