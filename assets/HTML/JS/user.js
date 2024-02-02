async function registerUser() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthdate = document.getElementById('birthdate').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const termsAndConditions = document.getElementById('termsAndConditions').checked;

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  if (!termsAndConditions) {
    alert('Please accept the Terms and Conditions.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        birthdate,
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      alert('Registration successful. You can now log in.');
      clearRegistrationForm();
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred. Please try again later.');
  }
}

function clearRegistrationForm() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('birthdate').value = '';
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('confirmPassword').value = '';
  document.getElementById('termsAndConditions').checked = false;
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/users?username=' + username + '&password=' + password);

    if (response.ok) {
      const userData = await response.json();
      if (userData.length > 0) {
        alert('Login successful. Welcome, ' + userData[0].firstName + '!');
        clearLoginForm();
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } else {
      alert('Login failed. Please try again.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again later.');
  }
}

function clearLoginForm() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}