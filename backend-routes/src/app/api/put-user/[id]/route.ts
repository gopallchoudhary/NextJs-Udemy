import { NextRequest, NextResponse } from "next/server";
import { paramsType } from "../../hello/[id]/route";
import { users } from "../../hello/route";


export async function PUT(request: NextRequest, {params}: paramsType) {
    try {
        const {id} = await params;
        const userId = parseInt(id);

        const userIndex = users.findIndex(u => u.id === userId)

        if(userIndex == -1) {
            NextResponse.json({
                success: false,
                message: "User not found"
            })
        }
        const {name, email} = await request.json()
        if (!name || !email) {
            return NextResponse.json({
                success: true,
                error: "Name and email fields are requied"
            }, { status: 400 })
        }

        users[userIndex] = {
            id: userId,
            name,
            email
        }

        return NextResponse.json({
            success: true,
            message: "User successfully updated",
            updatedUser: users[userIndex]
        }, {status: 201})
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error
        }, {status: 500})
    }
    
}