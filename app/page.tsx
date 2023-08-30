import Cinema from '@/components/cinema'
import LatestTVShows from '@/components/latest-tv'
import RecentlyWatched from '@/components/recently-watched'
import SearchDB from '@/components/search-database'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto'>
      <RecentlyWatched />
      <Cinema />
      <LatestTVShows />
    </main>
  )
}