import React, { useState } from "react"; // import React

export function Beer({ beerInfo, showBeer, order, setOrder }) {
	const orderState = { ...order };

	const imgSource = require("../beer_imgs/" + beerInfo.label);
	const beerImg = {
		backgroundImage: `url(${imgSource.default})`,
	};

	const [orderAmount, setAmount] = useState(1);

	function passToMain() {
		showBeer(beerInfo);
	}

	// add beer to cart
	function addToCart(event) {
		if (orderAmount > 0) {
			// prevent adding "0" amount of beers to cart
			const addBeers = {
				name: beerInfo.name,
				amount: orderAmount,
			};
			orderState.totalPrice += orderAmount * beerInfo.price;

			// check if beer is already in cart and adjust order
			if (orderState.beers.find((beer) => beer.name === beerInfo.name)) {
				const beerExist = orderState.beers.find((beer) => beer.name === beerInfo.name);
				beerExist.amount += orderAmount;
				console.log(beerExist);
			} else {
				orderState.beers.push(addBeers);
			}

			setOrder(orderState); // call setOrder function in App-component
			setAmount(1);

			event.target.className = "add add-animation";
			event.target.disabled = true;

			setTimeout(() => {
				event.target.className = "add";
				event.target.disabled = false;
			}, 750);
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
		<article className="beer">
			<div className="beer-img" style={beerImg}></div>

			<div className="beer-info">
				<h3>{beerInfo.name}</h3>
				<div className="beer-type">
					<h3>{beerInfo.price} DKK</h3>
					<p>{beerInfo.category}</p>
				</div>

				<div className="beer-desc">
					<p>{beerInfo.description.overallImpression}</p>
					<button className="read-more" onClick={passToMain}>
						Read more
					</button>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" min="0" value={orderAmount} onInput={inputAmount} />
						<button className="minus" onClick={minusAmount}></button>
						<button className="plus" onClick={plusAmount}></button>
					</div>

					<button className="add" onClick={addToCart}></button>
				</div>
			</div>
		</article>
	);
}

export function NotAvailable({ beerInfo }) {
	const imgSource = require("../beer_imgs/" + beerInfo.label);
	const beerImg = {
		backgroundImage: `url(${imgSource.default})`,
	};

	return (
		<article className="beer" style={{ opacity: 0.4, boxShadow: "none" }}>
			<div className="beer-img" style={beerImg}></div>

			<div className="beer-info">
				<h3>{beerInfo.name}</h3>
				<div className="beer-type">
					<h3>NOT AVAILABLE</h3>
				</div>

				<div className="beer-desc">
					<p>{beerInfo.description.overallImpression}</p>
					<button className="read-more" disabled style={{ cursor: "initial" }}>
						Read more
					</button>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" placeholder="1" min="0" disabled />
						<button className="minus" disabled style={{ cursor: "initial" }}></button>
						<button className="plus" disabled style={{ cursor: "initial" }}></button>
					</div>

					<button className="add" disabled style={{ cursor: "initial" }}></button>
				</div>
			</div>
		</article>
	);
}
