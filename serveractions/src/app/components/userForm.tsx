import { createUser } from "@/actions";
import React from "react";

const UserForm = () => {

    
	return (
		<form action={createUser}>
			<input type="text" name="name" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md " type="submit">Create</button>
		</form>
	);
};

export default UserForm;
