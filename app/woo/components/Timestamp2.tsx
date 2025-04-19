import { getSymbolDate2 } from "@/app/actions/symbolInfos";

const Timestamp2 = async () => {
  const timestamp2 = await getSymbolDate2();
  return <div>time2:{new Date(timestamp2).toLocaleString()}</div>;
};

export default Timestamp2;
