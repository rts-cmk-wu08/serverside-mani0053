// Client Side Component

"use client";
const getData = async (postId) => {
	const result = await fetch(
		`https://swanky-api.onrender.com/posts/${postId}`
	);
	if (!result.ok) {
		throw new Error("Failed to Fetch data");
	}
	return result.json();
};

const BlogDetail = async ({ params: { postId } }) => {
	const post = await getData(postId);
	console.log(post);
	return (
		<div>
			<h1>{post.title}</h1>
			<h2>{post.subtitle} </h2>
			<p>{post.text}</p>
		</div>
	);
};

export default BlogDetail;
