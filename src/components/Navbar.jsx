import { useState, useEffect } from "react";
import { navLinks } from "../data";
import RaviResume from "../assets/RaviResume.pdf"
export default function Navbar({ themeName, setThemeName, themeNames }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  

  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b" : ""
      }`}
      style={{
        background: scrolled ? "rgba(10,15,26,0.9)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-xl font-black" style={{ color: "var(--accent)" }}>
              R
            </span>
            <span className="text-xl font-black" style={{ color: "var(--text)" }}>
              /
            </span>
            <span className="text-xs ml-1 px-1.5 py-0.5 rounded font-mono" 
              style={{ background: "var(--accent)", color: "var(--bg)", fontWeight: 700 }}>
              .dev
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ color: "var(--textMuted)" }}
                onMouseEnter={e => e.target.style.color = "var(--accent)"}
                onMouseLeave={e => e.target.style.color = "var(--textMuted)"}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--accent)",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                {themeName}
                <span style={{ color: "var(--textMuted)" }}>▾</span>
              </button>

              {themeOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 rounded-xl border shadow-2xl py-1 z-50"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  {themeNames.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setThemeName(t); setThemeOpen(false); }}
                      className="w-full text-left px-4 py-2 text-xs font-mono transition-all"
                      style={{
                        color: t === themeName ? "var(--accent)" : "var(--textMuted)",
                        background: t === themeName ? "var(--card)" : "transparent",
                      }}
                    >
                      {t === themeName ? "● " : "○ "}{t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                borderColor: "var(--accent)",
              }}
            >
             <a href={RaviResume} download={"RaviResume"}> Resume ↓</a>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "var(--text)" }}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-2"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-2 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              {link}
            </button>
          ))}
          <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs mb-2" style={{ color: "var(--textMuted)" }}>Theme:</p>
            <div className="flex flex-wrap gap-2">
              {themeNames.map((t) => (
                <button
                  key={t}
                  onClick={() => setThemeName(t)}
                  className="px-2 py-1 rounded text-xs border"
                  style={{
                    borderColor: t === themeName ? "var(--accent)" : "var(--border)",
                    color: t === themeName ? "var(--accent)" : "var(--textMuted)",
                    background: "var(--card)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
