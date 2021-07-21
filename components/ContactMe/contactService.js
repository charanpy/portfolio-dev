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
    return [response.success, response.message];
  } catch (error) {
    return [false, 'Something went wrong'];
  }
};

export default submitContactData;
