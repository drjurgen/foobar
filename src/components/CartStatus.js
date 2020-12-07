import React from "react"; // import React

export default function CartStatus({ cartStage }) {
	return (
		<div className="cart-status">
			<div className="status-circle fade">
				{cartStage === "current order" ? <h3 className="fade">1 of 4</h3> : null}
				{cartStage === "account" ? <h3 className="fade">2 of 4</h3> : null}
				{cartStage === "payment" ? <h3 className="fade">3 of 4</h3> : null}
				{cartStage === "get order" ? <h3 className="fade">4 of 4</h3> : null}
			</div>

			<div className="status-info">
				<h2>{cartStage}</h2>

				{cartStage === "current order" ? <p className="fade">Next: Account</p> : null}
				{cartStage === "account" ? <p className="fade">Next: payment</p> : null}
				{cartStage === "payment" ? <p className="fade"> Next: Get Order</p> : null}
				{cartStage === "get order" ? <p className="fade">Wait until ready</p> : null}
			</div>
		</div>
	);
}
