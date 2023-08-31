'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movieDetails, setMovieDetails] = useState(null);

  React.useEffect(() => {
    fetch(`/api/movies/details?id=${params.id}`)
    .then((response) => response.json())
    .then((data) => {
        setMovieDetails(data);
    });
}, [params.id]);


  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <Image 
        src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}` : 'path_to_default_image.jpg'} alt={movieDetails.title} 
        alt={movieDetails.title}
        width={300}
        height={450}
      />
      <p>{movieDetails.overview}</p>
      {/* Add other movie details as desired */}
    </div>
  );
}