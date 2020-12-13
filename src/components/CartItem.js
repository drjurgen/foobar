import React, { useEffect, useState } from "react"; // import React

export default function CartItem({ beer, order, setOrder, deleteItem }) {
	const orderState = { ...order };
	const item = { ...beer };
	const [orderAmount, setAmount] = useState(item.amount);

	useEffect(() => {
		let cartPrice = 0;

		beer.amount = orderAmount;
		orderState.beers.forEach((beer) => {
			cartPrice += beer.amount * 30;
		});
		orderState.totalPrice = cartPrice;
		updateOrder();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderAmount, beer]);

	function updateOrder() {
		console.log(orderState);
		setOrder(orderState);
		// setAmount(orderAmount);
	}

	// +1 to order amount
	function plusAmount() {
		setAmount(item.amount + 1);
	}

	// -1 to order amount
	function minusAmount() {
		if (orderAmount > 1) {
			setAmount(item.amount - 1);
		} else if (orderAmount === 1) {
			deleteCartItem();
		}
	}

	// delete item from order
	function deleteCartItem() {
		setAmount(0);
		deleteItem(item.name);
	}

	// set order amount to number typed
	function inputAmount(event) {
		if (event.target.value === "0") {
			deleteCartItem();
		} else {
			console.log(event.target.value);
			setAmount(event.target.value);
		}
	}

	return (
		<article key={beer.name} className="beer-in-cart">
			<div className="col-left">
				<h3>{beer.name}</h3>
				<div className="beer-amount">
					<input type="number" min="0" value={item.amount} onInput={inputAmount} />
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
