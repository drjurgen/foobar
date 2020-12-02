import React from "react"; // import React

export default function Cart() {
	return (
		<div className="background-container">
			<div className="mini-cart-container">
				<div className="cart-info">
					<div className="current-order">
						<h3>Current order</h3>
						<h3>?? DKK</h3>
					</div>
					<p>up to three beers shown here...</p>
				</div>

				<div className="open-cart">
					<button className="open-cart-btn"></button>
				</div>
			</div>
		</div>
	);
}
