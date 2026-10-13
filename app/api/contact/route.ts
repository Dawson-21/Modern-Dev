import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !contactEmail) {
      console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL is not set");
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    // Created per request so the build does not need the key.
    const resend = new Resend(apiKey);
    const { name, email, serviceType, message } = await req.json();

    await resend.emails.send({
      from: "Modern Dev <dawson.adams@moderndev.pro>",
      to: contactEmail,
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Service Type: ${serviceType}

${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
