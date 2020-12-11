import React, { useEffect, useState } from "react"; // import React
import { get } from "../modules/rest"; // import REST operations

export default function CartGetOrder({ order, facts, setCartStage, setOrder, setCartStatus }) {
	const [status, setStatus] = useState("In Queue");
	const [updates, setUpdates] = useState({ ...facts });
	useEffect(() => {
		getStatus();
		get("https://foobar-data.herokuapp.com/", setUpdates);

		const interval = setInterval(() => {
			getStatus();
			get("https://foobar-data.herokuapp.com/", setUpdates);
		}, 2000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, updates]);

	const doneOrder = { ...order };
	const orderId = doneOrder.orderInfo.id;
	const inQueue = updates.queue.filter((entry) => entry.id === doneOrder.orderInfo.id);
	const inServe = updates.serving.filter((entry) => entry.id === doneOrder.orderInfo.id);
	const queueNum = updates.queue.findIndex((entry) => entry.id === doneOrder.orderInfo.id) + 1;
	const bartender = updates.bartenders.find((entry) => entry.servingCustomer === doneOrder.orderInfo.id);

	const statusQueue = `Your order is currently number ${queueNum} in queue right now. Check back later for status updates.`;
	const statusServing = `Your order is currently getting prepared by ${
		bartender !== undefined ? bartender.name : "our lovely bartenders"
	}. Check back later for status updates.`;
	const statusReady = `Your order is now ready for pickup! Please go to the bar and tell the bartenders your order number (#${orderId}). \n To order more beer simply click the checkmark below!`;

	function getStatus() {
		if (inQueue.length > 0) {
			if (status !== "In Queue") {
				setStatus("In Queue");
				console.log("in queue");
			}
		} else if (inServe.length > 0) {
			if (status !== "Serving") {
				setStatus("Serving");
				console.log("serving");
			}
		} else if (status !== "Ready" && status === "Serving") {
			setStatus("Ready");
			console.log("order ready");
		}
	}

	function resetOrder() {
		console.log("order reset");
		const emptyOrder = {
			totalPrice: 0,
			beers: [],
			paymentInfo: "",
			orderInfo: "",
		};

		setOrder(emptyOrder);
		setCartStatus(false);
		setCartStage("current order");
	}

	return (
		<section className="get-order">
			<div className="thanks">
				<h2>Thank you, {doneOrder.paymentInfo.cardName}!</h2>
				<p>
					Thank you for ordering beer at FooBar! Your order number is #{orderId}. This page will automatically keep you
					updated on your order’s current status.
				</p>
			</div>
			<div className="status">
				<h2>Status: {status}</h2>
				{status === "In Queue" ? <p>{statusQueue}</p> : null}
				{status === "Serving" ? <p>{statusServing}</p> : null}
				{status === "Ready" ? <p>{statusReady}</p> : null}

				{status !== "Ready" ? <h3>ETA: 2 min</h3> : null}
			</div>
			{status !== "Ready" ? <div className="loading-icon-stage"></div> : null}

			{status === "Ready" ? (
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 140.2 140.2" onClick={resetOrder}>
					<circle
						className="path circle"
						fill="none"
						strokeWidth="10"
						strokeMiterlimit="10"
						cx="65.1"
						cy="65.1"
						r="62.1"
					/>
					<polyline
						className="path check"
						fill="none"
						strokeWidth="10"
						strokeLinecap="round"
						strokeMiterlimit="10"
						points="100.2,40.2 51.5,88.8 29.8,67.5 "
					/>
				</svg>
			) : null}
		</section>
	);
}
