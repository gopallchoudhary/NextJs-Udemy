import React from "react";

const page = async ({ params }: any) => {
	const { slug } = await params;
	return <div>{slug.join(" ")}</div>;
};

export default page;
