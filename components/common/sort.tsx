import React from 'react'
import { Squares2X2Icon, Bars4Icon } from '@heroicons/react/24/outline'

export default function Sort() {
  return (
    <div className="mt-8 flex items-center justify-between">
    <div className="flex rounded border border-gray-100">
        <button
        className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
        >
        <Squares2X2Icon className="h-6 w-6" />
        </button>

        <button
        className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
        >
        <Bars4Icon className="h-6 w-6" />
        </button>
    </div>

    <div>
        <label htmlFor="SortBy" className="sr-only">SortBy</label>

        <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
        <option>Sort By</option>
        <option value="Title, DESC">Title, DESC</option>
        <option value="Title, ASC">Title, ASC</option>
        </select>
    </div>
    </div>
  )
}
