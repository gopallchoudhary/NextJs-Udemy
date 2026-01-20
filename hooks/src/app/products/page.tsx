"use client";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};
	return <div>products page</div>;
};

export default page;
