'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface nowPlaying {
    original_title: string;
    backdrop_path: string;
    id: number;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function Cinema() {
    const [movies, setMovies] = useState<nowPlaying[]>([]);
    const [randomThreeMovies, setRandomThreeMovies] = useState<nowPlaying[]>([]);

    useEffect(() => {
        fetch("/api/movies")
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results);
            const shuffledMovies = shuffleArray([...data.results]);
            setRandomThreeMovies(shuffledMovies.slice(0, 3));
        })
        .catch((error) => {
            console.error("Error fetching movies:", error);
        });
    }, []);
    
  return (
    <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <h2>Latest Movies</h2>
            {/* Movie previews */}
            <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {Array.isArray(randomThreeMovies) && randomThreeMovies.map((movie, index) => (
                <li key={index} className={index === 2 ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1" : ""}>
                <Link href={`/movie/${movie.id}`} className="relative block group">
                    <Image
                    src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                    alt={movie.original_title}
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                    width={500}
                    height={500}
                    />
                    <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/10"
                    aria-hidden="true"
                    />
                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                        {movie.original_title}
                    </h3>
                    {/* <span className="mt-2 inline-block bg-blue-500 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                        Now Showing
                    </span> */}
                    </div>
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </section>
  )
}