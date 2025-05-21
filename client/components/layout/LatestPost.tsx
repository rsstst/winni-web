import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../../public/img/placeholder.png";

async function loader() {
	const path = "/api/posts/";
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href, { cache: "no-store" });
	const data = await response.json();

	// Return the array of posts, or an empty array if not found
	return Array.isArray(data.data) ? data.data : [];
}

export default async function LatestPost() {
	const data = await loader();
	return (
		<div className="container">
			<div className="flex flex-col space-y-4">
				<h2>Artikel Lainnya</h2>
				<div className="flex flex-col space-y-4">
					{Array.isArray(data) ? data.slice(0, 5).map((post: any) => {
						const attributes = post.attributes || post; // fallback if attributes is undefined
						return (
							<Link key={post.id} href={`/posts/${post.id}`}>
								<div className="relative flex flex-row space-x-4 bg-gray-500 p-2 overflow-hidden group rounded-xl hover:text-[#21409A]">
									<div className="w-[160px] h-[100px] overflow-hidden rounded-lg">
										<Image
											className="transition-transform duration-300 group-hover:scale-110"
											src={attributes.postMedia || placeholder}
											alt={attributes.postTitle || "placeholder"}
											width={160}
											height={160}
										/>
									</div>
									<div className="flex flex-col justify-between">
										<h2 className="transition-colors duration-300 text-xl">{attributes.postTitle || "No Title"}</h2>
										<p className="text-sm text-gray-200 mt-1">{attributes.postCaption || "No Caption"}</p>
										<p className="self-start text-sm text-gray-200 mt-4">
											{attributes.publishedAt
												? new Date(attributes.publishedAt).toLocaleDateString()
												: "No Date"}
										</p>
									</div>
								</div>
							</Link>
						);
					}) : null}
				</div>
			</div>
		</div>
	);
}
