export default function NavBar() {
	return (
		<nav className="nav">
			<a href="/" className="site-title">My Site</a>
			<ul>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	)
}