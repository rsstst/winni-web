import Post from "@/components/layout/Post";
import Header from "@/components/layout/Header";

export default function Home() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-4/5 p-8 bg-gray-700 space-y-4">
				<Header />
				<div className="">
					<Post />
				</div>
			</div>
		</div>
	);
}
