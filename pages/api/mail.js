import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message, mobile } = JSON.parse(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_EMAIL,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH,
      accessToken: process.env.GOOGLE_ACCESS,
      expires: 1484314697598,
    },
  });
  const mail = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: subject,
    text:
      message +
      `\n\nregards, ${name}` +
      `\nemail: ${email}` +
      `\nmobile: ${mobile}`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mail, (err, info) => {
      if (err) {
        reject(err)
        res.json({ success: false, statusMessage: "Message failed" });
      } else { 
        resolve(info)
        res.json({ success: true, statusMessage: "Message successfully sent!" });
      }
    });
    
  });
}
