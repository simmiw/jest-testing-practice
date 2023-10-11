export default async function getStudentsDetails() {
    const response = await fetch("http://localhost:3005/classStudents", {
      next: {
        revalidate: 0,
      },
    });
    return response.json();
  }
  