'use client'

// Path: app/movie/%5Bid%5D/page.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';

interface movie {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movieDetails, setMovieDetails] = useState<movie | null>(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const token = process.env.NEXT_PUBLIC_TMDB_TOKEN;
    const auth = `Bearer ${token}`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth,
      },
    };

    if (params.id) {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setMovieDetails(json);
        })
        .catch((err) => console.error('error:' + err));
    }
  }, [params.id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const backdropUrl = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` : 'path_to_default_image.jpg';

  return (
    <section 
      className="relative flex justify-center items-center h-screen py-16" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backdropUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className="absolute inset-0 ">
          <Link href="/">
            <ArrowUturnLeftIcon className='w-8 h-8 text-white m-8 lg:ml-40' />    
          </Link>
        </div>

      <div className='flex flex-col lg:flex-row text-white justify-center items-center w-full max-w-screen-xl'>
        <div className="m-4 md:m-8 w-1/2">
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
        <div className='flex justify-center items-center m-4 lg:m-8 w-1/2 p-8'>
          <Image 
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w780${movieDetails.poster_path}` : 'path_to_default_image.jpg'} 
            alt={movieDetails.title} 
            className='rounded-md'
            width={300}
            height={450}
          /> 
        </div>
      </div>
    </section>
  );  
  
}