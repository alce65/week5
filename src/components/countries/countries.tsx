import { useContext } from "react";
import "./countries.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/app.context";

export function Countries() {
  const { countries } = useContext(AppContext);

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
