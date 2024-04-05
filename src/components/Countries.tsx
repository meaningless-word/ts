import * as React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Country from "./Country";

import "../styles/Countries.css";

function Countries() {
  const [countries, setCountries] = React.useState([]);
  if (!countries.length) {
    axios.get("http://localhost:3000/countries").then((res) => {
      console.log(res);
      setCountries(res.data);
    });
  }
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
              key={country.code}
              name={country.name}
              capital={country.capital}
            />
          ) : (
            <Country key={country.code} name={country.name} />
          )
        )}
      </tbody>
    </Table>
  );
}

export default Countries;
