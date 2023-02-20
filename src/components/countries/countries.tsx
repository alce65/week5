import { useEffect, useState } from "react";
import { getAll } from "../../services/api.repo";
import { CountryStructure } from "../../models/country";

import "./countries.css";
import { Link } from "react-router-dom";

export function Countries() {
  const [countries, setCountries] = useState<CountryStructure[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await getAll();
      console.log(countries);
      setCountries(countries);
    };

    loadCountries();
  }, []);

  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries.map((item) => (
          <li key={item.name} title={item.name}>
            <Link to={`/details/${item.name}`}>
              <img src={item.flag} alt={"Flag from " + item.name} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
