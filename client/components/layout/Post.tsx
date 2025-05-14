import React from "react";
import Image from "next/image";
import placeholder from "../../public/img/placeholder.png";

async function loader() {
	const path = "/api/posts/";
	const BASE_URL = "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href);
	const data = await response.json();
	// console.log(data);

	// Assuming the latest data is the first item in the list
	const latestPost = data.data[0];
	return { ...latestPost };
}

export default async function Post() {
	const data = await loader();
	return (
		<div className="container w-full h-full flex flex-col">
			<div>
				<div className="flex flex-col w-fit h-fit bg-slate-600 rounded group">
					<div className="h-[600px] w-[800px] relative overflow-hidden">
						<div className="h-full w-full">
							<Image className="transition-transform duration-300 hover:scale-120" src={placeholder} alt="placeholder" layout="fill" objectFit="cover" />
						</div>
						<div className="absolute bottom-0 left-0 text-black p-2 w-full bg-white/50 space-y-4">
							<h2 className="text-4xl font-bold">{data.postTitle}</h2>
							<p className="text-xl">Date | {data.postCategory}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
