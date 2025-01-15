import Skeleton from "./skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex w-full h-64 items-center border flex-col border-gray-200 shadow-sm overflow-hidden rounded-lg bg-zinc-100"
          >
            <Skeleton className="w-full relative h-52 p-10" />
            <Skeleton className="w-full relative h-52  p-5" />
            <Skeleton className="w-full relative h-52 p-10" />
          </div>
        ))}
    </div>
  );
}
