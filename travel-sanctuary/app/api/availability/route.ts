import ical from "node-ical";

export async function GET() {
  const icsUrl = process.env.GOOGLE_CALENDAR_ICS_URL!;

  try {
    const events = await ical.async.fromURL(icsUrl);
    const booked: { start: string; end: string }[] = [];

    for (const key in events) {
      const ev = events[key];
      if (ev.type !== "VEVENT") continue;
      booked.push({
        start: new Date(ev.start).toISOString(),
        end: new Date(ev.end).toISOString(),
      });
    }

    const now = new Date();
    const months = [];
    for (let i = 0; i < 6; i++) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() + i + 1, 0, 23, 59, 59);
      const label = monthStart.toLocaleString("en-US", { month: "short" }).toUpperCase();

      const unavailable = booked.some((b) => {
        const bStart = new Date(b.start);
        const bEnd = new Date(b.end);
        return bStart <= monthEnd && bEnd >= monthStart;
      });

      months.push({ label, available: !unavailable });
    }

    return Response.json({ booked, months });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Could not load calendar" }, { status: 500 });
  }
}
