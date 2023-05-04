import Link from "next/link";

//SSR fetcher data ved hvert render
const getData = async () => {
	const result = await fetch("https://swanky-api.onrender.com/posts", {
		next: { revalidate: 0 },
	});
	if (!result.ok) {
		throw new Error("Failed to fetch data");
	}
	return result.json();
};

const Posts = async () => {
	const posts = await getData();
	console.log(posts);
	return (
		<div>
			<h1>Blog</h1>
			<div>
				{posts.map((post) => (
					<h2 key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</h2>
				))}
			</div>
		</div>
	);
};

export default Posts;
