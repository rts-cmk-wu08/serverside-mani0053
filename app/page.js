// ISR cacher 30s
const getData = async () => {
	const result = await fetch("https://swanky-api.onrender.com/products", {
		next: { revalidate: 30 },
	});
	if (!result.ok) {
		throw new Error("Failed to Fetch data");
	}
	return result.json();
};
// Statisk HTML
const getText = async () => {
	const result = await fetch("https://swanky-api.onrender.com/started");
	if (!result.ok) {
		throw new Error("Failed to Fetch data");
	}
	return result.json();
};

const Products = async () => {
	const products = await getData();
	console.log(products);

	const texts = await getText();
	console.log(texts);
	return (
		<div className="containerHome">
			<h1>Our Products</h1>
			<div>
				{products.map((product) => (
					<h2 key={product.id}>{product.name}</h2>
				))}
			</div>

			<div>
				<h2>{texts.headline}</h2>
				{texts.bullets.map((text) => (
					<div key={text.id}>
						<h3>{text.name}</h3>
						<p>{text.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
