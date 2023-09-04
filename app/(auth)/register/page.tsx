'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteDetails } from '@/lib/meta';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const registrationSchema = z.object({
  username: z.string().min(1, 'A username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password should be at least 8 characters'),
  marketing_accept: z.boolean(),
});

function getRandomItemFromArray<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
}

export default function UserRegisterPage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const hasSelectedMovie = useRef(false);
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      marketing_accept: false,
    },
  });

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_TMDB_TOKEN;
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const auth = 'Bearer ' + token;

    const fetchMovies = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: auth,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0 && !hasSelectedMovie.current) {
      const randomMovie = getRandomItemFromArray(movies);
      setSelectedMovie(randomMovie);
      hasSelectedMovie.current = true;
    }
  }, [movies]);

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    console.log(values);
  }
    
  return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        {selectedMovie && (
            <div className="absolute inset-0 h-full w-full">
            <Image
                alt={selectedMovie.original_title}
                src={`https://image.tmdb.org/t/p/w780/${selectedMovie.backdrop_path}`}
                className="absolute inset-0 h-full w-full object-cover"
                width={870}
                height={1110}
                priority
                />
            <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/20"
                aria-hidden="true"
                />
            </div>
        )}

        <div className="hidden lg:relative lg:block lg:p-12">
            {/* Logo */}
            <Link className="block" href="/">
                <div className='flex'>
                    <span className="sr-only">Home</span>
                    <PlayCircleIcon className="h-8 w-8 text-gray-100" />
                    <h1 className='text-xl font-bold text-gray-100 sm:text-3xl uppercase'>{siteDetails.title}</h1>
                </div>
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to JMDB 🎥
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            Registering for an account allows you to save your favourite movies and TV shows.
            </p>

            {selectedMovie && <p className='leading-relaxed text-white/90 text-sm font-thin'>Movie image: {selectedMovie.original_title}</p> }
        </div>
        </section>

        {/* Mobile View */}
        <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
        <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
            <Link href="/"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white sm:h-20 sm:w-20">
                <span className="sr-only">Home</span>
                <PlayCircleIcon className="h-16 w-16 text-gray-900" />
            </Link>

            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to JMDB 🎥
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
                Register to save your favourite movies and TV shows.
            </p>
            </div>

            <div className='py-8'>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormProvider {...form}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field, formState }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        type="text"
                        id="username"
                        placeholder="Username"
                        {...field}
                      />
                      {formState.errors.username && (
                        <FormMessage />
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, formState }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="text"
                        id="password"
                        placeholder="Password"
                        {...field}
                      />
                      {formState.errors.username && (
                        <FormMessage />
                      )}
                    </FormItem>
                  )}
                />
                <Button className="mt-4"
                  type="submit">Login</Button>
              </FormProvider>
                </form>
              </Form>
            </div>

        </div>
        </main>
    </div>
    </section>
  )
}
