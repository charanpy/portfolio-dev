const submitContactData = async (data) => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
};

export default submitContactData;
