import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";

import Main from "./components/Main";
import "./App.scss";

function App() {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    get(setFacts);
  }, []);

  return (
    <div className="App">
      <Main facts={facts}></Main>
    </div>
  );
}

export default App;
