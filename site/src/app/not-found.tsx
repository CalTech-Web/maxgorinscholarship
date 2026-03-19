import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-foreground/60 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
