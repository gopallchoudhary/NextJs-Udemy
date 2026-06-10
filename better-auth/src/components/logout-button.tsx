"use client"
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"
import { toast } from "sonner"

const LogoutButton = () => {
    const router = useRouter()
    const { data } = authClient.useSession()
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully");
                    router.push("/login");
                },
                onError: (error) => {
                    toast.error("Logout failed");
                }
            }
        })

        console.log(data)
    }
    return (
        <Button variant={'destructive'} onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutButton