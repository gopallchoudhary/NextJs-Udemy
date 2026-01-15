import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // read cookie from the request
    // const theme = request.cookies.get("theme")

    const cookieStore = await cookies()
    // const cookieResult = cookieStore.get("resultsPerPage")
    // console.log("Cookies ", cookieResult);

    // cookieStore.set("userToken", "jflsjdfojsj192u39u2")


    // return new Response("Setting cookies", {
    //     headers: {
    //         // "Set-Cookie": "theme=light"
    //         "Set-Cookie": "resultsPerPage=20"
    //     }
    // })




    cookieStore.delete("userToken")

    return NextResponse.json({ message: "Cookie set successfully" })
}