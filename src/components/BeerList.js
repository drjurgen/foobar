import React from "react"; // import React
import { Beer, NotAvailable } from "./Beer"; // import Beer and NotAvailable components

export default function BeerList({ facts, beerTypes }) {
	const available = [];
	const notAvailable = [];

	getAvailable(); // call function to get available beer as well as removing duplicates
	function getAvailable() {
		const availableBeer = Array.from(new Set(facts.taps.map((tap) => tap.beer))).map((beer) => {
			return facts.taps.find((tap) => tap.beer === beer);
		});

		availableBeer.forEach((tap) => {
			beerTypes.forEach((beer) => {
				if (beer.name === tap.beer) {
					available.push(beer);
				}
			});
		});
	}

	getNotAvailable(); // call function to get objects NOT included in the available-array
	function getNotAvailable() {
		beerTypes.forEach((beer) => {
			if (!available.includes(beer)) {
				notAvailable.push(beer);
			}
		});
	}

	return (
		<section>
			{available.map((beer) => {
				return <Beer key={beer.label} beerInfo={beer} facts={facts} />; // available beer should use this component
			})}

			{notAvailable.map((beer) => {
				return <NotAvailable key={beer.label} beerInfo={beer} facts={facts} />; // beer not on taps should use this component
			})}
		</section>
	);
}
