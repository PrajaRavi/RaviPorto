import { themes } from "../hooks/useTheme";

const themeColors = {
  "MERN Dark": "#00ff9d",
  "React Blue": "#61dafb",
  "Node Green": "#68d391",
  Terminal: "#f0e040",
};

export default function Footer({ themeName, setThemeName }) {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Theme selector */}
        <div className="text-center space-y-4">
          <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
            Multiple Themes — Choose your favorite vibe
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(themes).map((t) => (
              <button
                key={t}
                onClick={() => setThemeName(t)}
                className="px-4 py-2 rounded-xl border text-xs font-mono transition-all hover:scale-105"
                style={{
                  background: t === themeName ? "var(--card)" : "var(--surface)",
                  borderColor: t === themeName ? themeColors[t] : "var(--border)",
                  color: t === themeName ? themeColors[t] : "var(--textMuted)",
                  boxShadow: t === themeName ? `0 0 20px ${themeColors[t]}30` : "none",
                }}
              >
                {t === themeName && "● "}{t}
              </button>
            ))}
          </div>
          <p className="text-xs font-mono" style={{ color: "var(--textMuted)" }}>
            &gt; Set theme: {themeName}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <span className="font-black" style={{ color: "var(--accent)" }}>R</span>
            <span className="font-black" style={{ color: "var(--text)" }}>/</span>
            <span className="text-xs font-mono" style={{ color: "var(--textMuted)" }}>
              Ravi Prajapati — Full Stack MERN Developer
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--textMuted)" }}>
            © 2026 Ravi Prajapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
