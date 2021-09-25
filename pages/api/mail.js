import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API);

export default async function handler(req, res) {
  try {
    const { name, email, subject, message, mobile } = JSON.parse(req.body);
    const text = `${message} \nmobile: ${mobile} \nemail: ${email}`;
    const msg = {
      to: process.env.EMAIL_TO,
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      subject,
      text,
    };
    const sent = await sgMail.send(msg);
    res.json(sent);
  } catch(e) {
    console.log(e)
    res.json(e);
  }
}
