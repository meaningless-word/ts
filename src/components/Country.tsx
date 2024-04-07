import * as React from "react";
import Button from "react-bootstrap/Button";

import "../styles/Country.css";

function Country(props) {
  const [selected, changeSelected] = React.useState(false);

  return (
    <tr className={selected ? "selected-country" : ""} key={props.key}>
      <td>{props.name}</td>
      <td>{props.capital}</td>
      <td>
        {selected ? (
          <Button variant="danger" onClick={() => changeSelected(false)}>
            Remove
          </Button>
        ) : (
          <Button variant="success" onClick={() => changeSelected(true)}>
            Add
          </Button>
        )}
      </td>
    </tr>
  );
}

Country.defaultProps = {
  capital: "Not Available",
};

export default Country;
