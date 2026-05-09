import { useEffect, useRef, useState } from "react";
import { architecture, archFeatures, codeSnippet, stats } from "../data";

function StatCard({ stat, index, visible }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-2xl border transition-all hover:scale-105"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.5s ease ${index * 100}ms`,
      }}
    >
      <span className="text-2xl mb-1">{stat.icon}</span>
      <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>
        {stat.value}
      </span>
      <span className="text-xs text-center mt-1" style={{ color: "var(--textMuted)" }}>
        {stat.label}
      </span>
    </div>
  );
}

export default function Architecture() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Architecture Section */}
      <section ref={ref} className="py-24" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-4xl font-black mt-2" style={{ color: "var(--text)" }}>
              Scalable & Production Ready
            </h2>
          </div>

          {/* Arch flow */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
            {architecture.map((node, i) => (
              <div key={node.name} className="flex items-center gap-3">
                <div
                  className="flex flex-col items-center justify-center  md:p-5 p-2 rounded-2xl border transition-all hover:scale-105"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.8)",
                    transition: `all 0.5s ease ${i * 100}ms`,
                  }}
                >
                  {/* <span className="text-2xl">{node.icon}</span> */}
                  <img src={node.icon} alt="logo" className="md:w-20 md:h-20 w-14 h-14" />
                  <span className="text-xs font-bold mt-1" style={{ color: "var(--text)" }}>
                    {node.name}
                  </span>
                  <span className="text-xs" style={{ color: "var(--textMuted)" }}>
                    {node.sub}
                  </span>
                </div>
                {i < architecture.length - 1 && (
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--accent)", opacity: visible ? 1 : 0, transition: `all 0.3s ease ${i * 100 + 200}ms` }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            {archFeatures.map((f, i) => (
              <span
                key={f}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--textMuted)",
                  opacity: visible ? 1 : 0,
                  transition: `all 0.4s ease ${i * 60}ms`,
                }}
              >
                <span style={{ color: "var(--accent)" }}>✓</span> {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                CODE SHOWCASE
              </span>
              <h2 className="text-4xl font-black" style={{ color: "var(--text)" }}>
                Clean. Efficient. Scalable.
              </h2>
              <div className="space-y-2">
                {["Auth Middleware", "Socket Handler", "Error Handling", "Redis Cache"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm px-4 py-2 rounded-lg"
                    style={{ background: "var(--card)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>▶</span>
                    <span style={{ color: "var(--text)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border overflow-hidden shadow-2xl"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-mono" style={{ color: "var(--textMuted)" }}>
                  middleware/auth.js
                </span>
                <button
                  onClick={handleCopy}
                  className="text-xs px-3 py-1 rounded border transition-all hover:scale-105"
                  style={{
                    borderColor: copied ? "var(--accent)" : "var(--border)",
                    color: copied ? "var(--accent)" : "var(--textMuted)",
                    background: "var(--card)",
                  }}
                >
                  {copied ? "✓ Copied" : "⎘ Copy"}
                </button>
              </div>
              <pre
                className="p-5 text-xs overflow-x-auto leading-relaxed font-mono"
                style={{ color: "var(--text)", maxHeight: 320 }}
              >
                {codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
