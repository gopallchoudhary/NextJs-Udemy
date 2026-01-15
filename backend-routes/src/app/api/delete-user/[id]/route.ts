import { NextRequest, NextResponse } from "next/server";
import { paramsType } from "../../hello/[id]/route";
import { users } from "../../hello/route";


export async function DELETE(request: NextRequest, {params}: paramsType) {
    try {
        const {id} = await params;
        const userId = parseInt(id)
    
        const userIndex = users.findIndex(u => u.id === userId)
        
        // check if user index exists or not
        if(userIndex == -1) {
            return NextResponse.json({
                success: false,
                message: "User Not Found"
            })
        }
    
        const deletedUser = users[userIndex]
        users.splice(userIndex, 1)
    
        return NextResponse.json({
            success: true,
            message: "Successfully deleted",
            deletedUser
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })
    }
}