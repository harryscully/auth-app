import Link from "next/link"

export default function Unauthorised() {
    return (
        <>
            <h1 className="text-4xl font-bold">Access Denied</h1>
            <p>You don't have permission to view this page.</p>
            <Link href="/profile">Go to profile</Link>
        </>
    )
}