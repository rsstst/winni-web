import React from "react";

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
				<div>
					<h1>Important link</h1>
				</div>
				<div>
					<h1>Not that much important link</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
