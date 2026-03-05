"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {

    const [error, setError] = useState<string | null>(null)

    const credentialsAction = async (formData: FormData) => {
        const result = await signIn("credentials",{
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        })

        if (result?.error) {
            setError("Invalid email or password")
        } else {
            window.location.href = "/dashboard"
        }
    }

    return (
        <>
            <h1 className="text-4xl mb-8">Login</h1>
            {error && <p className="text-red-600">{error}</p>}
            <form
                action={credentialsAction}
                className="flex flex-col items-start gap-2"
            >
                <label>
                    Email
                    <input className="border max-w-50" name="email" type="email" />
                </label>
                

                <label>
                    Password
                    <input className="border max-w-50" name="password" type="password" />
                </label>

                <button type="submit" className="border px-2 py-1 cursor-pointer">Sign In</button>
            </form>
        </>
    )
}