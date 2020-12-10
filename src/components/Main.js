import React, { useEffect, useState } from "react"; // import React
import Preload from "./Preload"; // import Preload component
import BeerList from "./BeerList"; // import Preload component
import CartContainer from "./CartContainer"; // import Preload component
import SingleView from "./SingleView"; // import Preload component

export default function Main({ facts, beerTypes, order, setOrder, postOrder }) {
	const [showSingleBeer, setShowBeer] = useState(false);
	const [singleBeerInfo, setBeerInfo] = useState();

	useEffect(() => {
		if (showSingleBeer === true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [showSingleBeer]);

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
					<BeerList facts={facts} beerTypes={beerTypes} showBeer={showBeer} order={order} setOrder={setOrder} />
					<CartContainer order={order} setOrder={setOrder} postOrder={postOrder} />
					{showSingleBeer ? (
						<SingleView showBeer={showBeer} info={singleBeerInfo} order={order} setOrder={setOrder} />
					) : null}
				</>
			) : (
				<Preload />
			)}
		</main>
	);
}
