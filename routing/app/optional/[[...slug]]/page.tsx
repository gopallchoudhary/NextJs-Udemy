import React from "react";

const page = async ({ params }: {params: Promise<{slug:[]}>}) => {
	const { slug } = await params;
	return (
		<div>
			<h1>Welocome to optional routing</h1>
			{slug ? slug.join(" ") : " "}
		</div>
	);
};

export default page;
