"use client";
import { useParams } from "next/navigation";

const SlugIdPage = () => {
	const params = useParams();
    console.log(params);
    
	return (
		<div>
			<h1>Page ID: {params.id}</h1>
			<h1>Page slug: {params.slug}</h1>
		</div>
	);
};

export default SlugIdPage;
