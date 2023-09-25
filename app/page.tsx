import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="no-underline" >
        <Link  href="/increment-and-decrement">
          Increment and Decrement
        </Link>
      </div>
      <div className="no-underline">
        <Link  href="/input-with-button">
          Input with button
        </Link>
      </div>
    </>
  );
}
