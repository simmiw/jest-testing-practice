"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });

    setIsLoading(false);

    if (response.status === 201) {
      router.push("/user-details");
      router.refresh();
    }
  };

  return (
    <>
    <div className="flex flex-wrap justify-center my-10">
        <form
          onSubmit={handleSubmit}
          className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <label className="text-gray-700 text-sm font-bold mb-2">
            <span>Name:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleOnChange}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span>Age:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              type="number"
              name="age"
              placeholder="Enter Age"
              onChange={handleOnChange}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span>Country:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              type="text"
              name="country"
              placeholder="Enter Country"
              onChange={handleOnChange}
            />
          </label>
          <button
            name="isLoading"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isLoading}>
            Submit
          </button>
        </form>
        </div>
    </>
  );
}
