import dbConnect from "@/lib/db";
import { Note } from "@/models/NoteModel";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
    params: {
        id: string
    }
}

//. delete note 
export async function DELETE(request: NextRequest, { params }: IParams) {
    try {
        const { id } = await params;
        await dbConnect()

        // note to delete
        const note = await Note.findByIdAndDelete(id)



        if (!note) {
            return NextResponse.json({
                success: false,
                error: "Note not found"
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            data: {}
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "Something went wrong"
        })
    }
}

//. update note 
export async function PUT(request: NextRequest, { params }: IParams) {
    try {
        const { id } = await params;
        const body = await request.json()
        console.log(body);
        

        const note = await Note.findByIdAndUpdate(
            id,
            {...body},
            { new: true, runValidators: true }
        )

        console.log(note);
        
        if (!note) {
            return NextResponse.json(
                {success: false, error: "Note not fount"},
                {status: 404}
            )
        }

        return NextResponse.json(
            {success: true, data: note}
        )
    } catch (error) {
        return NextResponse.json(
            {success: false, errorrrr: error instanceof Error ? error.message : "something went wrong"}
        )
    }
}