import { auth } from "@/auth"
import Signout from "../../components/ui/SignOutButton"

export default async function Profile() {
    const session = await auth()

    if (!session) return <p>Not logged in!</p>

    return (
        <div className="flex flex-col w-full min-h-svh p-4">
            <Signout />
            <div className="flex grow items-center justify-center">
                <h1 className="text-5xl font-mono font-black">Profile</h1>
            </div>
        </div>
    )
}