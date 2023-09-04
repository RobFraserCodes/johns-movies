import React from 'react'
import { Squares2X2Icon, Bars4Icon } from '@heroicons/react/24/outline'
import Sort from './common/sort'

export default function RecentlyWatched() {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                John&apos;s Movie Shelf
            </h2>
            </header>

            <Sort />

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* { Array.isArray(tvshows) && tvshows.slice(0, 4).map((tvshow, index) => (
            <a key={index} href="#" className="group relative block bg-black">
                <Image
                    alt="Developer"
                    width={300}
                    height={500}
                    src={`https://image.tmdb.org/t/p/w500/${tvshow.backdrop_path}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                        {tvshow.vote_average}
                    </p>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                        {tvshow.name}
                    </p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                        {tvshow.overview}
                        </p>
                    </div>
                    </div>
                </div>
                </a>
            ))} */}

            </ul>
        </div>
    </section>
  )
}
