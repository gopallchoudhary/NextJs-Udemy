import { NextRequest, NextResponse } from "next/server";

export const users = [
    { id: 1, name: "Amit Sharma", email: "amit@example.com" },
    { id: 2, name: "Priya Verma", email: "priya@example.com" },
    { id: 3, name: "Rahul Singh", email: "rahul@example.com" }
]

export interface paramsType {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: paramsType) {
    const { id } = await params;
    const userId = parseInt(id);
    const user = users.find(u => u.id === userId)
    if (!user) {
        return NextResponse.json({
            success: true,
            message: "User not found"
        }, { status: 404 })
    }
    try {
        return NextResponse.json({
            success: true,
            data: user,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to fetch"

        }, { status: 500 })
    }
}