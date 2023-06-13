import Info from "./Info.js";

interface Statistics {
  title: string;
  punc: string | null;
  value: number;
  rate: number;
  increased: boolean;
  img: string;
}

interface INFO {
  statistics: Statistics[];
}

export const useInfo = (): INFO => {
  const statistics: Statistics[] = Info.statistics.map((item: Statistics) => ({
    ...item,
  }));
  return { statistics };
};
