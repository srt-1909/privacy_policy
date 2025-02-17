import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <h1 className="text-4xl font-semibold text-blue-600 mb-4">Hello</h1> */}
      <p className="text-lg text-gray-700">
        To learn more about our privacy policy, click{" "}
        <Link
          href="/privacy-policy"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          here
        </Link>
        .
      </p>
    </div>
  );
}
