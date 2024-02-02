document.addEventListener('DOMContentLoaded', () => {
  displayBookingInformation();

  // Add an event listener for the form submission
  const courseForm = document.getElementById('courseForm');
  courseForm.addEventListener('submit', submitForm);
});

async function submitForm(event) {
  console.log('Submit button clicked!'); 
  event.preventDefault();

  const courseTitle = document.getElementById('courseTitle').value;
  const courseNumber = document.getElementById('courseNumber').value;
  const courseDuration = document.getElementById('courseDuration').value;
  const courseCost = document.getElementById('courseCost').value;


  const newBooking = {
    courseTitle,
    userName: 'User',  
  };

  try {
    const response = await fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    });

    if (response.ok) {
      displayBookingInformation();
    } else {
      console.error('Failed to add new course:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayBookingInformation() {
  const bookingList = document.getElementById('bookingList');
  bookingList.innerHTML = '';

  const bookings = [
    { id: 1, courseTitle: 'Programming', userName: 'John Smith' },
    { id: 2, courseTitle: 'Data Science', userName: 'Jane Doe' },
    { id: 3, courseTitle: 'Introduction to Programming', userName: 'Jessica Peters' },
    { id: 4, courseTitle: 'Data Science and Analytics', userName: 'Monica Meyer' },
  ];

  fetch('http://localhost:3000/bookings')
    .then(response => response.json())
    .then(newBookings => {
      bookings.push(...newBookings);
      bookings.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `${booking.userName} booked ${booking.courseTitle}`;
        bookingList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching bookings:', error));
}
