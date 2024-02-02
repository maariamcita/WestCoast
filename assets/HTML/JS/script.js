function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Login successful!');
      } else {
          alert('Invalid username or password.');
      }
  })
  .catch(error => console.error('Error:', error));
}

function register() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword === confirmPassword) {
      fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: newUsername, password: newPassword }),
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Registration successful!');
          } else {
              alert('Registration failed.');
          }
      })
      .catch(error => console.error('Error:', error));
  } else {
      alert('Passwords do not match.');
  }
}

