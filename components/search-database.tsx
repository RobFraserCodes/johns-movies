import React from 'react'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function SearchDB() {
  return (
    <div className='justify-center w-full py-4 container'>
        <Button
            variant={'ghost'}
            className='w-full'>
            <MagnifyingGlassIcon/>
            <p className='text-gray-500 px-8'>Search Database</p>
        </Button>
    </div>
  )
}