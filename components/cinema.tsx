'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Cinema() {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        fetch("/api/movies")
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results);
            console.log(data.results);
        });
    }, []);
    
  return (
    <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            {/* Movie previews */}
            <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {/* Movie 1 */}
            {Array.isArray(movies) && movies.slice(0, 3).map((movie, index) => (
            <li key={index} className={index === 2 ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1" : ""}>
                <Link href="#" className="relative block group">
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.original_title}
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                    width={500}
                    height={500}
                />

                <div
                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                    <h3 className="text-xl font-medium text-white">{movie.original_title}</h3>

                    <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                    Now Showing
                    </span>
                </div>
                </Link>
            </li>


            ))}
            </ul>
        </div>
    </section>
  )
}
