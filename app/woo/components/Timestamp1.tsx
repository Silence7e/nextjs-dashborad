import { getSymbolDate } from "@/app/actions/symbolInfos";

// 通过在顶层使用 "use static" 指令来启用静态渲染
// 或者通过在 fetch 中使用 { cache: 'force-cache' }
const Timestamp1 = async () => {
  const timestamp = await getSymbolDate();
  return <div>time1:{new Date(timestamp).toLocaleString()}</div>;
};

export default Timestamp1;
