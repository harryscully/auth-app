"use client"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Signout() {
    return (
        <Button className="self-end" onClick={() => signOut()}>Sign out</Button>
    )
}
