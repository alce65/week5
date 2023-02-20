export type CountryStructure = {
  name: string;
  flag: string;
  capital: string;
  population: number;
  area: number;
};

export type CountryResponse = {
  name: string;
  flag: {
    svg: string;
  };
  capital: string;
  population: number;
  area: number;
  independent?: boolean;
};
