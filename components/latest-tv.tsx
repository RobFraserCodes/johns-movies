'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LatestTVShows() {
    const [tvshows, setTVShows] = useState([]);

    useEffect(() => {
        fetch("/api/tvshows")
        .then((response) => response.json())
        .then((data) => {
            setTVShows(data.results);
            console.log(data.results);
        });
    }, []);


  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Popular TV
            </h2>
            </header>

            <div className="mt-8 flex items-center justify-between">
            <div className="flex rounded border border-gray-100">
                <button
                className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                </svg>
                </button>

                <button
                className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
                </button>
            </div>

            <div>
                <label htmlFor="SortBy" className="sr-only">SortBy</label>

                <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                </select>
            </div>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            { Array.isArray(tvshows) && tvshows.slice(0, 4).map((tvshow, index) => (
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
                        <p className="text-sm text-white line-clamp-3">
                        {tvshow.overview}
                        </p>
                    </div>
                    </div>
                </div>
                </a>
            ))}

            </ul>
        </div>
    </section>
  )
}
