import mongoose, { Schema } from "mongoose";

export type ContactStauts = 'new' | 'read' | 'replied';

export interface IContact {
    name: string,
    email: string,
    subject: string,
    message: string,
    status: ContactStauts
}

export interface IContactDocument extends IContact, Document {
    createdAt: Date,
    updatedAt: Date
}


const ContactSchema: Schema<IContactDocument> = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [100, "Name cannot exceed than 100 characters"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"]
    },

    subject: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [200, "Name cannot exceed than 100 characters"],
        trim: true
    },

    message: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [1000, "Name cannot exceed 1000 characters"],
        trim: true
    },

    status: {
        type: String,
        enum: ['new', 'read', 'replied'],
        default: 'new'
    }
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model<IContactDocument>("Contact", ContactSchema)

export default Contact