"use client";
import { useEffect, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";

export default function InquiryButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [bookedRanges, setBookedRanges] = useState<DateRange[]>([]);
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (!open) return;
    fetch("/api/availability")
      .then((res) => res.json())
      .then((data) => {
        if (data.booked) {
          setBookedRanges(
            data.booked.map((b: { start: string; end: string }) => ({
              from: new Date(b.start),
              to: new Date(b.end),
            }))
          );
        }
      })
      .catch(() => {});
  }, [open]);

  function formatDate(d?: Date) {
    if (!d) return "";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!range?.from || !range?.to) {
      alert("Please select a move-in and move-out date.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          moveIn: range.from.toDateString(),
          moveOut: range.to.toDateString(),
          website,
        }),
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
    setRange(undefined);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
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
                <h3 className="text-2xl mb-2">Thanks for reaching out!</h3>
                <p className="text-ink-soft text-sm max-w-xs mx-auto">
                  We've sent a confirmation to your email. Our team will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="font-sans px-8 pt-9 pb-8">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="absolute left-[-9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-1">
                  Traveler's Sanctuary LLC
                </p>
                <h3 className="text-2xl mb-6">Inquire About Your Stay</h3>

                <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-2">
                  Select your dates
                </label>
                <div className="mb-2 border border-line rounded-xl p-3 flex justify-center bg-cream/40">
                  <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={setRange}
                    disabled={[{ before: new Date() }, ...bookedRanges]}
                    modifiers={{ booked: bookedRanges }}
                    modifiersClassNames={{ booked: "!bg-[#b6b0a3] !text-white line-through opacity-70" }}
                  />
                </div>
                <p className="text-xs text-ink-soft mb-6 min-h-[16px]">
                  {range?.from && range?.to
                    ? `${formatDate(range.from)} → ${formatDate(range.to)}`
                    : "Choose a move-in and move-out date"}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-1.5">
                      Name
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-soft uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                    />
                  </div>
                </div>

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
                  Message (optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full border border-line rounded-lg px-3.5 py-2.5 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-dark text-white py-3.5 rounded-lg text-[13px] font-bold uppercase tracking-wide hover:bg-ink-soft transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Inquiry"}
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
