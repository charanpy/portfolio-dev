import IPData from 'ipdata';
import contactFormValidation from '../../utils/contact-validation';
import contactFormSubscribe from '../../utils/contactMe';

const cache = {
  max: 1000,
  maxAge: 10 * 60 * 1000,
};
const ipdata = new IPData(process.env.IP_TOKEN, cache);

const contactMe = async (req, res) => {
  if (req.method !== 'POST') return;
  let { email = '', name = '', message = '' } = req.body;
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
  const { city, region, country_name, latitude, longitude } =
    await ipdata.lookup();
  message =
    message + `${city},${region},${country_name},${latitude},${longitude}`;
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
