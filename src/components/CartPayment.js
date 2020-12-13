import React, { useState } from "react"; // import React
import CartPayCredit from "./CartPayCredit"; // import CartPayCredit
import CartPayMPay from "./CartPayMPay"; // import CartPayMPay

export default function Payment({ cartStage, setCartStage, postOrder, order, setOrder }) {
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
		<section
			className="payment-container fade-in"
			style={paymentMethod !== "payment-method" ? { gridTemplateRows: "auto" } : null}
		>
			{paymentMethod === "payment-method" ? <h3>Select payment method</h3> : null}

			{paymentMethod === "payment-method" ? (
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
			) : null}

			<div
				className="payment-method-container"
				style={paymentMethod !== "payment-method" ? { gridTemplateRows: "auto" } : null}
			>
				{paymentMethod === "payment-method" ? <p>please select a payment method</p> : null}
				{paymentMethod === "credit-card" ? (
					<CartPayCredit
						cartStage={cartStage}
						setCartStage={setCartStage}
						postOrder={postOrder}
						paymentMethod={paymentMethod}
						setPayment={setPayment}
						order={order}
						setOrder={setOrder}
					/>
				) : null}
				{paymentMethod === "mobilepay" ? (
					<CartPayMPay
						setCartStage={setCartStage}
						setPayment={setPayment}
						postOrder={postOrder}
						order={order}
						setOrder={setOrder}
					/>
				) : null}

				{paymentMethod === "payment-method" ? (
					<div className="stage-actions">
						<button className="back" onClick={back}>
							Back
						</button>
						<button className="proceed" disabled onClick={proceed}>
							Proceed
						</button>
					</div>
				) : null}
			</div>
		</section>
	);
}
