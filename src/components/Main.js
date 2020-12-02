import React from "react"; // import React
import Preload from "./Preload"; // import Preload component
import BeerList from "./BeerList"; // import Preload component
import Cart from "./Cart"; // import Preload component

export default function Main({ facts, beerTypes }) {
	return (
		<main>
			{facts.bar !== undefined && beerTypes !== [] ? (
				<>
					<BeerList facts={facts} beerTypes={beerTypes} />
					<Cart />
				</>
			) : (
				<Preload />
			)}
		</main>
	);
}
