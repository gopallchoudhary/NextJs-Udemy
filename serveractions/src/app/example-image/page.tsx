import React from "react";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex items-center justify-center gap-2 h-screen">
			<Image
				src={
					"https://media.geeksforgeeks.org/wp-content/uploads/20250726184452563578/frame_25-660.webp"
				}
				alt="vercel logo"
				width={500}
				height={500}
			/>

			<Image
				src={
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRPvlJCbG-Rz0v8WCVQiCmxpD7njl3F4k2w&s"
				}
				alt="vercel logo"
				width={500}
				height={500}
			/>
		</div>
	);
};

export default page;
