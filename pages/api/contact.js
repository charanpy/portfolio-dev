import contactFormValidation from '../../utils/contact-validation';
import contactFormSubscribe from '../../utils/contactMe';

const contactMe = async (req, res) => {
  if (req.method !== 'POST') return;
  const { email = '', name = '', message = '' } = req.body;
  console.log(email, name, message);
  const [isValid, validationMessage] = contactFormValidation(
    email,
    name,
    message
  );
  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: validationMessage,
    });
  }
  const data = {
    email,
    name,
    message,
  };
  const [statusCode, nodemailerResult] = await contactFormSubscribe(
    process.env.EMAIL_USERNAME,
    process.env.EMAIL_PASSWORD,
    data,
    process.env.EMAIL_TO
  );
  return res.status(statusCode).json({
    success: statusCode === 200,
    message: nodemailerResult,
  });
};

export default contactMe;
