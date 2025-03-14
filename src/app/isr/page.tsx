import { fetchISR } from "../api/fetchRender";
export default async function ISRPapge() {
  const data = await fetchISR();
  return (
    <div>
      <div>ISR 렌더링</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
