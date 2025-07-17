import React from "react";
import Image from "next/image";
import placeholder from "../../public/img/placeholder.png";

async function loader() {
	const path = "/api/about?populate=*";
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href, { cache: "no-store" });
	const data = await response.json();

	return data.data;
}

const About = async () => {
	const data = await loader();
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const imageUrl = data.media?.url ? `${BASE_URL}${data.media.url}` : placeholder;
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-8">
			<div className="bg-slate-200 p-4 rounded-lg shadow-md mb-8 w-full">
				<h1 className="text-3xl font-bold text-center my-2">{data.title}</h1>
				<p className="text-center text-gray-600 mb-2">{data.subTitle}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div>
					<Image className="" src={imageUrl} width={500} height={120} alt="skibidi" />
				</div>
				<div className="max-w-2xl mx-auto p-4">
					{Array.isArray(data.description)
						? data.description
							.filter((block: any) => block.type === "paragraph")
							.map((block: any, idx: number) => {
								const text = Array.isArray(block.children)
									? block.children.map((child: any) => child.text).join("")
									: "";
							   return (
								   <React.Fragment key={idx}>
									   <p className="text-justify">{text}</p>
									   <br />
								   </React.Fragment>
							   );
							})
						: null}
				</div>
			</div>
			<div className="mt-8">
				<p className="text-center text-sm text-gray-600">{data.footprint}</p>
			</div>
		</div>
	);
};

export default About;
