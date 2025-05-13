import Post from "@/components/layout/Post";
import Header from "@/components/layout/Header";
import SidePost from "@/components/layout/SidePost";

export default function Home() {
	return (
		<div className="flex justify-center">
			<div className="p-8 bg-gray-700 space-y-4">
				<Header />
				<div className="flex flex-row space-x-8 h-fit">
					<div className="flex-3">
						<Post />
					</div>
					<div className="flex-1">
						<SidePost />
					</div>
				</div>
			</div>
		</div>
	);
}
