import React from "react"; // import React

export default function Payment({ cartStage, setCartStage }) {
	function proceed() {
		setCartStage("get order");
	}

	function back() {
		setCartStage("account");
	}

	return (
		<section className="payment-container fade-in">
			<h2>Select payment method</h2>

			<select name="cars" id="cars" className="select-payment">
				<option value="" selected disabled>
					Payment method
				</option>
				<option value="credit-card">Credit Card</option>
				<option value="mobilepay">MobilePay</option>
			</select>

			<div className="payment-method-container">
				<p>payment method here</p>
			</div>

			<div className="stage-actions">
				<button className="back" onClick={back}>
					Back
				</button>
				<button className="proceed" disabled onClick={proceed}>
					Proceed
				</button>
			</div>
		</section>
	);
}
