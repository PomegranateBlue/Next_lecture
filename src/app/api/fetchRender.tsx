export async function fetchSSG() {
  const response = await fetch("http://localhost:4000/posts", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("SSG 렌더링 실패");
  }

  const data = await response.json();
  return data;
}

export async function fetchISR() {
  const response = await fetch("http://localhost:4000/posts", {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error("ISR 렌더링 실패");
  }

  const data = await response.json();
  return data;
}

export async function fetchSSR() {
  const response = await fetch("http://localhost:4000/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("SSR 렌더링 실패");
  }

  const data = await response.json();
  return data;
}
