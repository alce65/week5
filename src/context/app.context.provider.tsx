import { AppContext, AppContextStructure } from "./app.context";
import { useCountries } from "../hooks/use.countries";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const { countries } = useCountries();

  const context: AppContextStructure = {
    countries,
    selectedCountry: {},
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
