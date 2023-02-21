import { useEffect, useState } from "react";
import { CountryStructure } from "../models/country";
import { getAll } from "../services/api.repo";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountryStructure[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await getAll();
      console.log(countries);
      setCountries(countries);
    };

    loadCountries();
  }, []);

  return { countries };
};
