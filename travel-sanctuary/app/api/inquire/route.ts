import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, email, phone, message, moveIn, moveOut } = await req.json();
  const isBooking = Boolean(moveIn && moveOut);

  const dateBlock = isBooking ? `Move-in: ${moveIn}\nMove-out: ${moveOut}\n\n` : "";

  try {
    // Notify the owner
    await resend.emails.send({
      from: "Traveler's Sanctuary Website <onboarding@resend.dev>",
      to: "contacttravelerssanctuary@gmail.com",
      replyTo: email,
      subject: isBooking ? `New Booking Inquiry from ${name}` : `New Message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

${dateBlock}Message:
${message || "No additional message."}`,
    });

    // Confirm with the guest, sent from the real Gmail account
    await transporter.sendMail({
      from: `"Traveler's Sanctuary LLC" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: isBooking
        ? "We received your inquiry — Traveler's Sanctuary LLC"
        : "Thanks for reaching out — Traveler's Sanctuary LLC",
      text: isBooking
        ? `Hi ${name},

Thanks for reaching out about staying with us from ${moveIn} to ${moveOut}. We've received your inquiry and will get back to you shortly.

If you have any questions in the meantime, just reply to this email.

— Traveler's Sanctuary LLC`
        : `Hi ${name},

Thanks for reaching out to Traveler's Sanctuary LLC. We've received your message and will get back to you shortly.

— Traveler's Sanctuary LLC`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
