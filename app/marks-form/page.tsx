"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { isValidString } from "@/app/utils/validators/validators";
import { isFieldNonEmpty } from "@/app/utils/validators/validators";
import { isValidEmail } from "@/app/utils/validators/validators";

type ErrorState = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export default function StudentsForm() {
  const router = useRouter();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[A-Za-z ]+$/, "First name should only contain letters"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z ]+$/, "Last name should only contain letters"),
    email: Yup.string()
      .email("Plese enter valid email")
      .required("Email is required"),
    physics: Yup.number()
      .required("Required")
      .min(0, "Should be at least 0")
      .max(100, "Should be at most 100"),
    chemistry: Yup.number()
      .required("Required")
      .min(0, "Should be at least 0")
      .max(100, "Should be at most 100"),
    mathematics: Yup.number()
      .required("Required")
      .min(0, "Should be at least 0")
      .max(100, "Should be at most 100"),
  });
  //input states//
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      physics: "",
      chemistry: "",
      mathematics: "",
    },
    //handling form submission
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:3005/classStudents", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 201) {
        router.push("/student-data");
        router.refresh();
      }
    },
    validationSchema,

    //Form Validation: it takes values as parameter and return an object of errors
    // validate: (values) => {
    //   let errors: ErrorState = {};

    //   if (!isFieldNonEmpty(values.firstName)) {
    //     errors.firstName = "First name is required";
    //   } else if (!isValidString(values.firstName)) {
    //     errors.firstName = "First name should only contain letters";
    //   }

    //   if (!isFieldNonEmpty(values.lastName)) {
    //     errors.lastName = "Last name is required";
    //   } else if (!isValidString(values.lastName)) {
    //     errors.lastName = "Last name should only contain letters";
    //   }

    //   if (!isFieldNonEmpty(values.email)) {
    //     errors.email = "Email is required";
    //   } else if (!isValidEmail(values.email)) {
    //     errors.email = "Plese enter valid email";
    //   }
    //   return errors;
    // }
  });

  return (
    <>
      <div className="flex flex-wrap justify-center my-10">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
          noValidate>
          <label className="text-gray-700 text-sm font-bold m-2">
            First Name
            <input
              required
              value={formik.values.firstName}
              name="firstName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              onBlur={formik.handleBlur}
              placeholder="Enter Your First Name"
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
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
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              placeholder="Enter Your Last Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
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
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              type="email"
              onBlur={formik.handleBlur}
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.email}
              </p>
            )}
          </label>

          <label className="text-gray-700 text-sm font-bold m-2">
            Physics
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.physics && formik.errors.physics
                  ? "border-red-500"
                  : ""
              }`}
              required
              type="number"
              name="physics"
              placeholder="Enter Physics Marks"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {formik.touched.physics && formik.errors.physics && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.physics}
              </p>
             )}
          </label>

          <label className="text-gray-700 text-sm font-bold m-2">
           Chemistry
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.chemistry && formik.errors.chemistry
                  ? "border-red-500"
                  : ""
              }`}
              required
              type="number"
              name="chemistry"
              placeholder="Enter Chemistry Marks"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {formik.touched.chemistry && formik.errors.chemistry && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.chemistry}
              </p>
             )}
          </label>

          <label className="text-gray-700 text-sm font-bold m-2">
            Mathematics
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.mathematics && formik.errors.mathematics
                  ? "border-red-500"
                  : ""
              }`}
              required
              type="number"
              name="mathematics"
              placeholder="Enter Mathematics Marks"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
             {formik.touched.mathematics && formik.errors.mathematics && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.mathematics}
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
