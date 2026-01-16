import mongoose, { Document, Schema } from "mongoose";

interface INote  {
    title: string,
    content: string,
}

interface INoteDocument extends INote, Document {
    createdAt: Date,
    updatedAt: Date
}

const NoteSchema: Schema<INoteDocument> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },

    content: {
        type: String,
        required: true,
        maxLength: 2000
    }
}, {timestamps: true} )

export const Note = mongoose.models.Note || mongoose.model<INoteDocument>("Note", NoteSchema)