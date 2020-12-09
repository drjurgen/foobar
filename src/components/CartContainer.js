import React, { useState } from "react"; // import React
import CartList from "./CartList"; // import Cart
import CartStatus from "./CartStatus"; // import Cart
import Account from "./Account"; // import Account
import Payment from "./CartPayment"; // import Payment

export default function CartContainer({ order, setOrder, postOrder }) {
	const [openCart, setCartStatus] = useState(false);
	const [cartStage, setCartStage] = useState("current order");

	function setStage(value) {
		setCartStage(value);
	}

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
				style={openCart ? { height: "calc(100% - 90px)" } : { height: "0", padding: 0 }} // transform height of cart container if open or not
			>
				<CartStatus cartStage={cartStage} />

				{cartStage === "current order" ? (
					<CartList
						order={order}
						setOrder={setOrder}
						cartStage={cartStage}
						setCartStage={setStage}
						className="fade-in"
					/>
				) : null}

				{cartStage === "account" ? <Account cartStage={cartStage} setCartStage={setStage} className="fade-in" /> : null}

				{cartStage === "payment" ? (
					<Payment cartStage={cartStage} setCartStage={setStage} postOrder={postOrder} className="fade-in" />
				) : null}
			</div>
		</div>
	);
}
