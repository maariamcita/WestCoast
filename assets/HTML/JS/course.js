// Hämta alla kurser från API:et
async function getAllCourses() {
  const response = await fetch('http://localhost:3000/courses');
  const data = await response.json();
  return data;
}

// Hämta detaljer om en specifik kurs från API:et
async function getCourseDetails(courseId) {
  const response = await fetch(`http://localhost:3000/courses/${courseId}`);
  const data = await response.json();
  return data;
}
