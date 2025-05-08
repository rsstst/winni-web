"use client";
import React, { useState } from "react";
import { AlignJustify } from "lucide-react";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				<AlignJustify className="w-6 h-6" />
			</button>
			{isSidebarOpen && (
                <div>
                    
                </div>
			)}
		</div>
	);
};

export default Sidebar;
