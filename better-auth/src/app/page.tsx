
import LogoutButton from "@/components/logout-button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";


async function Home() {

  const session = await requireAuth()
  const { user } = session
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 bg-slate-400">
      <Image src={user.image!} alt="User" width={50} height={50} className="rounded-full" />
      <h1 className="text-xl font-bold">{user.name}</h1>
      <h1 className="text-xl font-bold">{user.emailVerified ? user.email : "Not Verified"}</h1>
      <LogoutButton />
    </div>
  );
}

export default Home
