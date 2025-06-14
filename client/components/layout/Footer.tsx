import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex justify-center bg-black p-4">
			<div className="flex flex-row justify-between w-full max-w-7xl text-white">
				<div className="flex flex-col space-y-4">
					<div>
						<h1>Logo</h1>
					</div>
					<div>
						<h1>About company</h1>
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					<h1 className="text-xl">Important link</h1>
					<Link className="hover:text-blue-200" href="#">Teknologi</Link>
					<Link className="hover:text-blue-200" href="#">Komputer</Link>
					<Link className="hover:text-blue-200" href="#">Games</Link>
					<Link className="hover:text-blue-200" href="#">Gadget</Link>
					<Link className="hover:text-blue-200" href="#">Tentang Kami</Link>
				</div>
				<div className="flex flex-col space-y-2">
					<h1 className="text-xl">Not that much important link</h1>
					<Link className="hover:text-blue-200" href="">Langganan email</Link>
					<Link className="hover:text-blue-200" href="">Hubungi kami</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
