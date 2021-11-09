import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contactFormSubscribe = async (email, _, data, to) => {
  const mailOptions = {
    from: `${email}`,
    to,
    subject: 'Hey! New Message from Portfolio',
    html: `
    <h1>New Message from your Portfolio</h1>
    <p>Email:<strong>${data.email}</strong></p><p>Username:<strong>${data.name}</strong></p> <br/> 
    <h2>Message</h2>
    <p>${data.message}</p>`,
  };

  try {
    await sgMail.send(mailOptions);
    return [200, 'Message sent successfully'];
  } catch (error) {
    return [500, 'Something went wrong!Please try again.'];
  }
};

export default contactFormSubscribe;
