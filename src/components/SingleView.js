import React, { useState } from "react"; // import React

export default function SingleView({ showBeer, info, order, setOrder }) {
	const [orderAmount, setAmount] = useState(1);
	const orderState = { ...order };

	// add beer to cart
	function addToCart(event) {
		if (orderAmount > 0) {
			// prevent adding "0" amount of beers to cart
			const addBeers = {
				name: info.name,
				amount: orderAmount,
			};
			orderState.totalPrice += orderAmount * info.price;

			// check if beer is already in cart and adjust order
			if (orderState.beers.find((beer) => beer.name === info.name)) {
				const beerExist = orderState.beers.find((beer) => beer.name === info.name);
				console.log(beerExist);
				beerExist.amount += orderAmount;
			} else {
				orderState.beers.push(addBeers);
			}

			event.target.className = "add add-animation";
			event.target.disabled = true;

			setTimeout(() => {
				event.target.className = "add";
				event.target.disabled = false;
			}, 750);

			setTimeout(() => {
				setOrder(orderState); // call setOrder function in App-component
				setAmount(1);
				showBeer();
			}, 600);
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

	const imgSource = require("../beer_imgs/" + info.label);
	const beerImg = {
		backgroundImage: `linear-gradient(180deg, rgba(250, 250, 250, 0) 0.1%, #fff 95.4%), url(${imgSource.default})`,
	};

	return (
		<section className="singleview-bg show-singleview">
			<article className="singleview-container">
				<div className="singleview-image" style={beerImg}></div>

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
