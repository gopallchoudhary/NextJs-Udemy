import { NextRequest, NextResponse } from "next/server";

export const users = [
    { id: 1, name: "Amit Sharma", email: "amit@example.com", age: 10 },
    { id: 2, name: "Priya Verma", email: "priya@example.com", age: 18 },
    { id: 3, name: "Rahul Singh", email: "rahul@example.com", age: 25 }
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