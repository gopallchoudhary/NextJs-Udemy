import { NextRequest, NextResponse } from "next/server";

const users = [
    { id: 1, name: "Amit Sharma", email: "amit@example.com" },
    { id: 2, name: "Priya Verma", email: "priya@example.com" },
    { id: 3, name: "Rahul Singh", email: "rahul@example.com" }
]

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({
            success: true,
            data: users,
            total: users.length
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to fetch"

        }, {status: 500})
    }
}