import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app.context";
import { getCountry } from "../services/api.repo";
import { useParams } from "react-router-dom";

export const useDetails = () => {
  const { id } = useParams();

  const { countries } = useContext(AppContext);
  const [country, setCountry] = useState<{ [key: string]: any }>();

  const contextCountry = countries.find((item) => item.name === id);

  useEffect(() => {
    const loadCountry = async () => {
      const country = await getCountry(id as string);
      console.log(country);
      setCountry(country);
    };
    loadCountry();
  }, [id]);

  return { country, contextCountry };
};
