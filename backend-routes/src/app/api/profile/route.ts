import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const headersList = await headers()
    const authHeader = headersList.get('Authorization')

    // const requestHeaders = new Headers(request.headers)
    // const authHeader = requestHeaders.get('Authorization')
    console.log("Auth Header ", authHeader);


    // return new Response("<h1>Profile API Data</h1>", {
    //     headers: {
    //         "Content-Type": "text/html",
    //         "X-custom-header": "Next.Js tutorial"
    //     }
    // })

    const response = NextResponse.json("<h1>Hello with headers</h1>")
    response.headers.set("Content-Type", "text/html")
    response.headers.set("X-Powered-By-Gopal", "NextJs 16")
    response.headers.set("Cache-control", "no control")

    return response
}