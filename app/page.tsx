import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-svh p-4">
      <Button className="self-end" asChild>
        <Link href="/login">Login</Link>
      </Button>
      <div className="flex grow items-center justify-center">
        <h1 className="text-5xl font-mono font-black">_auth-app</h1>
      </div>
    </div>
  )
}
