'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <section className="container py-16 h-screen" style={{ backgroundImage: `url(${backdropUrl})`, backgroundSize: 'cover' }}>
      <div className='flex flex-col lg:flex-row text-white justify-center'>
        <div className="m-8 w-1/2">
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
        <div className='w-1/2'>
          <Image 
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}` : 'path_to_default_image.jpg'} 
            alt={movieDetails.title} 
            className='rounded-md m-8'
            width={300}
            height={450}
          /> 
        </div>
      </div>
    </section>
  );
}