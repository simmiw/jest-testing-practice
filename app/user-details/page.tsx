import getUserDetails from "../getUserData/fetch";

export default async function AddUsers() {
  const data = await getUserDetails();

  return (
    <>
      <div>
        {data.map((item: { name: string; age: number; country: string }) => {
          return (
            <div>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <div>{item.country}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
