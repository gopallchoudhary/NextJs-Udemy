import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
    const currentTime = new Date()

    const { format } = await params;

    const data = {
        timestamp: currentTime.toISOString(),
        readable: currentTime.toLocaleTimeString(),
        unix: currentTime.getTime(),
        message: "Timer API called successfully",
        requestId: Math.random().toString(36).substring(2, 15),
        format: format,
        ServerTime: Date.now(),
        time: ""
    }

    // add different responses based on time
    switch (format) {
        case 'utc':
            data.time = currentTime.toUTCString()
            break

        case 'iso':
            data.time = currentTime.toISOString()
            break

        case 'local':
            data.time = currentTime.toLocaleTimeString()
            break

        default:
            data.time = currentTime.toTimeString()
    }

    return NextResponse.json(data)
}