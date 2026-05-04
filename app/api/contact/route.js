import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject, age } = await req.json();

    // =========================
    // ✅ VALIDATION
    // =========================
    if (!name || !email || !message) {
      return Response.json({
        success: false,
        error: "All fields are required",
      });
    }

    // =========================
    // 📧 EMAIL TRANSPORT
    // =========================
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
    // 📤 AUTO REPLY (IMPROVED)
    // =========================
    await transporter.sendMail({
      from: `"Vyrudhya" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Vyrudhya 😊",

      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        
        <p>Hi <b>${name}</b>, 👋</p>

        <p>
          Thank you for contacting <b>Vyrudhya</b> 😊<br/>
          We’ve received your request and will help you choose the right learning experience for your child.
        </p>

        <div style="background:#f7f4ef; padding:12px; border-radius:8px; margin:15px 0;">
          <p><b>Category:</b> ${subject || "General Inquiry"}</p>
          <p><b>Age Group:</b> ${age || "Not provided"}</p>
        </div>

        <p><b>Your Message:</b></p>
        <p style="background:#fafafa; padding:10px; border-radius:6px;">
          ${message}
        </p>

        <hr style="margin:20px 0;" />

        <p>⏳ We usually respond within a few hours.</p>

        <p>👉 Want faster help?</p>

        <p>
          <a href="https://wa.me/919133233330"
             style="background:#25D366; color:white; padding:10px 16px; text-decoration:none; border-radius:6px;">
             Chat on WhatsApp
          </a>
        </p>

        <hr style="margin:20px 0;" />

        <p>
          Best regards,<br/>
          <b>Team Vyrudhya</b><br/>
          <span style="color:#777;">Designed for joyful learning ✨</span>
        </p>

      </div>
      `,
    });

    // =========================
    // 📊 GOOGLE SHEET LOGGING
    // =========================
    try {
      const sheetRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          age,
          message,
        }),
      });

      // Optional debug (keep for now, remove later)
      const text = await sheetRes.text();
      console.log("SHEET RESPONSE:", text);

    } catch (sheetError) {
      console.warn("Sheet logging failed:", sheetError.message);
    }

    // =========================
    // ✅ FINAL RESPONSE
    // =========================
    return Response.json({ success: true });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
}