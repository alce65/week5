import { useParams } from "react-router-dom";
import { getCountry } from "../../services/api.repo";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app.context";

export function Details() {
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

  if (country === undefined) {
    return <>🌀 Loading</>;
  }

  return (
    <>
      <h2>Details from {id}</h2>
      <p>Capital: {contextCountry?.capital}</p>
      <p>Población: {contextCountry?.population}</p>
      <p>Area: {contextCountry?.area}</p>
      <img src={country[0].coatOfArms?.svg} alt="Coat Of Arms" />
    </>
  );
}
