import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<div className="px-16">
			<div className="flex flex-col items-center justify-center bg-slate-800">
				<div className="flex flex-col items-center w-full">
					<div className="flex justify-start w-full">
						<Image className="" src={""} alt="" width={64} height={64} />
					</div>
					<div className="flex flex-row items-center text-center space-x-4">
						<Link href={""}>Beranda</Link>
						<Link href={""}>Berita</Link>
						<Link href={""}></Link>
						<Link href={""}>A</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
