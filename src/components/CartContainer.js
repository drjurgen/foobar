import React, { useState } from "react"; // import React
import CartList from "./Cart"; // import Cart
import CartStatus from "./CartStatus"; // import Cart

export default function CartContainer({ order, setOrder }) {
	const [openCart, setCartStatus] = useState(false);

	function height() {
		setCartStatus(!openCart);
	}

	let beerCounter = 0;
	order.beers.forEach((beer) => {
		beerCounter += beer.amount;
	});

	const totalBeers = beerCounter;

	return (
		<div className="background-container">
			<div className="mini-cart-container" onClick={height}>
				<div className="cart-info">
					<div className="current-order">
						<h3>Current order</h3>
						<h3>{order.totalPrice} DKK</h3>
					</div>

					<div className="short-cart-info">
						<p>
							Currently {totalBeers} {totalBeers === 1 ? <span>beer</span> : <span>beers</span>} in cart
						</p>
					</div>
				</div>

				<div className="open-cart">
					<button
						className="open-cart-btn"
						style={openCart ? { transform: "rotate(180deg)" } : { transform: "rotate(0)" }} // rotate arrow to indicate open/close state
					></button>
				</div>
			</div>

			<div
				className="cart-container"
				style={openCart ? { display: "block", height: "calc(100% - 90px)" } : { height: "80px" }} // transform height of cart container if open or not
			>
				<CartStatus />
				<CartList order={order} setOrder={setOrder} />
			</div>
		</div>
	);
}
