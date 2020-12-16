import React, { useState } from "react"; // import React
import CartPayCreditForm from "./CartPayCreditForm"; // import form component

export default function CartPayCredit({ setCartStage, postOrder, paymentMethod, setPayment, order, setOrder }) {
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
		if (isNaN(event.target.value)) {
			event.target.value = "";
		}

		// Formatting credit card with spaces blackboxed with use of regex
		// https://stackoverflow.com/a/59339120
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
		if (isNaN(event.target.value)) {
			event.target.value = "";
		}
		setCVC(event.target.value);
	}

	function getMonth(event) {
		if (isNaN(event.target.value)) {
			event.target.value = "";
		}
		setMonth(event.target.value);
	}

	function getYear(event) {
		if (isNaN(event.target.value)) {
			event.target.value = "";
		}
		setYear(event.target.value);
	}

	function proceed() {
		setCartStage("get order");
	}

	function back(event) {
		event.preventDefault();
		setCartStage("account");
	}

	function onSubmit(data) {
		const orderPayment = { ...order };
		orderPayment.paymentInfo = data;
		setOrder(orderPayment);

		console.log(data);
		proceed();
		postOrder();
	}

	return (
		<div className="credit-form-container">
			<div className="credit-card fade-in">
				<div className="credit-card-inner" style={atCVC ? { transform: "rotateY(-180deg)" } : {}}>
					<div
						className={`credit-card-back ${cardNumber.substring(0, 1) === "4" ? "visa" : ""} ${
							cardNumber.substring(0, 2) === "51" ? "mastercard" : ""
						}`}
					>
						<div className="stripe"></div>

						<div className="signature">
							<p>{cvc === "" ? "•••" : cvc}</p>
						</div>
					</div>
					<div
						className={`credit-card-front ${cardNumber.substring(0, 1) === "4" ? "visa" : ""} ${
							cardNumber.substring(0, 2) === "51" ? "mastercard" : ""
						}
						`}
					>
						<div className="card-top">
							<div className="chip"></div>
							{cardNumber.substring(0, 1) === "4" ? <div className="visa-issuer"></div> : null}
							{cardNumber.substring(0, 2) === "51" ? <div className="mastercard-issuer"></div> : null}
						</div>

						<div className="card-number">
							<h2 style={cardNumber !== "" ? { color: `#404040` } : { color: "#888" }}>
								{cardNumber === "" ? "•••• •••• •••• ••••" : cardNumber}
							</h2>
						</div>

						<div className="card-info">
							<h3 style={name.length > 20 ? { fontSize: "13px" } : {}}>{name}</h3>

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

			<CartPayCreditForm
				cardNumber={cardNumber}
				getName={getName}
				getCardNumber={getCardNumber}
				getCVCFocus={getCVCFocus}
				getCVC={getCVC}
				getMonth={getMonth}
				month={month}
				getYear={getYear}
				year={year}
				back={back}
				onSubmit={onSubmit}
				paymentMethod={paymentMethod}
				setPayment={setPayment}
			/>
		</div>
	);
}
