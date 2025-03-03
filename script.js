document.querySelector('.submit-button').addEventListener('click', event => {
  event.preventDefault();

  let user = {};
  let formIsValid = true;

  const inputFields = document.querySelectorAll('.input-field');

  inputFields.forEach(input => {
    const parentBox = input.closest('.input-box');
    const label = parentBox.querySelector(".empty-label");

    if (input.value.trim() === "") {
      parentBox.classList.add('empty');
      formIsValid = false;
      
      if (input.name === 'email') {
        label.textContent = 'Email cannot be empty';
      } 
    } else {
      parentBox.classList.remove('empty');
      user[input.name] = input.value;
    }
  
    if (input.name === 'email' && input.value.trim() !== "") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(input.value.trim())) {
        formIsValid = false;
        parentBox.classList.add('empty');
        label.textContent = 'Looks like this is not an email';
      } else {
        input.classList.remove('empty');
      }
    }
  });

  if (formIsValid) {
    alert("First Name: " + user.fname + 
      "\nLast Name: " + user.lname +
      "\nEmail: " + user.email + 
      "\nPassword: " + user.password);
  document.querySelector(".sign-up-form").reset();
  }
});