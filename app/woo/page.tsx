import Timestamp1 from "./components/Timestamp1";
import Timestamp2 from "./components/Timestamp2";

// 设置静态生成选项
export const revalidate = 3600; // 每小时重新生成一次

export default async function Page() {
  return (
    <div>
      woo
      <Timestamp1 />
      <Timestamp2 />
    </div>
  );
}
