import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject, age } = await req.json();

    // ✅ Basic validation
    if (!name || !email || !message) {
      return Response.json({
        success: false,
        error: "All fields are required",
      });
    }

    // 📧 Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 📩 EMAIL TO YOU
    // =========================
    await transporter.sendMail({
      from: `"Vyrudhya Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form - ${subject || "General"}`,
      text: `
Name: ${name}
Email: ${email}
Age Group: ${age || "Not provided"}
Subject: ${subject || "General"}

Message:
${message}
      `,
    });

    // =========================
    // 📤 AUTO REPLY
    // =========================
    await transporter.sendMail({
  from: `"Vyrudhya" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Thanks for contacting Vyrudhya 😊",

  html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    
    <p>Hi <b>${name}</b>,</p>

    <p>
      Thank you for contacting <b>Vyrudhya</b> 😊 <br/>
      We’ve received your request and will get back to you shortly.
    </p>

    <p><b>Category:</b> ${subject || "General Inquiry"}</p>
    <p><b>Age Group:</b> ${age}</p>

    <hr style="margin: 16px 0;" />

    <p><b>Your Message:</b></p>
    <p style="background:#f7f7f7; padding:10px; border-radius:6px;">
      ${message}
    </p>

    <hr style="margin: 16px 0;" />

    <p>
      We usually respond within a few hours.
    </p>

    <p>
      If urgent, message us on WhatsApp:<br/>
      <a href="https://wa.me/919133233330" 
         style="color:#0a7cff; text-decoration:none;">
         Chat on WhatsApp
      </a>
    </p>

    <br/>

    <p>
      Best regards,<br/>
      <b>Team Vyrudhya</b>
    </p>

  </div>
  `,
});

    // =========================
    // 📊 GOOGLE SHEET LOGGING
    // =========================
    try {
      await fetch(process.env.SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // ✅ EXACT ORDER MATCHING APPS SCRIPT
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          age: age,
          message: message
        }),
      });
    } catch (sheetError) {
      console.warn("Sheet logging failed:", sheetError.message);
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
}