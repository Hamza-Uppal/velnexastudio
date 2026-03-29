import nodemailer from "nodemailer";

export async function GET() {
  return Response.json({
    success: true,
    message: "Contact API is running. Use POST to submit the form.",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, business, email, packageName, message } = body;

    if (!name || !business || !email || !packageName || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

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
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
            ${message.replace(/\n/g, "<br/>")}
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
        error: error.message,
      },
      { status: 500 }
    );
  }
}