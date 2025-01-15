import Skeleton from "./skeleton";


export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-4">
            <Skeleton className="h-40 mb-2 p-10" />
            <Skeleton className="h-6 w-3/4 mb-2 p-5" /> 
            <Skeleton className="h-4 w-1/2 p-10" /> 
          </div>
        ))}
    </div>
  );
}
