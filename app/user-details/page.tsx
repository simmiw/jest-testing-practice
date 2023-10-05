import getUserDetails from "../getUserData/fetch";

export default async function AddUsers() {
  const data = await  getUserDetails();


  return (
    <>
      <table className=" ml-auto mr-auto my-10">
        <thead className="bg-gray-300">
          <tr>
            <th className=" border px-4 py-2">Name</th>
            <th className=" border px-4 py-2">Age</th>
            <th className=" border px-4 py-2">Country</th>
            
          </tr>
        </thead>

        {data.map((item: { name: string; age: number; country: string }) => {
          return (
            <tbody key ={item.name}>
              <tr className="font-mono">
                <th className="border px-4 py-2">{item.name}</th>
                <th className="border px-4 py-2">{item.age}</th>
                <th className="border px-4 py-2">{item.country}</th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
