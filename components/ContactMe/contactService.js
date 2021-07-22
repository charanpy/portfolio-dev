export const checkWindow = (func) => {
  if (typeof window !== undefined) {
    return func();
  }
  return null;
};

export const contactLimit = () => {
  return JSON.parse(localStorage.getItem('uidkcntme'))?.count;
};

export const setContactCount = () => {
  const count = contactLimit();
  localStorage.setItem(
    'uidkcntme',
    JSON.stringify({ count: count ? count + 1 : 1 })
  );
};

const submitContactData = async (data) => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    checkWindow(setContactCount);
    return [response.success, response.message];
  } catch (error) {
    return [false, 'Something went wrong'];
  }
};

export default submitContactData;
