"use client";
import React from "react";

function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };

  reset: () => void;
}) {
  const reTry = () => {
    reset();
  };
  return (
    <section className="error-display center h-[80vh]">
      <div className="error-continer space-y-6">
        <span>{error.message}</span>
        <div className="btns flex space-x-4">
          <div
            className="try-again p-2 rounded-md cursor-pointer text-center bg-red-400"
            onClick={reTry}
          >
            TryAgain
          </div>
          <div
            className="BackToMain p-2 rounded-md cursor-pointer text-center bg-green-400"
            onClick={reset}
          >
            Back To Main
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorBoundary;
