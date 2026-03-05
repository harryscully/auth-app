import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth()

    if (!session) return <p>Not logged in!</p>

    if (session.user.role === "VIEWER") {
        redirect("/login")
    }
    
    return (
        <>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p>{session.user.name} {session.user.role}</p>
        </>
    )
}