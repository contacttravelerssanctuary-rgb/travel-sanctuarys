"use client";
import { useEffect, useState } from "react";

type MonthAvailability = { label: string; available: boolean };

export default function AvailabilityGrid() {
  const [months, setMonths] = useState<MonthAvailability[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/availability")
      .then((res) => res.json())
      .then((data) => {
        if (data.months) setMonths(data.months);
        else setError(true);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <p className="text-ink-soft text-sm">
        Availability is temporarily unavailable to load — please inquire directly.
      </p>
    );
  }

  if (!months) {
    return <p className="text-ink-soft text-sm">Loading availability…</p>;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-[700px] mx-auto mb-7 font-sans">
      {months.map((m) => (
        <div
          key={m.label}
          className={`border rounded-md text-center px-2 py-4 text-[13px] ${
            m.available ? "text-accent border-accent" : "text-[#b6b0a3] bg-cream-2 border-line"
          }`}
        >
          <div className="font-bold tracking-wide mb-1.5">{m.label}</div>
          <span className="block text-base mt-1">{m.available ? "✓" : "✕"}</span>
        </div>
      ))}
    </div>
  );
}
