import React from "react";
import { Roboto, Poppins, Jockey_One } from "next/font/google";

// const roboto = Roboto({
// 	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// 	subsets: ["latin"],
// });

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

// const jockey_One = Jockey_One({
// 	weight: ["400"],
// 	subsets: ["latin"],
// });

const FontExample = () => {
	return (
		<div>
			<h1 className={` text-6xl`}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
				nesciunt!
			</h1>
			<p className={`${poppins.className} mt-2 text-2xl`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, rem
				suscipit! At officia doloremque tempora. Temporibus illum, enim
				voluptatem fuga error minus iste odit ratione ducimus soluta laborum
				omnis nulla numquam dicta sint perferendis asperiores harum nihil veniam
				ipsam unde voluptatibus laudantium? Commodi autem facilis, ab iste ad
				nisi accusamus! Non asperiores similique, accusamus facilis quisquam
				saepe tempore eaque soluta.
			</p>
		</div>
	);
};

export default FontExample;
