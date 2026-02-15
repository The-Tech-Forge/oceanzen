import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail-utils";

export async function POST(request: Request) {
    console.log("Contact API hit");
    try {
        const body = await request.json();
        console.log("Request body:", body);

        // Format the email content
        const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
      <p><strong>Institution:</strong> ${body.institution || "N/A"}</p>
      <p><strong>Institution Type:</strong> ${body.institutionType || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
      <p><strong>Newsletter:</strong> ${body.newsletter ? "Yes" : "No"}</p>
    `;

        const result = await sendMail({
            to: process.env.RECEIVER_EMAIL || "contact.oceanzen@gmail.com",
            subject: `New Contact Message from ${body.name}`,
            html,
        });

        if (result.success) {
            return NextResponse.json({ message: "Message sent successfully" });
        } else {
            return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
        }
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
