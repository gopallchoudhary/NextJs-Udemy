"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	const handleClick = () => {
		// router.push("/products");
		router.replace("/products");
	};

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div>
			<button onClick={() => handleClick()}>Products Page</button>
			<br />
			<button onClick={() => handleGoBack()}>Back</button>
		</div>
	);
}
