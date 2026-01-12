import { NextRequest, NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST(request: NextRequest) {
    try {
        const { name, email } = await request.json()

        if (!name || !email) {
            return NextResponse.json({
                success: true,
                error: "Name and email fields are requied"
            }, { status: 400 })
        }

        const emailExists = users.find((user) => user.email === email)
        if (emailExists) {
            return NextResponse.json({
                success: false,
                error: "Email already exists"
            }, { status: 400 })
        }

        const newUser = {
            id: users.length + 1,
            name,
            email
        }

        users.push(newUser)

        return NextResponse.json({
            success: true,
            message: "User successfully created",
            data: users
        }, { status: 201 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to create new user"
        }, {status: 500})
    }
}