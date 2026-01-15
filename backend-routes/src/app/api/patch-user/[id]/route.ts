import { NextRequest, NextResponse } from "next/server";
import { paramsType } from "../../hello/[id]/route";
import { users } from "../../hello/route";


export async function PATCH(request: NextRequest, {params}: paramsType) {
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
        const body = await request.json()
        

        users[userIndex] = {
            ...users[userIndex],
            ...body,
            id: userId
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