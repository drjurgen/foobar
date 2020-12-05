import React from "react"; // import React
import CartItem from "./CartItem"; // import Cart

export default function CartList({ order, setOrder }) {
	return (
		<section className="cart-inner">
			{order.beers.length === 0 ? (
				<div>
					<p>No items in cart</p>
				</div>
			) : (
				order.beers.map((beer) => {
					return <CartItem key={beer.name} beer={beer} order={order} setOrder={setOrder} />;
				})
			)}

			<article className="cart-total">
				<h3>Total</h3>
				<h3>{order.totalPrice} DKK</h3>
			</article>

			{order.beers.length === 0 ? (
				<button className="proceed" disabled>
					cannot proceed
				</button>
			) : (
				<button className="proceed">proceed</button>
			)}
		</section>
	);
}
