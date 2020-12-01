import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";

import "./App.scss";

function App() {
	const [facts, setFacts] = useState([]);
	useEffect(() => {
		get(setFacts);
		const interval = setInterval(() => {
			get(setFacts);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	console.log(facts);
	return (
		<div className="App">
			{facts.bar !== undefined ? (
				<div>
					<h1>{facts.bar.name}</h1>
					<p>{facts.bartenders[0].name}</p>
					<p>{facts.bartenders[0].statusDetail}</p>
				</div>
			) : null}
		</div>
	);
}

export default App;
