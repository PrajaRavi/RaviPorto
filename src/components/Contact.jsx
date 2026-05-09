import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [termLines, setTermLines] = useState([
    "Initializing contact.exe",
    "Establishing connection...",
    "Connection established ✓",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTermLines((prev) => [...prev, `> Name: ${form.name}`, `> Email: ${form.email}`, "> Sending message..."]);
    setTimeout(() => {
      setStatus("sent");
      setTermLines((prev) => [...prev, "✓ Message sent successfully!"]);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-black mt-2" style={{ color: "var(--text)" }}>
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Terminal-style left panel */}
          <div
            className="rounded-2xl border p-6 font-mono text-sm space-y-2"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            {termLines.map((line, i) => (
              <p
                key={i}
                
                style={{
                  color:
                    line.startsWith("✓")
                      ? "var(--accent)"
                      : line.startsWith(">")
                      ? "var(--text)"
                      : "var(--textMuted)",
                }}
              >
                {line}
              </p>
            ))}

            <div className="border-t pt-4 mt-4 space-y-3" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span style={{ color: "var(--text)" }}>hello@raviPrajapati.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📱</span>
                <span style={{ color: "var(--text)" }}>+91 9161162317</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span style={{ color: "var(--text)" }}>India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {["GitHub", "LinkedIn", "Twitter", "Email"].map((s, i) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--textMuted)",
                    background: "var(--surface)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--textMuted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                  title={s}
                >
                  <a href={i==0?"https://github.com/prajaravi":i==1?"https://google.com":i==2?"https://github.com/prajaravi":"https://github.com/prajaravi"}>{["⌥", "in", "𝕏", "✉"][i]}</a>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", placeholder: "Your Name", type: "text" },
              { key: "email", placeholder: "Your Email", type: "email" },
            ].map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
                onFocus={e => e.target.style.borderColor = "var(--accent)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            ))}

            <textarea
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
              onFocus={e => e.target.style.borderColor = "var(--accent)"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />

            <button
              type="submit"
              disabled={status === "sent"}
              className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] disabled:opacity-60"
              style={{
                background: status === "sent" ? "var(--card)" : "var(--accent)",
                color: status === "sent" ? "var(--accent)" : "var(--bg)",
                border: status === "sent" ? "1px solid var(--accent)" : "none",
              }}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
