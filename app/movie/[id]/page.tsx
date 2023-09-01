'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { movie } from '@/type';

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movieDetails, setMovieDetails] = useState<movie>(null);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const token = process.env.NEXT_PUBLIC_TMDB_TOKEN;
  const auth = `Bearer ${token}`;
    
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  useEffect(() => {
    if (params.id) {
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setMovieDetails(json);
        })
        .catch(err => console.error('error:' + err));
    }
  }, [params.id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className='container py-16'>
      <div className='flex'>
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
        <div>
          <Image 
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}` : 'path_to_default_image.jpg'} 
            alt={movieDetails.title} 
            className='rounded-md'
            width={300}
            height={450}
          /> 
        </div>

      </div>

      {/* Add other movie details as desired */}
    </section>
  );
}