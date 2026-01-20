"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navigation = () => {
	const pathname = usePathname();
	console.log(pathname);

	const isActive = (path: string) => pathname === path;
	return (
		<div className="bg-gray-500 flex gap-4 p-4">
			<Link
				className={`${isActive("/about/settings") ? "bg-blue-500 p-2" : ""}`}
				href={"/about/settings"}
			>
				settings
			</Link>
			<Link
				className={`${isActive("/about/dashboard") ? "bg-blue-500 p-2" : ""}`}
				href={"/about/dashboard"}
			>
				dashboard
			</Link>
		</div>
	);
};

export default Navigation;
