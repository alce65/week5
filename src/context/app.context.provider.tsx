import { useEffect, useState } from "react";
import { AppContext, AppContextStructure } from "./app.context";
import { getAll } from "../services/api.repo";
import { CountryStructure } from "../models/country";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [countries, setCountries] = useState<CountryStructure[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await getAll();
      console.log(countries);
      setCountries(countries);
    };

    loadCountries();
  }, []);

  const context: AppContextStructure = {
    countries,
    patata: {},
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
