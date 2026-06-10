import { Toaster } from '@/components/ui/sonner'
import { requireUnAuth } from '@/lib/auth-guard'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
    await requireUnAuth()
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Toaster/>
            {children}
        </div>
    )
}

export default layout