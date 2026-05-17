import nodemailer from "nodemailer";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return Response.json({
    success: true,
    message: "Contact API is running. Use POST to submit the form.",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const business = body.business?.trim();
    const email = body.email?.trim();
    const packageName = body.packageName?.trim();
    const message = body.message?.trim();

    if (!name || !business || !email || !packageName || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      console.error("Contact API Error: missing email environment variables.");

      return Response.json(
        {
          success: false,
          message: "Contact form is not configured yet.",
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeBusiness = escapeHtml(business);
    const safeEmail = escapeHtml(email);
    const safePackageName = escapeHtml(packageName);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Velnexa Studio Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Website Lead - ${packageName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Business:</strong> ${safeBusiness}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Package:</strong> ${safePackageName}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
            ${safeMessage}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("New lead received:", {
      name,
      business,
      email,
      packageName,
      message,
    });

    return Response.json({
      success: true,
      message: "Lead submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while sending the lead.",
      },
      { status: 500 }
    );
  }
}
