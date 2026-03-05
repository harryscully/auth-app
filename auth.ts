import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            email: {
                type: "email",
                label: "Email",
                placeholder: "john@acme.com"
            },
            password: {
                type: "password",
                label: "Password"
            }
        },
        authorize: async (credentials) => {
            if (!credentials?.email || !credentials?.password) return null

            let user = null

            user = await prisma.user.findUnique({
                where: { email: credentials.email as string}
            })

            if (!user) return null

            const match = await bcrypt.compare(credentials.password as string, user.password)

            if (!match) return null

            return {
                ...user,
                id: user.id.toString()
            }
        }
    })
  ],
})

