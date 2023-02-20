import { API_URL } from "../config";
import { CountryResponse, CountryStructure } from "../models/country";

export const getAll = async (): Promise<CountryStructure[]> => {
  const url = API_URL + "?fields=name,capital,flags,population,area";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CountryResponse[] = await response.json();
  return data.map((item) => {
    delete item.independent;
    return { ...item, flag: item.flag.svg };
  });
};
