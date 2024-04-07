import * as React from "react";

import Countries from "./Countries";
import Alerts from "./Alerts";

import "../styles/Main.css";

function Main() {
  let alertText = <b>Текст для алерта, переданный контентом компонента</b>;
  return (
    <main>
      <Alerts>{alertText}</Alerts>
      <Countries />
    </main>
  );
}

export default Main;
