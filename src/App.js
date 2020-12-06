import React, { useState, useEffect } from "react"; // import React
import Header from "./components/Header"; // import Header component
import Main from "./components/Main"; // import Main component
import { get } from "./modules/rest"; // import REST operations
import "./App.scss"; // import SASS

function App() {
	const [facts, setFacts] = useState([]);
	const [beerTypes, setBeerTypes] = useState([]);
	const [order, setOrder] = useState({
		totalPrice: 0,
		beers: [],
	});

	function setOrderState(order) {
		setOrder(order);
		console.log(order);
	}

	useEffect(() => {
		// get("https://foobar-data.herokuapp.com/", setFacts);
		get("https://foobar-data.herokuapp.com/beertypes", setBeerPrice);
		function setBeerPrice(data) {
			data.forEach((beer) => {
				Object.defineProperty(beer, "price", {
					value: 30,
					writable: true,
				});
			});
			setBeerTypes(data);
		}

		const fetchInterval = setInterval(() => {
			get("https://foobar-data.herokuapp.com/", setFacts);
		}, 2000);
		return () => clearInterval(fetchInterval);
	}, []);

	return (
		<div className="App">
			<Header />
			<Main facts={facts} beerTypes={beerTypes} order={order} setOrder={setOrderState} />
		</div>
	);
}

export default App;
