import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Dashboard() {
    const session = await auth()

    if (session!.user.role !== "ADMIN") {
        redirect("/unauthorised")
    }

    return (
        <>
            <h1 className="text-5xl font-mono font-black">Dashboard</h1>
            <Button asChild>
                <Link href="/settings">Settings</Link>
            </Button>
            <Button asChild>
                <Link href="/profile">Profile</Link>
            </Button>
        </>
    )
}