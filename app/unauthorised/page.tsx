import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Unauthorised() {
    return (
        <div className="flex flex-col w-full min-h-svh items-center justify-center">
            <h1 className="text-4xl font-bold">Access Denied</h1>
            <p className="text-muted-foreground my-4">You don't have permission to view this page.</p>
            <Button variant="outline" asChild>
                <Link href="/profile">Go back to profile</Link>
            </Button>
        </div>
    )
}