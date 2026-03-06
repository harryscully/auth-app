import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ToggleTheme from "@/components/ToggleTheme"

export default async function Settings() {
    const session = await auth()

    if (session!.user.role === "VIEWER") {
        redirect("/unauthorised")
    }

    return (
        <>
            <h1 className="text-5xl font-mono font-black">Settings</h1>
            {session?.user.role === "ADMIN" && (
                <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>)}
            <Button asChild>
                <Link href="/profile">Profile</Link>
            </Button>
            <ToggleTheme />
        </>
    )
}