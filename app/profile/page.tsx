import { auth } from "@/auth"

export default async function Settings() {
    const session = await auth()

    if (!session) return <p>Not logged in!</p>

    return (
        <>
            <h1 className="text-4xl font-bold">Profile</h1>
            <p>{session.user.name} {session.user.role}</p>
        </>
    )
}