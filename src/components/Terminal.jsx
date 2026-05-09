import { useState, useRef, useEffect } from "react";
import { terminalCommands } from "../data";

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "output", text: terminalCommands.help },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: cmd }];
    const output = terminalCommands[cmd];

    if (output === "__CLEAR__") {
      setHistory([]);
    } else if (output) {
      newHistory.push({ type: "output", text: output });
      setHistory(newHistory);
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
      });
      setHistory(newHistory);
    }

    setCmdHistory((prev) => [cmd, ...prev]);
    setCmdIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      const next = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(next);
      setInput(cmdHistory[next] || "");
    } else if (e.key === "ArrowDown") {
      const next = Math.max(cmdIdx - 1, -1);
      setCmdIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] || "");
    }
  };

  return (
    <section id="experience" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            INTERACTIVE TERMINAL
          </span>
          <h2 className="text-4xl font-black mt-2" style={{ color: "var(--text)" }}>
            Explore My Portfolio
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--textMuted)" }}>
            Type commands to navigate — try{" "}
            <code className="px-1.5 py-0.5 rounded" style={{ background: "var(--card)", color: "var(--accent)" }}>
              help
            </code>
          </p>
        </div>

        <div
          className="rounded-2xl border overflow-hidden shadow-2xl"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs font-mono" style={{ color: "var(--textMuted)" }}>
              ravi@portfolio:~$
            </span>
          </div>

          {/* Output */}
          <div className="p-5 font-mono text-sm space-y-3 min-h-64 max-h-96 overflow-y-auto">
            {history.map((entry, i) => (
              <div key={i}>
                {entry.type === "input" && (
                  <p style={{ color: "var(--textMuted)" }}>
                    <span style={{ color: "var(--accent)" }}>ravi@portfolio:~$</span> {entry.text}
                  </p>
                )}
                {entry.type === "output" && (
                  <pre
                    className="text-xs leading-relaxed whitespace-pre-wrap"
                    style={{ color: "var(--text)" }}
                  >
                    {entry.text}
                  </pre>
                )}
                {entry.type === "error" && (
                  <p className="text-xs" style={{ color: "#f87171" }}>
                    {entry.text}
                  </p>
                )}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>ravi@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-sm font-mono caret-current"
                style={{ color: "var(--text)", caretColor: "var(--accent)" }}
                // autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
            {/* <div ref={bottomRef} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
