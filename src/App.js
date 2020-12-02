import React, { useState, useEffect } from "react"; // import React
import Header from "./components/Header"; // import Header component
import Main from "./components/Main"; // import Main component
import { get } from "./modules/rest"; // import REST operations
import "./App.scss"; // import SASS

function App() {
	const [facts, setFacts] = useState([]);
	const [beerTypes, setBeerTypes] = useState([]);
	useEffect(() => {
		// get("https://foobar-data.herokuapp.com/", setFacts);
		get("https://foobar-data.herokuapp.com/beertypes", setBeerTypes);
		const interval = setInterval(() => {
			get("https://foobar-data.herokuapp.com/", setFacts);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	// console.log(facts);
	// console.log(beerTypes);
	return (
		<div className="App">
			<Header />
			<Main facts={facts} beerTypes={beerTypes} />
		</div>
	);
}

export default App;
