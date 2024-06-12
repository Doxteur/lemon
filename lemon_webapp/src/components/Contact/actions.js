// actions.js
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = (formData) => async (dispatch) => {
  try {
    console.log("POST");
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    dispatch({ type: SUBMIT_FORM, payload: result });
    console.error();('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
