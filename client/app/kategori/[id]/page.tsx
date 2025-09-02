import React from "react";
import Image from "next/image";
import placeholder from "../../../public/img/placeholder.png";

async function loader(id: string) {
	const path = "/api/posts?filters[postCategory][categoryURL][$eq]=" + id + "&populate=*";
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href);
	const data = await response.json();
	// console.log(data);

	// Return the top 5 posts
	return Array.isArray(data.data) ? data.data.slice(0, 5) : [];
}
const categoryPage = async (props: { params: Promise<{ id: string }> }) => {
	const params = await props.params;
	const data = await loader(params.id);
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

	return (
		<div className="items-center justify-center bg-gray-100 pl-32 pr-32 pt-8 pb-8">
			<div className="flex flex-col gap-8">
				{Array.isArray(data) && data.length > 0 ? (
					data.map((post: any, index: number) => {
						const attributes = post.attributes || post;
						const imgUrl = attributes.postMedia?.url ? `${BASE_URL}${attributes.postMedia.url}` : placeholder;
						return (
								<a key={post.postSlug} href={`/detail/${post.postSlug}`}>
								<div key={post.id || index} className="flex flex-row w-full h-[320px] gap-8 bg-slate-200 rounded-lg p-4">
									<Image src={imgUrl} height={500} width={270} alt={attributes.postTitle} className="object-cover" />
									<div>
										<h1>{attributes.postTitle}</h1>
										<p>{attributes.postCaption}</p>
									</div>
								</div>
								</a>
						);
					})
				) : (
					<div className="text-center p-8">No posts found in this category</div>
				)}
			</div>
		</div>
	);
};

export default categoryPage;
