import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="text-center my-10 font-bold text-dimegray-500">
        <div className="no-underline">
          <Link href="/increment-and-decrement">Increment and Decrement</Link>
        </div>
        <div className="no-underline my-3">
          <Link href="/input-with-button">Input with button</Link>
        </div>
        <div className="no-underline">
          <Link href="/form">Add user details</Link>
        </div>
        <div className="no-underline">
          <Link href="/form/email-form">Form Creation Using Formik</Link>
        </div>
      </div>
    </>
  );
}
