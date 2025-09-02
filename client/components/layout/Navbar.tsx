import React from "react";
import Link from "next/link";


import Searchbar from "@/components/Searchbar";

const Navbar = () => {
	return (
		<div>
			<nav className="p-4 bg-black">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-8 text-white">
						<Link href={".."}><h1 className="text-2xl font-bold text-sky-600">JendelaTeknoDunia</h1></Link>
						<Link href={"/kategori/teknologi"} className="group transition duration-300">Teknologi<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
						<Link href={"/kategori/komputer"} className="group transition duration-300">Komputer<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
						<Link href={"/kategori/games"} className="group transition duration-300">Games<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
						<Link href={"/kategori/gadget"} className="group transition duration-300">Gadget<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
						<Link href={"/about"} className="group transition duration-300">Tentang Kami<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
					</div>

					<Searchbar />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
