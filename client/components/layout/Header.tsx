import React from "react";
import Image from "next/image";
import Link from "next/link";

import placeholder from "../../public/img/placeholder.png";

async function loader() {
	const path = "/api/posts?populate=*";
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href, { cache: "no-store" });
	const data = await response.json();

	// Return the array of posts, or an empty array if not found
	return Array.isArray(data.data) ? data.data : [];
}

const Header = async () => {
	const data = await loader();
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

	return (
		<div className="flex flex-row justify-between gap-16">
			{Array.isArray(data)
				? data.slice(0, 5).map((post: any) => {
						const attributes = post.attributes || post; // fallback if attributes is undefined

						// Construct full image URL from Strapi
						const imageUrl = attributes?.postMedia?.url ? `${BASE_URL}${attributes.postMedia.url}` : placeholder;

						return (
							<div key={post.id} className="w-[180px] h-[120px] flex flex-col group">
								<Link href={`/detail/${post.id || "#"}`}>
									<div className="w-[180px] h-[120px] overflow-hidden">
										<Image 
											height={180} 
											width={120} 
											className="transition-transform hover:scale-110 object-cover w-full h-full" 
											src={imageUrl} 
											alt={attributes?.postTitle || "Post image"} 
										/>
									</div>
									<p className="text-justify mt-2 transition-colors group-hover:text-blue-600">{attributes?.postTitle || "Lorem ipsum dolor sit amet"}</p>
								</Link>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Header;
