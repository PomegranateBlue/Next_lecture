"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [test, setTest] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        setTest(JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <div>CSR 렌더링</div>
      <div>{test}</div>
    </div>
  );
}
