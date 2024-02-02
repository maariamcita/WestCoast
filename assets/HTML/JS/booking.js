function bookCourse(userId, courseId) {
  return fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, courseId }),
  })
  .then(response => response.json());
}

function sendConfirmationEmail(userEmail) {
}

function sendStartEmail(userEmail) {
}

function cancelBooking(userId, courseId) {
  return fetch(`${API_BASE_URL}/bookings?userId=${userId}&courseId=${courseId}`, {
      method: 'DELETE',
  })
  .then(response => response.json());
}

function refundPayment(userId, courseId) {
}
