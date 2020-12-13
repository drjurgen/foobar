import React, { useEffect, useState } from "react"; // import React
import { useForm } from "react-hook-form"; // import react-hook-form

export default function CartPayMPay({ setCartStage, setPayment, postOrder, order, setOrder }) {
	const [paid, setPaid] = useState(false);
	const [count, setCount] = useState(59);
	const { register, errors, handleSubmit } = useForm({
		shouldFocusError: false,
		mode: "onTouched",
	});

	useEffect(() => {
		if (paid) {
			setTimeout(() => setCount(count - 1), 1000);
		}
	}, [count, paid]);

	function selectPayment(event) {
		event.preventDefault();
		setPayment("payment-method");
	}

	function onError(errors) {
		console.log(errors);
	}

	function onSubmit(data) {
		console.log(data);
		setPaid(true);
		const orderPayment = { ...order };
		orderPayment.paymentInfo = data;
		setOrder(orderPayment);

		setTimeout(() => {
			setCartStage("get order");
			postOrder();
			console.log("idk");
		}, 15000);
	}

	return (
		<section className="mobilepay-container" style={paid ? { gridTemplateRows: "28% auto" } : {}}>
			{paid !== true ? (
				<>
					<div className="mobilepay-logo fade-in"></div>

					<form className="form-container fade-in" onSubmit={handleSubmit(onSubmit, onError)}>
						<div className="input-container">
							<input
								name="cardName"
								type="text"
								placeholder="Name"
								ref={register({
									required: { value: true, message: "Please enter your name" },
									minLength: { value: 3, message: "Please enter a valid name" },
								})}
							></input>
							{errors.cardName && <p className="error-msg">{errors.cardName.message}</p>}

							<input
								inputMode="numeric"
								name="phone"
								type="tel"
								placeholder="phone number"
								maxLength="8"
								ref={register({
									required: { value: true, message: "Please enter a valid phone number" },
									minLength: { value: 8, message: "Phone number must be 8 numbers in length" },
								})}
							></input>
							{errors.phone && <p className="error-msg">{errors.phone.message}</p>}
						</div>

						<div className="stage-actions">
							<button className="back" onClick={selectPayment}>
								Back
							</button>
							<button className="proceed" type="submit">
								Proceed
							</button>
						</div>
					</form>
				</>
			) : (
				<>
					<div className="mobilepay-info fade-in">
						<h2 className="mobilepay-text">MobilePay</h2>

						<h2>Payment sent to</h2>
						<p>+45 {order.paymentInfo.phone}</p>
					</div>

					<div className="count-container fade-in">
						<div className="circle">
							<h2>4:{count}</h2>
						</div>
					</div>
				</>
			)}
		</section>
	);
}
