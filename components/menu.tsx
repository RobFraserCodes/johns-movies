import React from 'react'
import { Navigation } from '@/lib/navigation'
import Link from 'next/link'
import { siteDetails } from '@/lib/meta'
import { Button } from './ui/button'
import { Bars3Icon, PlayCircleIcon } from '@heroicons/react/24/solid'

export default function Menu() {
  return (
    <header className="container">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 uppercase">
        <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
                <div className='flex'>
                    <span className="sr-only">Home</span>
                    <PlayCircleIcon className="h-8 w-8 text-gray-800" />
                    <h1 className='text-xl font-bold text-gray-800 sm:text-3xl uppercase'>{siteDetails.title}</h1>
                </div>
            </Link>
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
                <Link href="/login">
                <Button variant={'default'}>Login</Button>
                </Link>
                <Link href="/register">
                <Button variant={'ghost'}>Sign Up</Button>
                </Link>
            </div>

            <div className="block md:hidden">
                <Button>
                    <Bars3Icon className="h-6 w-6" />
                </Button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </header>
  )
}
