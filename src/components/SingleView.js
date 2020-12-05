import React, { useState } from "react"; // import React

export default function SingleView({ showBeer, info, order, setOrder }) {
	const [orderAmount, setAmount] = useState(1);

	// add beer to cart
	function addToCart() {
		if (orderAmount > 0) {
			// prevent adding "0" amount of beers to cart
			const addBeers = {
				name: info.name,
				amount: orderAmount,
			};
			order.totalPrice += orderAmount * info.price;

			// check if beer is already in cart and adjust order
			if (order.beers.find((beer) => beer.name === info.name)) {
				const beerExist = order.beers.find((beer) => beer.name === info.name);
				console.log(beerExist);
				beerExist.amount += orderAmount;
			} else {
				order.beers.push(addBeers);
			}

			setOrder(order); // call setOrder function in App-component
			setAmount(1);
			showBeer();
		}
	}

	// +1 to order amount
	function plusAmount() {
		setAmount(orderAmount + 1);
	}

	// -1 to order amount
	function minusAmount() {
		if (orderAmount > 0) {
			setAmount(orderAmount - 1);
		}
	}

	// set order amount to number typed
	function inputAmount(event) {
		console.log(event.target.value);
		setAmount(event.target.value);
	}

	return (
		<section className="singleview-bg show-singleview">
			<article className="singleview-container">
				<div className="singleview-image"></div>

				<h2>{info.name}</h2>
				<div className="generic-info">
					<h2>30 DKK</h2>
					<p>
						{info.alc}%, {info.category}
					</p>
				</div>

				<div className="beer-desc">
					<h3>Overall impression</h3>
					<p>{info.description.overallImpression}</p>

					<h3 className="mouthfeel">Mouthfeel</h3>
					<p>{info.description.mouthfeel}</p>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" min="0" value={orderAmount} onInput={inputAmount} />
						<button className="minus" onClick={minusAmount}></button>
						<button className="plus" onClick={plusAmount}></button>
					</div>

					<button className="add" onClick={addToCart}></button>
				</div>

				<button onClick={showBeer} className="close-singleview"></button>
			</article>
		</section>
	);
}
