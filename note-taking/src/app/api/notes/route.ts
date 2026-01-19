import dbConnect from "@/lib/db";
import { Note } from "@/models/NoteModel";
import { NextRequest, NextResponse } from "next/server";

//. get notes 
export async function GET() {
    try {
        await dbConnect()
        const notes = await Note.find({}).sort({ createdAt: -1 })

        return NextResponse.json({
            success: true,
            data: notes
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "An unknown error occured"
        }, { status: 400 })
    }
}

//. create note 
export async function POST(request: NextRequest) {
    try {
        await dbConnect()
        const body = await request.json()

        const note = await Note.create(body)

        return NextResponse.json({
            success: true,
            message: "Note created successfully",
            data: note
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "An unknown error occured"
        }, { status: 400 })
    }
}