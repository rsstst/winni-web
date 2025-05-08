import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div>
			<nav className="p-4 outline-1">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-8">
						<h1 className="text-2xl font-bold">My Website</h1>
            <Link href={""}>Beranda</Link>
            <Link href={""}>Beranda</Link>
            <Link href={""}>Beranda</Link>
					</div>

					<div className="flex space-x-8">
						<Link href={""}>Beranda</Link>
						<Link href={""}>Beranda</Link>
						<Link href={""}>Beranda</Link>
						<Link href={""}>Beranda</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
