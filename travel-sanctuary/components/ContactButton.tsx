"use client";
import { useState } from "react";

export default function ContactButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function closeAndReset() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={closeAndReset}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-ink-soft hover:bg-cream-2 transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {status === "sent" ? (
              <div className="text-center py-16 px-8 font-sans">
                <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl mb-2">Message sent!</h3>
                <p className="text-ink-soft text-sm max-w-xs mx-auto">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="font-sans px-8 pt-9 pb-8">
                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-1">
                  Traveler's Sanctuary LLC
                </p>
                <h3 className="text-2xl mb-6">Get in Touch</h3>

                <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-1.5">
                  Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />

                <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />

                <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-dark text-white py-3.5 rounded-lg text-[13px] font-bold uppercase tracking-wide hover:bg-ink-soft transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-sm mt-3">
                    Something went wrong — please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
