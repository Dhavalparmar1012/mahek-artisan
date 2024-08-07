import nodemailer from "nodemailer";

const fromEmail = process.env.EMAIL_USER;
const adminEmail = process.env.ADMIN_EMAIL;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: fromEmail,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (mailOptions: nodemailer.SendMailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Failed to send email:", error);
  }
};

export const sendContactSubmissionEmail = async ({
  email,
  fname,
  lname,
  telephone,
  message,
}: {
  email: string;
  fname: string;
  lname: string;
  telephone: string;
  message: string;
}) => {
  const mailOptions = {
    to: adminEmail,
    from: fromEmail,
    subject: "New Contact Form Submission",
    html: `
      <p><strong>First Name:</strong> ${fname}</p>
      <p><strong>Last Name:</strong> ${lname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telephone:</strong> ${telephone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await sendMail(mailOptions);
  } catch (error) {
    console.log("Failed to send contact submission email:", error);
  }
};
