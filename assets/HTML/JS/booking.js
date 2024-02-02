
import { endpoints } from './config';

async function addNewBooking() {
  const courseTitle = document.getElementById('courseTitle').value;
  const userName = document.getElementById('userName').value;

  const newBooking = {
    courseTitle,
    userName,
  };

  try {
    const response = await fetch(endpoints.bookings, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    });

    if (response.ok) {
      console.log('Booking added successfully!');
      document.getElementById('courseTitle').value = '';
      document.getElementById('userName').value = '';
    } else {
      console.error('Failed to add new booking:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};