function bookCourse(courseId) {
  console.log('Attempting to book course:', courseId);

  const courseElement = document.getElementById(courseId);
  const courseTitle = courseElement.querySelector('h3').innerText;

  fetch('/api/bookCourse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ courseTitle }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(`Congratulations! You have successfully booked ${courseTitle}.`);
    } else {
      alert('Booking failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
