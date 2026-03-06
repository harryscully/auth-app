import { auth } from "@/auth"
import Signout from "@/components/ui/SignOutButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Profile() {
    const session = await auth()

    if (!session) return <p>Not logged in!</p>

    return (
        <div className="flex flex-col w-full min-h-svh p-4">
            <Signout />
            <div className="flex flex-col gap-4 grow items-center justify-center">
                <h1 className="text-5xl font-mono font-black">Profile</h1>
                <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button asChild>
                    <Link href="/settings">Settings</Link>
                </Button>
            </div>
        </div>
    )
}