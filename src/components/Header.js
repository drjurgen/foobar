import React from "react"; // import React

export default function Header() {
	return (
		<header>
			<nav>
				<a href="index.html">
					<h1>FooBar</h1>
				</a>

				<div className="search-container">
					<p>The place to order beer!</p>
				</div>
			</nav>
		</header>
	);
}
