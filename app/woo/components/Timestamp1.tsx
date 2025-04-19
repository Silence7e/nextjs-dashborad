import { getSymbolDate } from "@/app/actions/symbolInfos";

const Timestamp1 = async () => {
  const timestamp = await getSymbolDate();
  return <div>time1:{new Date(timestamp).toLocaleString()}</div>;
};

export default Timestamp1;
