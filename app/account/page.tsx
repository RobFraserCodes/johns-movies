'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const ClientProtectedPage = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/protected/client")
        }
    })

    return (
        <>
            <h1>Client Protected Page</h1>
            <p>Welcome, {session?.user?.name}</p>
        </>
    )
}

export default ClientProtectedPage