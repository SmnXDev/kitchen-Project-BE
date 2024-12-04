import nodemailer from "nodemailer";

export const sendEmail = async (name: string, email: string, message: string,phone:number) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.OWNER_EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  });
};
