import React from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import placeholder from "../../../public/img/placeholder.png";

async function loader(id: string) {
	const path = "/api/posts?filters[postSlug][$eq]=" + id + "&populate=*";
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href);
	const data = await response.json();
	// console.log(data);

	// Assuming the latest data is the first item in the list
	const post = data.data[0];
	return { ...post };
}

const DetailPage = async (props: { params: Promise<{ id: string }> }) => {
	const params = await props.params;
	const data = await loader(params.id);
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const imgUrl = data.postMedia?.url ? `${BASE_URL}${data.postMedia.url}` : placeholder;
	return (
		<div>
			<div>
				<h1 className="text-3xl font-bold text-center my-2">{data.postTitle}</h1>
				<p className="text-center text-gray-600 mb-2">{data.postAuthor}</p>
				<p className="text-center text-sm text-gray-600">{new Date(data.createdAt).toLocaleDateString()}</p>
				<div className="max-w-2xl mx-auto p-4">
					<Image src={imgUrl} height={1920} width={1080} alt={data.postTitle} className="w-full h-auto mb-4" />
					{Array.isArray(data.postDescription)
						? data.postDescription
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
		</div>
	);
};

export default DetailPage;
