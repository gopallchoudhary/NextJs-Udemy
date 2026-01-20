import Navigation from "@/components/Navigation";
import React from "react";

const layout = ({ children }: any) => {
	return (
		<div>
			<h1>About Layout Page</h1>
            <Navigation/>
			{children}
		</div>
	);
};

export default layout;
