//import { useEffect } from "react";
export default async function Home() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Start of Next.js </h1>
    </div>
  );
}
