import React, { useEffect, useState } from "react"; // import React

export default function CartItem({ beer, order, setOrder, deleteItem }) {
	const orderState = { ...order };
	const [orderAmount, setAmount] = useState(beer.amount);

	useEffect(() => {
		let cartPrice = 0;

		beer.amount = orderAmount;
		orderState.beers.forEach((beer) => {
			cartPrice += beer.amount * 30;
		});
		orderState.totalPrice = cartPrice;
		console.log(cartPrice);
		updateOrder();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderAmount, beer]);

	function updateOrder() {
		console.log(orderState);
		setOrder(orderState);
		setAmount(orderAmount);
	}

	// +1 to order amount
	function plusAmount() {
		setAmount(orderAmount + 1);
	}

	// -1 to order amount
	function minusAmount() {
		if (orderAmount > 1) {
			setAmount(orderAmount - 1);
		} else {
			deleteCartItem();
		}
	}

	function deleteCartItem() {
		setAmount(0);
		deleteItem(beer.name);
	}

	// set order amount to number typed
	function inputAmount(event) {
		console.log(event.target.value);
		setAmount(event.target.value);
	}

	return (
		<article key={beer.name} className="beer-in-cart">
			<div className="col-left">
				<h3>{beer.name}</h3>
				<div className="beer-amount">
					<input type="number" min="0" value={beer.amount} onInput={inputAmount} />
					<button className="minus" onClick={minusAmount}></button>
					<button className="plus" onClick={plusAmount}></button>
				</div>
			</div>

			<div className="col-right">
				<h3>{beer.amount * 30} DKK</h3>
				<button className="remove" onClick={deleteCartItem}>
					Remove
				</button>
			</div>
		</article>
	);
}
