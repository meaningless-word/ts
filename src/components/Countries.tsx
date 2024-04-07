import * as React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Country from "./Country";

import "../styles/Countries.css";

function Countries() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res);
      setCountries(res.data);
    });
  }, []); // Добавлен пустой массив зависимостей для выполнения запроса только один раз при монтировании компонента

  return (
    <Table striped bordered hover className={"countries"}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) =>
          country.capital ? (
            <Country
              key={country.cca3}
              name={country.name.common}
              capital={country.capital}
            />
          ) : (
            <Country key={country.cca3} name={country.name.common} />
          )
        )}
      </tbody>
    </Table>
  );
}

export default Countries;
