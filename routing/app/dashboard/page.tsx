import Link from "next/link";
import React from "react";

const DashboardPage = () => {
	return (
		<div>
			<h1>Dashboard Page</h1>
			<Link href={"dashboard/reports"}>Reports page</Link>
			<br />
			<Link href={"/profile"}>Profile page</Link>
			<br />
			<Link href={"dashboard/section"}>Section page</Link>
		</div>
	);
};

export default DashboardPage;
