import { API_URL_ALL, API_URL_COUNTRY } from "../config";
import { CountryResponse, CountryStructure } from "../models/country";

export const getAll = async (): Promise<CountryStructure[]> => {
  const url = API_URL_ALL + "?fields=name,capital,flags,population,area";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CountryResponse[] = await response.json();
  return data.map((item) => {
    return {
      name: item.name.common,
      flag: item.flags.svg,
      capital: item.capital[0],
      population: item.population,
      area: item.area,
      isFavorite: false,
    };
  });
};

export const getCountry = async (id: string): Promise<any> => {
  const url = API_URL_COUNTRY + id;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CountryResponse = await response.json();
  return data;
};
