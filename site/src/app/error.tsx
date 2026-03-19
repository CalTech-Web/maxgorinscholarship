"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">
          <svg
            className="w-20 h-20 mx-auto text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Something Went Wrong
        </h1>
        <p className="text-foreground/60 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
