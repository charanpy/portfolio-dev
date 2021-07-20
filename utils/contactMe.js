import nodemailer from 'nodemailer';

const contactFormSubscribe = async (email, password, data, to) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: `"Portfolio" ${data.email}`,
    to: to,
    subject: 'Contacting from Portfolio',
    html: `<p>${data.email}</p><p>${data.name}</p><br /> <br/> <h1><b>${data.message}</b></h1>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return [200, 'Message sent successfully'];
  } catch (error) {
    console.log(error);
    return [500, 'Something went wrong!Please try again.'];
  }
};

export default contactFormSubscribe;
