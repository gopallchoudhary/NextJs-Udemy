"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
	const searchParams = useSearchParams();

	const query = searchParams.get("q");
	const category = searchParams.get("category");
	const page = searchParams.get("page");
  
	const allParams = Array.from(searchParams.entries())
  console.log(allParams);
  

	return (
		<div className="flex flex-col">
			<h1>Search Page Query: {query}</h1>
			<h1>category: {category}</h1>
			<h1>page: {page}</h1>
		</div>
	);
}
