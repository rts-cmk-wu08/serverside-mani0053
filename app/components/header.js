import Link from "next/link";

const Header = () => {
	return (
		<header>
			<nav className="navbar">
				<ul className="navbarleft">
					<li className="navbarleftli">
						<Link href="/">HOME</Link>
					</li>
					<li className="navbarleftli">
						<Link href="/">ABOUT</Link>
					</li>
					<li className="navbarleftli">
						<Link href="/">SHOP</Link>
					</li>
					<li className="navbarleftli">
						<Link href="/blog">BLOGS</Link>
					</li>
					<li className="navbarleftli">
						<Link href="/contact">CONTACT</Link>
					</li>
				</ul>
				<p>LOGO</p>
				<ul className="navbarright">
					<li className="navbarrightli">
						<Link href="/">LOGIN</Link>
					</li>
					<li className="navbarrightli">
						<Link href="/">SEARCH...</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
