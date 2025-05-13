import React from "react";
import Image from "next/image";

import placeholder from "../../public/img/placeholder.png";

const Header = () => {
	return (
		<div className="flex flex-row justify-between gap-16">
			<div className="w-[180px] h-fit">
				<Image src={placeholder} alt="placeholder image"></Image>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="w-[180px] h-[90px]">
				<Image src={placeholder} alt="placeholder image"></Image>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="w-[180px] h-[90px]">
				<Image src={placeholder} alt="placeholder image"></Image>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="w-[180px] h-[90px]">
				<Image src={placeholder} alt="placeholder image"></Image>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="w-[180px] h-[90px]">
				<Image src={placeholder} alt="placeholder image"></Image>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
		</div>
	);
};

export default Header;
