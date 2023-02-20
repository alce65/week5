import { Route, Routes } from "react-router-dom";
import { Countries } from "../countries/countries";
import { Details } from "../details/details";

export function App() {
  return (
    <div>
      <h1>Countries</h1>
      <Routes>
        <Route path="/" element={<Countries></Countries>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}
