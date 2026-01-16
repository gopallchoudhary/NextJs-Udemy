import NotesClient from "@/components/NotesClient";
import dbConnect from "@/lib/db";
import { Note } from "@/models/NoteModel";

async function getNotes() {
	dbConnect();
	const notes = await Note.find({}).sort({ createdAt: -1 });

	return notes.map((note) => ({
		...note,
		_id: note._id.toString(),
	}));
}

export default async function Home() {
	const notes = await getNotes();
	console.log(notes);

	return (
		<div className="container p-4 mx-auto">
			<h1 className="text-3xl font-bold mb-6">Notes App</h1>
			<NotesClient />
		</div>
	);
}
