import React from "react";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}
