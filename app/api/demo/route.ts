import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail-utils";

export async function POST(request: Request) {
    console.log("Demo API hit");
    try {
        const body = await request.json();
        console.log("Request body:", body);

        // Format the email content
        const html = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Institution:</strong> ${body.institution}</p>
      <p><strong>Institution Type:</strong> ${body.institutionType}</p>
      <p><strong>Student Count:</strong> ${body.studentCount}</p>
      <p><strong>Current System:</strong> ${body.currentSystem || "N/A"}</p>
      <p><strong>Preferred Date:</strong> ${body.demoDate || "Not specified"}</p>
      <p><strong>Preferred Time:</strong> ${body.timeSlot || "Not specified"}</p>
      <p><strong>Requirements:</strong> ${body.requirements || "N/A"}</p>
      <p><strong>Newsletter:</strong> ${body.newsletter ? "Yes" : "No"}</p>
    `;

        const result = await sendMail({
            to: process.env.RECEIVER_EMAIL || "contact.oceanzen@gmail.com",
            subject: `New Demo Request from ${body.institution}`,
            html,
        });

        if (result.success) {
            return NextResponse.json({ message: "Request sent successfully" });
        } else {
            return NextResponse.json({ error: "Failed to send request" }, { status: 500 });
        }
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
