export default async function getUserDetails() {
  const response = await fetch("http://localhost:3004/users", {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}
