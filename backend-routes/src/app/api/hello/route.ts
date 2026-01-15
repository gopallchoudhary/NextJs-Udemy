import { NextRequest, NextResponse } from "next/server";

export const users = [
    { id: 1, name: "Amit Sharma", email: "amit@example.com", age: 10 },
    { id: 2, name: "Priya Verma", email: "priya@example.com", age: 18 },
    { id: 3, name: "Rahul Singh", email: "rahul@example.com", age: 25 }
]

export async function GET(request: NextRequest) {
    
    try {
        const searchParams = request.nextUrl.searchParams
        const name = searchParams.get('name')
        const age = searchParams.get('age')

        let filteredUsers = users

        if(age) {
            filteredUsers = filteredUsers.filter((user) => user.age === Number(age))
        }

        if(name) {
            filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
        }
        return NextResponse.json({
            success: true,
            data: filteredUsers,
            total: filteredUsers.length
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to fetch"

        }, { status: 500 })
    }
}