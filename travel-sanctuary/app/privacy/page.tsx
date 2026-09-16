export default function Privacy() {
  return (
    <main className="max-w-[720px] mx-auto px-8 py-16 font-sans text-ink-soft">
      <a href="/" className="text-accent text-sm font-semibold">← Back home</a>
      <h1 className="text-3xl text-ink font-normal mt-6 mb-8">Privacy Policy</h1>

      <p className="mb-6 text-sm leading-relaxed">
        Effective date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <h2 className="text-xl text-ink font-normal mt-8 mb-3">What We Collect</h2>
      <p className="mb-6 text-sm leading-relaxed">
        When you submit an inquiry or contact form on this site, we collect the information
        you provide: your name, email address, phone number (if given), any message you write,
        and, for booking inquiries, your requested move-in and move-out dates.
      </p>

      <h2 className="text-xl text-ink font-normal mt-8 mb-3">How We Use It</h2>
      <p className="mb-6 text-sm leading-relaxed">
        We use this information solely to respond to your inquiry, confirm availability, and
        communicate with you about a potential or confirmed stay. We do not sell, rent, or share
        your information with third parties for marketing purposes.
      </p>

      <h2 className="text-xl text-ink font-normal mt-8 mb-3">Third-Party Services</h2>
      <p className="mb-6 text-sm leading-relaxed">
        Submitted form data is transmitted via Resend and Gmail solely to deliver email
        notifications and confirmations. Availability information is read from a Google Calendar
        we manage; no personal data from your inquiry is written to that calendar.
      </p>

      <h2 className="text-xl text-ink font-normal mt-8 mb-3">Data Retention</h2>
      <p className="mb-6 text-sm leading-relaxed">
        Inquiry information is retained only as long as needed to respond to your request and
        manage a potential or confirmed stay.
      </p>

      <h2 className="text-xl text-ink font-normal mt-8 mb-3">Contact Us</h2>
      <p className="mb-6 text-sm leading-relaxed">
        Questions about this policy or your data can be sent to{" "}
        <a href="mailto:contacttravelerssanctuary@gmail.com" className="text-accent font-semibold">
          contacttravelerssanctuary@gmail.com
        </a>.
      </p>
    </main>
  );
}
