import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email
    const data = await resend.emails.send({
      from: "Dawson from Modern Dev <dawson.adams@moderndev.pro>",
      to: process.env.CONTACT_EMAIL!, // your own address (e.g. same as above)
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `
        You’ve received a new message from your portfolio contact form.
        
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

