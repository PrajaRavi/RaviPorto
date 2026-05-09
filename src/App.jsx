import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { themeName, setThemeName, theme, themeNames } = useTheme();

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar themeName={themeName} setThemeName={setThemeName} themeNames={themeNames} />
      <Hero themeName={themeName}/>
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Terminal />
      <Contact />
      <Footer themeName={themeName} setThemeName={setThemeName} />

      {/* Scroll to top */}
      <button
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all hover:scale-110 z-40"
        style={{ background: "var(--accent)", color: "var(--bg)" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
