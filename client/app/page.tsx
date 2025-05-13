import Post from "@/components/layout/Post";
import Header from "@/components/layout/Header";
import LatestPost from "@/components/layout/LatestPost";

export default function Home() {
	return (
		<div className="flex justify-center">
			<div className="p-8 bg-gray-700 space-y-16">
				<Header />
				<div className="flex flex-row space-x-8 h-fit">
					<div className="flex-3 w-full h-full">
						<Post />
					</div>
					<div className="flex-1">
						<div className="bg-gray-900 w-full h-full">
							<p>Test</p>
						</div>
					</div>
				</div>
				<LatestPost />
			</div>
		</div>
	);
}
