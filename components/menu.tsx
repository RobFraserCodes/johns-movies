import React from 'react'
import { Navigation } from '@/lib/navigation'
import Link from 'next/link'
import { siteDetails } from '@/lib/meta'
import { Button } from './ui/button'

export default function Menu() {
  return (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="/">
            <span className="sr-only">Home</span>
            {siteDetails.title}
            </a>
        </div>

        <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                {Navigation.map((item) => (
                    <li key={item.name}>
                        <Link href={item.path}
                            className="font-medium text-gray-900">{item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </nav>

            <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
                <Button>Login</Button>
                <div className="hidden sm:flex">
                <Button variant="outline">Contact</Button>
                </div>
            </div>

            <div className="block md:hidden">
                <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </header>
  )
}
