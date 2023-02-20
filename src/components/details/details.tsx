import { useParams } from "react-router-dom";
import { getCountry } from "../../services/api.repo";
import { useEffect, useState } from "react";

export function Details() {
  const { id } = useParams();

  const [country, setCountry] = useState<{ [key: string]: any }>();

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
      <img src={country[0].coatOfArms?.svg} alt="Coat Of Arms" />
    </>
  );
}
