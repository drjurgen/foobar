import React from "react"; // import React
import { useForm } from "react-hook-form"; // import react-hook-form

export default function CartPayCreditForm(props) {
	const { register, errors, handleSubmit } = useForm();

	function onError(errors) {
		console.log(errors);
	}

	return (
		<form className="credit-card-form" onSubmit={handleSubmit(props.onSubmit, onError)}>
			<div className="credit-card-form-content">
				<input
					name="cardName"
					placeholder="Name on card"
					onInput={props.getName}
					ref={register({
						required: { value: true, message: "Please enter cartholder's name" },
						minLength: { value: 3, message: "Please enter a valid name" },
					})}
				/>
				{errors.cardName && <p className="error-msg">{errors.cardName.message}</p>}

				<input
					name="cardNumber"
					placeholder="Card number"
					type="text"
					onInput={props.getCardNumber}
					maxLength="19"
					value={props.cardNumber}
					ref={register({
						required: { value: true, message: "Please enter a valid card number" },
						minLength: { value: 19, message: "Card number must be 16 characters" },
					})}
				/>
				{errors.cardNumber && <p className="error-msg">{errors.cardNumber.message}</p>}

				<div className="credit-card-last-info">
					<div className="credit-card-valid-thru">
						<input
							name="cardMonth"
							placeholder="MM"
							type="text"
							maxLength="2"
							size="40px"
							onInput={props.getMonth}
							ref={register({
								required: { value: true, message: "Please enter a valid expirary month" },
								minLength: { value: 2, message: "Month needs to be 2 digits" },
								min: {
									value: (new Date().getMonth() + 1).toString(),
									message: "Please enter a valid expirary month",
								},
								max: { value: 12, message: "Please enter a valid expirary month" },
							})}
						/>
						<p>/</p>
						<input
							name="cardYear"
							placeholder="YY"
							type="text"
							maxLength="2"
							onInput={props.getYear}
							ref={register({
								required: { value: true, message: "Please enter a valid expirary year" },
								minLength: { value: 2, message: "Year needs to be 2 digits" },
								min: {
									value: new Date().getFullYear().toString().substring(2),
									message: "Please enter a valid expirary year",
								},
							})}
						/>
					</div>

					<div className="cvc">
						<input
							name="cardCVC"
							placeholder="CVC"
							type="text"
							maxLength="3"
							minLength="3"
							onInput={props.getCVC}
							onFocus={props.getCVCFocus}
							onBlur={props.getCVCFocus}
							ref={register({
								required: { value: true, message: "Please enter a valid CVC" },
								minLength: { value: 3, message: "CVC needs to be 3 digits" },
							})}
						/>
					</div>
				</div>

				<div className="errors-last-info">
					<p className="error-container">
						{errors.cardMonth ? (
							<span className="error-msg" style={{ marginTop: "3px" }}>
								{errors.cardMonth.message}.
							</span>
						) : null}

						{errors.cardYear ? (
							<span className="error-msg" style={{ marginTop: "3px" }}>
								{errors.cardYear.message}.
							</span>
						) : null}
						{errors.cardCVC ? (
							<span className="error-msg" style={{ marginTop: "3px" }}>
								{errors.cardCVC.message}.
							</span>
						) : null}
					</p>
				</div>
			</div>

			<div className="stage-actions">
				<button className="back" onClick={props.back}>
					Back
				</button>
				<button className="proceed" type="submit">
					Proceed
				</button>
			</div>
		</form>
	);
}
