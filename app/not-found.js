import Link from "next/link";
export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-black text-black">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition-colors"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
