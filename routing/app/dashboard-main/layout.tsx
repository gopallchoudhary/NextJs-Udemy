import Link from "next/link";

export default function DashboardMainLayout({ tab1, tab2 }: any) {
	return (
		// <nav>
		// 		<Link href={"dashboard-main/feed"}>Feed</Link> {"| "}
		// 		<Link href={"dashboard-main/stats"}>Stats</Link>
		// 	</nav>
		// <div className="flex gap-5">
		// 	<div className="flex-2">{feed}</div>
		// 	<div className="flex-1">{stats}</div>
		// </div>

		<div>
			<nav className="mb-2.5">
				<Link href={"/dashboard-main/tab1"}>Tab1</Link>{" "}
				<Link href={"/dashboard-main/tab2"}>Tab2</Link>
			</nav>
			<div>
				{tab1} {tab2}
			</div>
		</div>
	);
}
