"use client";
import React, { useState } from "react";

const NotesClient = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	const createNote = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title.trim() || !content.trim()) return;
		setLoading(true);

		try {
			const response = await fetch("/api/notes", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, content }),
			});

			const result = await response.json();
			console.log(result);
			setLoading(false);
		} catch (error) {
			console.log("Error while creating note: ", error);
		}
	};
	return (
		<div className="space-y-6">
			<form className="bg-white rounded-lg shadow-md p-6" onSubmit={createNote}>
				<h2 className="text-xl text-gray-800 font-semibold mb-4">
					Create new note
				</h2>
				<div className="space-y-4">
					<input
						className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus: outline-none text-gray-800"
						type="text"
						value={title}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTitle(e.target.value)
						}
						placeholder="Note title"
						required
					/>

					<textarea
						rows={4}
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus: outline-none text-gray-800"
						placeholder="Note content"
					/>

					<button
						className="text-white bg-blue-500 rounded-md hover:cursor-pointer px-6 py-2 hover:bg-blue-600 disabled:opacity-50"
						type="submit"
						disabled={loading}
					>
						{loading ? "Creating..." : "Create Note"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default NotesClient;
