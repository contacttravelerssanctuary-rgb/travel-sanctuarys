import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveler's Sanctuary LLC | Your Home Between Assignments",
  description:
    "Comfortable, furnished housing for travel nurses, consultants, agency contractors, and anyone working an assignment away from home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
