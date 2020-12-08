import React, { useState } from "react"; // import React

export default function CartPayCredit({ cartStage, setCartStage }) {
	const [name, setName] = useState("Your name here");
	const [cardNumber, setCardNumber] = useState("");
	const [atCVC, setAtCVC] = useState(false);
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [cvc, setCVC] = useState("");

	function getName(event) {
		if (event.target.value === "") {
			setName("Your name here");
		} else {
			setName(event.target.value);
		}
	}

	function getCardNumber(event) {
		function formatCardNumber(value) {
			const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
			const onlyNumbers = value.replace(/[^\d]/g, "");

			return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
				[$1, $2, $3, $4].filter((group) => !!group).join(" ")
			);
		}

		setCardNumber(formatCardNumber(event.target.value));
	}

	function getCVCFocus() {
		setAtCVC(!atCVC);
	}

	function getCVC(event) {
		setCVC(event.target.value);
	}

	function getMonth(event) {
		setMonth(event.target.value);
	}

	function getYear(event) {
		setYear(event.target.value);
	}

	function proceed() {
		setCartStage("get order");
	}

	function back() {
		setCartStage("account");
	}

	return (
		<div className="credit-form-container">
			<div className="credit-card">
				<div className="credit-card-inner" style={atCVC ? { transform: "rotateY(-180deg)" } : {}}>
					<div className="credit-card-back">
						<div className="stripe"></div>

						<div className="signature">
							<p>{cvc === "" ? "•••" : cvc}</p>
						</div>
					</div>
					<div className="credit-card-front">
						<div className="chip"></div>

						<div className="card-number">
							<h2 style={cardNumber !== "" ? { color: `#404040` } : { color: "#888" }}>
								{cardNumber === "" ? "•••• •••• •••• ••••" : cardNumber}
							</h2>
						</div>

						<div className="card-info">
							<h3
								style={
									(name !== "Your name here" ? { color: `#404040` } : { color: "#888" },
									name.length > 20 ? { fontSize: "13px" } : {})
								}
							>
								{name}
							</h3>

							<div className="valid-thru">
								<p>valid thru</p>
								<p>
									{month === "" ? "••" : month}/{year === "" ? "••" : year}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form className="credit-card-form">
				<input placeholder="Name on card" onInput={getName} />
				<input placeholder="Card number" type="text" onInput={getCardNumber} maxLength="19" value={cardNumber} />

				<div className="credit-card-last-info">
					<div className="credit-card-valid-thru">
						<input placeholder="MM" type="text" maxLength="2" size="40px" onInput={getMonth} />
						<p>/</p>
						<input placeholder="YY" type="text" maxLength="2" onInput={getYear} />
					</div>

					<div className="cvc">
						<input
							placeholder="CVC"
							type="text"
							maxLength="3"
							minLength="3"
							onInput={getCVC}
							onFocus={getCVCFocus}
							onBlur={getCVCFocus}
						/>
					</div>
				</div>
			</form>

			<div className="stage-actions">
				<button className="back" onClick={back}>
					Back
				</button>
				<button className="proceed" disabled onClick={proceed}>
					Proceed
				</button>
			</div>
		</div>
	);
}
