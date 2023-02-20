export type CountryStructure = {
  name: string;
  flag: string;
  capital: string;
  population: number;
  area: number;
  isFavorite: boolean;
};

export type CountryResponse = {
  name: CountryName;
  flags: {
    svg: string;
  };
  capital: string[];
  population: number;
  area: number;
  independent?: boolean;
};

type CountryName = {
  [key: string]: any;
};
