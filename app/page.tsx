import Cinema from '@/components/cinema'
import LatestTVShows from '@/components/latest-tv'
import RecentlyWatched from '@/components/recently-watched'
import SearchDB from '@/components/search-database'

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto'>
      <SearchDB />
      <RecentlyWatched />
      <Cinema />
      <LatestTVShows />
    </main>
  )
}