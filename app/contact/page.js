// Client Side Component
"use client";

import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// valider form input...
		let values = { name, email };
		// post with axios here!
		console.log(values);
	};

	return (
		<div>
			<h1>Any Questions?</h1>
			<form onSubmit={handleSubmit}>
				<div className="formgroup">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="formgroup">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
