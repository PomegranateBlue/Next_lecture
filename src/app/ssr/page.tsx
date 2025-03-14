import { fetchSSR } from "../api/fetchRender";

export default async function SSRPage() {
  const data = await fetchSSR();
  return (
    <div>
      <div>SSR 렌더링</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
