// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Validate name
function validateName() {
  const name = document.getElementById('name');
  // All letters and between 2 and 10 characters
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

// Validate Zipcode
function validateZip() {
  const zip = document.getElementById('zip');
  // 5 numbers and grouped with another optional (?) 4 numbers spreated by dash (-)
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

// Validate email
function validateEmail() {
  const email = document.getElementById('email');
  // 
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

// Validate phone number
function validatePhone() {
  const phone = document.getElementById('phone');
  // 
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}