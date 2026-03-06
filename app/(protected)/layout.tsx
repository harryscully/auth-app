import Signout from "@/components/SignOutButton"

export default async function ProtectedLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col w-full min-h-svh p-4">
            <Signout />
            <div className="flex flex-col gap-4 grow items-center justify-center">
                {children}
            </div>
        </div>
    )
}