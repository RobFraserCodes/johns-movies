import React from 'react'
import { siteDetails } from '@/lib/meta'
import { Navigation } from '@/lib/navigation'
import Link from 'next/link'
import { ArrowUpCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">

            {/* Arrow back to top of the page */}
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <Link
                href="#MainContent">
            <span className="sr-only">Back to top</span>
            <ArrowUpCircleIcon className='w-16 h-16 text-black' />
            </Link>
            </div>

            {/* Logo and site description */}
            <div className="lg:flex justify-center">
            <div>
                <div className="flex justify-center">
                    <PlayCircleIcon className='w-8 h-8 mt-1' /><h1>{siteDetails.title}</h1>
                </div>
                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                    {siteDetails.description}
                </p>
            </div>
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-8">
                {Navigation.map((item, index) => (
                    <div key={index} className="mt-12 lg:mt-0 flex">
                        <h2 className="sr-only">Footer links</h2>
                        <Link href={item.path}>{item.name}</Link>
                    </div>
                ))}                    
            </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-200">
            <p className="mt-8 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
            </p>
        </div>
    </div>
    </footer>
  )
}
