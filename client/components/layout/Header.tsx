import React from "react";
import Image from "next/image";

import placeholder from "../../public/img/placeholder.png";

const Header = () => {
	return (
		<div className="flex flex-row justify-between gap-16">
				<Image src={placeholder} alt="placeholder image" width={180} height={90}></Image>
				<Image src={placeholder} alt="placeholder image" width={180} height={90}></Image>
				<Image src={placeholder} alt="placeholder image" width={180} height={90}></Image>
				<Image src={placeholder} alt="placeholder image" width={180} height={90}></Image>
				<Image src={placeholder} alt="placeholder image" width={180} height={90}></Image>
		</div>
	);
};

export default Header;
