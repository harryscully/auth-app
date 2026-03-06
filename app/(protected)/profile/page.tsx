import { auth } from "@/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Profile() {
    const session = await auth()

    return (
        <>
            <h1 className="text-5xl font-mono font-black">Profile</h1>
            {session?.user.role === "ADMIN" && (
                <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>)}
            {session?.user.role !== "VIEWER" && (
                <Button asChild>
                    <Link href="/settings">Settings</Link>
                </Button>)}
        </>
    )
}