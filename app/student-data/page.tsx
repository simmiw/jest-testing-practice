import getStudentsDetails from "../utils/getStudentDetails/fetch";

export default async function StudentDetails() {
  const usersData = await getStudentsDetails();
  return (
    <>
      <table className=" ml-auto mr-auto my-10">
        <thead className="bg-gray-300">
          <tr>
            <th className=" border px-4 py-2">First Name</th>
            <th className=" border px-4 py-2">Last Name</th>
            <th className=" border px-4 py-2">Email</th>
            <th className=" border px-4 py-2">Physics</th>
            <th className=" border px-4 py-2">Chemistry</th>
            <th className=" border px-4 py-2">Mathematics</th>
          </tr>
        </thead>
        {usersData.map(
          (user: {
            id: number;
            firstName: string;
            lastName: string;
            email: string | number;
            physics: number;
            chemistry: number;
            mathematics: number;
          }) => {
            return (
              <tbody key={user.id}>
                <tr className="font-mono">
                  <th className="border px-4 py-2">{user.firstName}</th>
                  <th className="border px-4 py-2">{user.lastName}</th>
                  <th className="border px-4 py-2">{user.email}</th>
                  <th className="border px-4 py-2">{user.physics}</th>
                  <th className="border px-4 py-2">{user.chemistry}</th>
                  <th className="border px-4 py-2">{user.mathematics}</th>
                </tr>
              </tbody>
            );
          }
        )}
      </table>
    </>
  );
}
