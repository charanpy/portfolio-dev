const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validateEmail = (email) => emailRegex.test(email);

const contactFormValidation = (email, name, message) => {
  if (!validateEmail(email) || !name.length || !message.length) {
    return [false, 'Invalid data'];
  }
  return [true, ''];
};

export default contactFormValidation;
