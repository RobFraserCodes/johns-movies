'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

export default function SearchDB() {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const auth = `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`;

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(inputValue)}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth,
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data.results.slice(0, 5));  // Get the top 5 results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='justify-center w-full pt-8 container flex flex-col align-middle'>
      <form onSubmit={handleSearch} className="flex align-middle">
        <Input 
          type='search' 
          placeholder='Search the database'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MagnifyingGlassIcon className='w-6 h-6 m-1' />        <button type="submit" className="hidden">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="mt-2 bg-white border rounded">
          {searchResults.map((movie, index) => (
            <Link 
              href={`/movie/${movie.id}`}
              key={index}
              className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setInputValue(movie.title)}
            >
              {movie.poster_path ? (
                <Image 
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                  alt={movie.title}
                  className="mr-2 w-16"
                  width={92}
                  height={138}
                />
              ) : (
                <div className="mr-2 w-16 h-24 bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
              <div>
                {movie.title} 
                {movie.release_date ? ` (${new Date(movie.release_date).getFullYear()})` : ''}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
