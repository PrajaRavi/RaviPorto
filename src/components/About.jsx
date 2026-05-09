import { useEffect, useRef, useState } from "react";
import { techStack } from "../data";

const codeLines = [
  { type: "comment", text: "// Full Stack API Handler" },
  { type: "keyword", text: "app.get('/api/hello', async (req, res) => {" },
  { type: "indent", text: "  try {" },
  { type: "indent2", text: "    const data = await Model.find({});" },
  { type: "indent2", text: "    res.status(200).json({" },
  { type: "indent3", text: "      success: true," },
  { type: "indent3", text: "      data" },
  { type: "indent2", text: "    });" },
  { type: "indent", text: "  } catch (error) {" },
  { type: "indent2", text: "    res.status(500).json({" },
  { type: "indent3", text: "      message: 'Server Error'" },
  { type: "indent2", text: "    });" },
  { type: "indent", text: "  }" },
  { type: "keyword", text: "});" },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            HOW I BUILD
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl font-black" style={{ color: "var(--text)" }}>
              MERN Stack Expertise
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--textMuted)" }}>
              I build complete end-to-end applications using the MERN stack.
            </p>

            {/* Stack flow */}
            <div className="flex items-center gap-2 flex-wrap ">
              {techStack.map((t, i) => (
                <div key={t.name} className="flex items-center gap-2 ">
                  <div
                    className="flex flex-col items-center justify-center md:p-5 p-1  rounded-2xl border transition-all hover:scale-105 hover:border-current"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  >
                    <img src={t.icon} alt="logo" className="md:w-20 md:h-20 w-10 h-10" />
                    <span className="text-xs font-bold mt-1" style={{ color: "var(--text)" }}>
                      {t.name}
                    </span>
                    <span className="text-xs" style={{ color: "var(--textMuted)" }}>
                      {t.sub}
                    </span>
                  </div>
                  {i < techStack.length - 1 && (
                    <span style={{ color: "var(--accent)" }}>→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Flow diagram */}
            <div
              className="rounded-xl border p-4"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between text-xs font-mono">
                {["API Request", "Server", "Database", "Response"].map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className="px-2 py-1 rounded"
                      style={{ background: "var(--surface)", color: "var(--text)" }}
                    >
                      {s}
                    </span>
                    {i < 3 && <span style={{ color: "var(--accent)" }}>→</span>}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="px-6 py-2.5 rounded-xl text-sm font-bold border transition-all hover:scale-105"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "transparent",
              }}
              onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Stack →
            </button>
          </div>

          {/* Right — code */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div
              className="rounded-2xl border overflow-hidden shadow-2xl"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {/* Tab bar */}
              <div className="flex gap-1 px-4 py-2 border-b" style={{ borderColor: "var(--border)" }}>
                {["JS", "TS", "NestJs", "MongoDB"].map((tab, i) => (
                  <span
                    key={tab}
                    className="px-3 py-1 rounded-t text-xs font-mono"
                    style={{
                      background: i === 0 ? "var(--card)" : "transparent",
                      color: i === 0 ? "var(--accent)" : "var(--textMuted)",
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-xs space-y-1 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-300`}
                    style={{
                      transitionDelay: `${i * 50}ms`,
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(8px)",
                    }}
                  >
                    <span
                      style={{
                        color:
                          line.type === "comment"
                            ? "var(--textMuted)"
                            : line.type === "keyword"
                            ? "var(--accent)"
                            : "var(--text)",
                      }}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
