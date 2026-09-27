import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, product, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields: Name, Email, Phone, and Message.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    console.log(`[Next.js API Inquiry] Inquiry from ${name} (${email}, ${phone}) for ${product || "General"}`);

    const mailResult = await sendInquiryEmail({
      name,
      email,
      phone,
      product: product || "All Acrylic Sheets",
      message,
    });

    console.log("[Next.js API Inquiry] Nodemailer Dispatch Status:", mailResult.details);

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Mahadev Plastic! Your inquiry has been received. A confirmation has been sent to your email, and our sales team will contact you shortly.",
      data: {
        name,
        email,
        phone,
        product: product || "All Acrylic Sheets",
        receivedAt: new Date().toISOString(),
        mailResult: mailResult.details,
      },
    });
  } catch (err: any) {
    console.error("[Next.js API Inquiry Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send inquiry. Please call us directly at +91 9987904482.",
      },
      { status: 500 }
    );
  }
}
