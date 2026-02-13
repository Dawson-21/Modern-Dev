import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, serviceType, message } = await req.json();

    await resend.emails.send({
      from: "Modern Dev <dawson.adams@moderndev.pro>",
      to: process.env.CONTACT_EMAIL!,
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
