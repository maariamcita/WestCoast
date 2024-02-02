
const userScript = document.createElement('script');
userScript.src = 'JS/user.js';
userScript.defer = true;
document.head.appendChild(userScript);

const courseScript = document.createElement('script');
courseScript.src = 'JS/course.js';
courseScript.defer = true;
document.head.appendChild(courseScript);

const ondemandScript = document.createElement('script');
ondemandScript.src = 'JS/ondemand.js';
ondemandScript.defer = true;
document.head.appendChild(ondemandScript);

const bookingScript = document.createElement('script');
bookingScript.src = 'JS/booking.js';
bookingScript.defer = true;
document.head.appendChild(bookingScript);

const communicationScript = document.createElement('script');
communicationScript.src = 'JS/communication.js';
communicationScript.defer = true;
document.head.appendChild(communicationScript);