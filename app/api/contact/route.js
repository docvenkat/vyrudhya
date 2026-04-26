import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anvitha.nar@gmail.com",
        pass: "gbkpohbhakowctam",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "anvitha.nar@gmail.com",
      subject: "New Contact Form Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}