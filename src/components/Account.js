import React from "react"; // import React

export default function Account({ setCartStage }) {
	function proceed() {
		setCartStage("payment");
	}

	function back() {
		setCartStage("current order");
	}

	return (
		<section className="account-container fade-in">
			<h2>Do you have an account?</h2>

			<button className="proceed" disabled>
				Login
			</button>
			<button className="proceed" disabled>
				Create account
			</button>
			<button className="proceed" onClick={proceed}>
				Pay without account
			</button>

			<button className="back" onClick={back}>
				Back
			</button>
		</section>
	);
}
