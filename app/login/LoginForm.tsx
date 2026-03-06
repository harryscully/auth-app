"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginForm() {

    const [error, setError] = useState<string | null>(null)

    const credentialsAction = async (formData: FormData) => {
        const result = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        })

        if (result?.error) {
            setError("Invalid email or password")
        } else {
            window.location.href = "/profile"
        }
    }

    return (
        <div className="w-full max-w-sm">
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email and password below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={credentialsAction}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                />
                            </Field>
                            {error && <p className="text-sm text-destructive">{error}</p>}
                            <Field>
                                <Button type="submit">Sign in</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>)
}