import getEmailUserDetails from "../form/email-form/getEmailUsers/fetch";

export default async function EmailUsers() {
  const usersData = await getEmailUserDetails();
  return (
    <>
      <table className=" ml-auto mr-auto my-10">
        <thead className="bg-gray-300">
          <tr>
            <th className=" border px-4 py-2">First Name</th>
            <th className=" border px-4 py-2">Last Name</th>
            <th className=" border px-4 py-2">Email</th>
          </tr>
        </thead>
        {usersData.map(
          (user: {
            id: number;
            firstName: string;
            lastName: string;
            email: string | number;
          }) => {
            return (
              <tbody key={user.id}>
                <tr className="font-mono">
                  <th className="border px-4 py-2">{user.firstName}</th>
                  <th className="border px-4 py-2">{user.lastName}</th>
                  <th className="border px-4 py-2">{user.email}</th>
                </tr>
              </tbody>
            );
          }
        )}
      </table>
    </>
  );
}
