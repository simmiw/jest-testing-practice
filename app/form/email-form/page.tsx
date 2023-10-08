"use client";
import { useFormik } from "formik";
import { isValidString } from "@/app/utils/validators";
import { isFieldNonEmpty } from "@/app/utils/validators";
import { isValidEmail } from "@/app/utils/validators";

type ErrorState = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export default function EmailForm() {
  //input states//
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    //handling form submission
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (values) => {
      let errors: ErrorState = {};
      if (!isFieldNonEmpty(values.firstName)) {
        errors.firstName = "First name is required";
      } else if (!isValidString(values.firstName)) {
        errors.firstName = "First name should only contain letters";
      }

      if (!isFieldNonEmpty(values.lastName)) {
        errors.lastName = "Last name is required";
      } else if (!isValidString(values.lastName)) {
        errors.lastName = "Last name should only contain letters";
      }

      if (!isFieldNonEmpty(values.email)) {
        errors.email = "Email is required";
      } else if (!isValidEmail(values.email)) {
        errors.email = "Plese enter valid email";
      }
      return errors;
    },
  });

  return (
    <>
      <div className="flex flex-wrap justify-center my-10">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <label className="text-gray-700 text-sm font-bold m-2">
            First Name
            <input
              required
              value={formik.values.firstName}
              name="firstName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.errors.firstName ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter Your First Name"
              onChange={formik.handleChange}
              formNoValidate
            />
            {formik.errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.firstName}
              </p>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold m-2">
            Last Name
            <input
              required
              value={formik.values.lastName}
              name="lastName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.errors.lastName ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter Your Last Name"
              onChange={formik.handleChange}
              formNoValidate
            />
            {formik.errors.lastName && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.lastName}
              </p>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold m-2">
            Email
            <input
              required
              value={formik.values.email}
              name="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              formNoValidate
            />
            {formik.errors.email && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.email}
              </p>
            )}
          </label>
          <button
            type="submit"
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
