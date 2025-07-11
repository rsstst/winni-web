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
					<p className="text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat facilisis elit, sit amet ornare turpis fringilla eget. Nam sit amet nisi sit amet magna aliquet malesuada. Nam
						mattis, massa tristique malesuada interdum, ligula enim efficitur nulla, et vehicula velit tortor sed mauris.
					</p>
					<br />
					<p className="text-justify">
						Maecenas sollicitudin pretium ullamcorper. Morbi sit amet congue diam. Nam ornare faucibus vehicula. Etiam porta turpis odio, in molestie purus fringilla sed. Quisque in bibendum quam.
						Vivamus convallis magna a massa commodo imperdiet. Cras in mollis metus, tincidunt auctor massa.
					</p>
					<br />
					<p className="text-justify">
						Fusce in lectus pellentesque, consequat enim nec, varius odio. Sed in urna vehicula, mattis urna a, egestas leo. Duis a nisl nunc. Aliquam bibendum diam id pulvinar vehicula. Integer
						libero erat, dignissim tempus enim ut, elementum imperdiet felis.
					</p>

					{/* <div dangerouslySetInnerHTML={{ __html: data.postDescription || "" }}>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
