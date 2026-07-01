import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, company, service, formType } = body;

    const isQuote = formType === "quote";

    const { data, error } = await resend.emails.send({
        // In app/api/contact/route.ts
        from: "BizCentra Global <noreply@bizcentra.com.ng>",
        to: ["admin@bizcentra.com.ng"],  // Now this will work!
      subject: isQuote
        ? `New Quote Request from ${name} - ${company}`
        : `New Contact Message from ${name}`,
      replyTo: email as string,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            ${isQuote ? "New Quote Request" : "New Contact Message"}
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>` : ""}
            ${company ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Required</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>` : ""}
            ${subject ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px;">${message || "No additional details provided."}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            Sent from BizCentra Global Limited website on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}