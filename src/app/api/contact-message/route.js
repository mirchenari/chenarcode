import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sendData = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "پیام جدید از طرف کاربر سایت چنار کد",
      html: `<div dir="rtl">
    <h1>اسم کاربر: ${body.name}</h1>
        <h2>ایمیل کاربر: ${body.email}</h2>
        <h2>شماره تماس کاربر: ${body.phone}</h2>
        <p> ${body.message}</p>
        </div>`,
    });

    return Response.json(sendData);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
