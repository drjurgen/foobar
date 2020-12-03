import React, { useState } from "react"; // import React
import Preload from "./Preload"; // import Preload component
import BeerList from "./BeerList"; // import Preload component
import Cart from "./Cart"; // import Preload component
import SingleView from "./SingleView"; // import Preload component

export default function Main({ facts, beerTypes }) {
	const [showSingleBeer, setShowBeer] = useState(false);
	const [singleBeerInfo, setBeerInfo] = useState();

	function showBeer(beerInfo) {
		setShowBeer(!showSingleBeer);

		if (beerInfo !== undefined) {
			setBeerInfo(beerInfo);
			console.log(singleBeerInfo);
		}
	}

	return (
		<main style={{ marginBottom: "65px" }}>
			{facts.bar !== undefined && beerTypes !== [] ? (
				<>
					<BeerList facts={facts} beerTypes={beerTypes} showBeer={showBeer} />
					<Cart />
					{showSingleBeer ? <SingleView showBeer={showBeer} info={singleBeerInfo} /> : null}
				</>
			) : (
				<Preload />
			)}
		</main>
	);
}
