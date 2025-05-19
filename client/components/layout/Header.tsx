import React from "react";
import Image from "next/image";

import placeholder from "../../public/img/placeholder.png";

const Header = () => {
	return (
		<div className="flex flex-row justify-between gap-16">
			<div className="w-[180px] h-[120px] flex flex-col group">
				<div className="flex-1 flex items-center justify-center">
					<Image className="transition-transform hover:scale-110" src={placeholder} alt="placeholder image" />
				</div>
				<p className="text-justify mt-2 transition-colors group-hover:text-blue-600">Lorem ipsum dolor sit amet</p>
			</div>
		</div>
	);
};

export default Header;
