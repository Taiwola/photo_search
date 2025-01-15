import { Suspense } from "react";
import Home from "./component/Home";

export default function Page() {
  return (
    <>
      <Suspense>
        <Home />
      </Suspense>
    </>
  );
}
