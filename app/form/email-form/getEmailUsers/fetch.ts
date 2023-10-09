export default async function getEmailUserDetails() {
    const response = await fetch("http://localhost:3005/emailusers", {
      next: {
        revalidate: 0,
      },
    });
    return response.json();
  }
  