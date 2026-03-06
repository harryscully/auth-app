import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoginForm from "./LoginForm"

export default function Login() {
    return (

        <div className="flex flex-col w-full min-h-svh p-4">
            <Button className="self-end" asChild>
                <Link href="/">Home</Link>
            </Button>
            <div className="flex grow items-center justify-center">
                <LoginForm />
            </div>
        </div>

    )
}