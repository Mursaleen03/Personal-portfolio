'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Oops!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Something went wrong. We&apos;ve been notified and are working on it.
            </p>
            <button
              onClick={() => reset()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
