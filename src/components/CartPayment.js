import React, { useState } from "react"; // import React
import CartPayCredit from "./CartPayCredit"; // import CartPayCredit
import CartPayMPay from "./CartPayMPay"; // import CartPayMPay

export default function Payment({ cartStage, setCartStage }) {
	const [paymentMethod, setPayment] = useState("payment-method");

	function proceed() {
		setCartStage("get order");
	}

	function back() {
		setCartStage("account");
	}

	function getPayMethod(event) {
		console.log(event.target.value);
		setPayment(event.target.value);
	}

	return (
		<section className="payment-container fade-in">
			<h2>Select payment method</h2>

			<select
				name="payment-method"
				id="payment-method"
				className="select-payment"
				onInput={getPayMethod}
				defaultValue={{ label: "one", value: 0 }}
			>
				<option value={{ value: "one", label: "One" }} disabled>
					Payment method
				</option>
				<option value="credit-card">Credit Card</option>
				<option value="mobilepay">MobilePay</option>
			</select>

			<div className="payment-method-container">
				{paymentMethod === "payment-method" ? <p>please select payment method</p> : null}
				{paymentMethod === "credit-card" ? <CartPayCredit /> : null}
				{paymentMethod === "mobilepay" ? <CartPayMPay /> : null}
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
