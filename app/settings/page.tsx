import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Signout from "../../components/ui/SignOutButton"

export default async function Settings() {
    const session = await auth()

    if (!session) return <p>Not logged in!</p>

    if (session.user.role === "VIEWER") {
        redirect("/unauthorised")
    }

    return (
        <div className="flex flex-col w-full min-h-svh p-4">
            <Signout />
            <div className="flex flex-col gap-4 grow items-center justify-center">
                <h1 className="text-5xl font-mono font-black">Settings</h1>
                <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button asChild>
                    <Link href="/profile">Profile</Link>
                </Button>
            </div>
        </div>
    )
}