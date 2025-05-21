import React from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


import Searchbar from "@/components/Searchbar";

const Navbar = () => {
	return (
		<div>
			<nav className="p-4 bg-black">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-8 text-white">
						<Sidebar />
						<h1 className="text-2xl font-bold">My Website</h1>
						<Link href={""}>Beranda</Link>
						<Link href={""}>Beranda</Link>
						<Link href={""}>Beranda</Link>
					</div>

					<Searchbar />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
