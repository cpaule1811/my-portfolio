import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API)

export default async function handler(req, res) {
  const { name, email, subject, message, mobile } = JSON.parse(req.body);
  const msg = { 
    to: process.env.EMAIL_TO,
    from: `"${name}" <${email}>`,
    subject,
    text: message
  }
  const sent = await sgMail.send(msg)
  console.log(sent)
  res.json(sent)
}
