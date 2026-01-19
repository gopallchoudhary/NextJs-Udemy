"use client";
import { init } from "next/dist/compiled/webpack/webpack";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Note {
	_id: string;
	title: string;
	content: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}

const NotesClient = ({ initialNotes }: { initialNotes: Note[] }) => {
	const [notes, setNotes] = useState<Note[]>(initialNotes || []);

	const [editingId, setEditingId] = useState<string | null>(null);
	const [editTitle, setEditTitle] = useState<string>("");
	const [editContent, setEditContent] = useState<string>("");

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	//.create note
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
			if (result.success && result.data) {
				setNotes([result.data, ...notes]);
				toast.success("Note successfully created");
				setTitle("");
				setContent("");
			}
			setLoading(false);
		} catch (error) {
			console.log("Error while creating note: ", error);
			toast.error("Failed to create note");
		}
	};

	//,delete note
	const deleteNote = async (id: string) => {
		try {
			const response = await fetch(`/api/notes/${id}`, {
				method: "DELETE",
			});
			const result = await response.json();

			if (result.success) {
				setNotes(notes.filter((note) => note._id !== id));
				toast.success("Note successfully created");
			}
		} catch (error) {
			console.log(error);
			toast.error("Failed to delete the note");
		}
	};

	//. update note
	const startEdit = (note: Note) => {
		setEditingId(note._id);
		setEditTitle(note.title);
		setEditContent(note.content);
	};

	const cancelEdit = () => {
		setEditingId(null);
		setEditTitle("");
		setEditContent("");
	};

	//,upate
	const updateNote = async (id: string) => {
		if (!editTitle.trim() || !editContent.trim()) return;
		setLoading(true);
		try {
			const response = await fetch(`api/notes/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title: editTitle, content: editContent }),
			});

			const result = await response.json();
			console.log(result);

			if (result.success) {
				setNotes(notes.map((note) => (note._id === id ? result.data : note)));
				setEditingId(null);
				setEditTitle("");
				setEditContent("");
				toast.success("Note updated successfully");
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error("Failed to update the note");
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

			<div className="space-y-4">
				<h2 className="text-xl font-semibold">Your notes ({notes.length})</h2>
				{notes.length === 0 ? (
					<p>No notes yet, create one</p>
				) : (
					notes.map((note: Note) => (
						<div className="bg-white rounded-lg p-6 shadow-md" key={note._id}>
							{editingId === note._id ? (
								<>
									<div>
										<div className="flex flex-col gap-1.5">
											<input
												className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus: outline-none text-gray-800"
												type="text" 	
												value={editTitle}
												onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
													setEditTitle(e.target.value)
												}
												placeholder="Note title"
												required
											/>

											<textarea
												rows={4}
												value={editContent}
												onChange={(e) => setEditContent(e.target.value)}
												className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus: outline-none text-gray-800"
												placeholder="Note content"
											/>
										</div>
										<div className="flex gap-2 mt-2">
											<button
												onClick={() => updateNote(note._id)}
												className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-1 rounded-md"
											>
												Save
											</button>
											<button
												onClick={() => cancelEdit()}
												className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white px-4 py-1 rounded-md"
											>
												Cancel
											</button>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="flex justify-between items-start mb-4">
										<h3 className="font-semibold text-lg text-gray-800">
											{note.title}
										</h3>
										<div className="flex gap-2">
											<button
												onClick={() => startEdit(note)}
												className="text-white bg-blue-500 hover:bg-blue-700 text-sm px-6 py-2 rounded-md"
											>
												Edit
											</button>
											<button
												onClick={() => deleteNote(note._id)}
												className="text-white bg-red-500 hover:bg-red-700 text-sm px-6 py-2 rounded-md"
											>
												Delete
											</button>
										</div>
									</div>
									<p className="text-gray-800 mb-2">{note.content}</p>
									<p className="text-gray-500">
										Created:{" "}
										{new Date(note.createdAt).toISOString().split("T")[0]}
									</p>
									{note.createdAt !== note.updatedAt && (
										<p className="text-gray-500">
											Updated:{" "}
											{new Date(note.updatedAt).toISOString().split("T")[0]}
										</p>
									)}
								</>
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default NotesClient;
