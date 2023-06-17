import { salesData } from "./SalesInfo";


export const useSalesInfo = () => {
  return {
    ...salesData,
  };
};
