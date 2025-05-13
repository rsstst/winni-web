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
		<div className="container flex flex-col">
			<div>
				<div className="flex flex-col w-fit h-fit bg-slate-600 rounded">
					<div className="h-[400px] w-[600px]">
            <div className="overflow-hidden">
                <Image className="transition-transform duration-300 hover:scale-120" src={placeholder} alt="placeholder" />
            </div>
					</div>
					<h2>{data.postTitle}</h2>
					<p>Date | {data.postCategory}</p>
					<p>Author {data.postAuthor}</p>
				</div>
			</div>
		</div>
	);
}
