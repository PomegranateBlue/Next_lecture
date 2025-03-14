import { fetchSSG } from "../api/fetchRender";

export default async function SSGPage() {
  const data = await fetchSSG();
  return (
    <div>
      <div>SSG 렌더링 페이지</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
