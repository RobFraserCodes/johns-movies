'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUturnLeftIcon, StarIcon, FilmIcon, BanknotesIcon, BookmarkIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface movieDetails {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  tagline: string;
  revenue: number;
  runtime: number;
  vote_average: number;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
  release_date: string;
}

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movieDetails, setMovieDetails] = useState<movieDetails | null>(null);

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

  function formatRevenue(number:number) {
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return (number / 1e3).toFixed(1) + 'K';
    if (number >= 1e6 && number < 1e9) return (number / 1e6).toFixed(1) + 'M';
    if (number >= 1e9 && number < 1e12) return (number / 1e9).toFixed(1) + 'B';
    return number;
  }

  const backdropUrl = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` : 'path_to_default_image.jpg';
  console.log(movieDetails);

  return (
    <section 
      className="relative flex justify-center items-center h-screen py-16" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backdropUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>

      {/* Containing Div */}
      <div className='flex flex-col lg:flex-row text-white justify-center items-center w-full max-w-screen-xl'>

        {/* Movie Details */}
        <div className='flex mx-auto'>
        <div className="m-4 md:m-8 w-1/2">
          <h1>{movieDetails.title}</h1>
          <span className='font-thin'>{movieDetails.tagline}</span>
          <div className="space-x-2 pt-8">
              {movieDetails.genres.map((genre) => (
                  <span key={genre.id} className="bg-gray-700 px-3 py-1 rounded-full text-white">
                      {genre.name}
                  </span>
              ))}
          </div>
          <p>{movieDetails.overview}</p>

          {/* Movie Information Card */}
            <Card className='mt-8'>
              <CardHeader>
                <CardTitle>
                  {/* Cart Title and Buttons */}
                  <div className='flex justify-between'>
                    Movie Details
                    <div className='flex space-x-2'>
                      <EyeIcon className='w-6 h-6 text-zinc-400 hover:bg-black' />
                      <StarIcon className='w-6 h-6 text-zinc-400' />
                      <BookmarkIcon className='w-6 h-6 text-zinc-400' />
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
              <div className='flex font-thin items-center space-x-8'>
                <div className='justify-center items-center'>
                  <BanknotesIcon className='w-8 h-8 text-zinc-400' />
                  ${formatRevenue(movieDetails.revenue)}
                </div>
                <div>
                  <FilmIcon className='w-8 h-8 text-zinc-400' />
                  {movieDetails.runtime} minutes
                </div>
                <div>
                  <StarIcon className='w-8 h-8 text-zinc-400' />
                  Rating: {movieDetails.vote_average}
                </div>
              </div>
              </CardContent>
              <CardFooter className='text-sm'>
                {movieDetails.release_date}
              </CardFooter>
            </Card>

        </div>

        {/* Movie Poster */}
        <div className='flex-col w-1/2 p-16'>
          <Image 
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w780${movieDetails.poster_path}` : 'path_to_default_image.jpg'} 
            alt={movieDetails.title} 
            className='rounded-lg'
            width={780}
            height={1200}
          />

          <div className='flex p-4'>
            <StarIcon className='w-6 h-6 text-zinc-400' />
            {movieDetails.vote_average}
          </div>
        </div>

        {/* Back Button (it is sitting on top of all the other elements which is not right!) */}
        {/* <div className="absolute inset-0">
          <Link href="/">
            <ArrowUturnLeftIcon className='w-8 h-8 text-white m-8' />    
          </Link>
        </div> */}

        </div>
      </div>
    </section>
  );  
  
}