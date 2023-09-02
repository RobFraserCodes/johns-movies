import Cinema from '@/components/cinema'
import Footer from '@/components/footer'
import LatestTVShows from '@/components/latest-tv'
import Menu from '@/components/menu'
import RecentlyWatched from '@/components/recently-watched'
import SearchDB from '@/components/search-database'

export default function Home() {
  return (
    <main className=''>
      <Menu />
      <SearchDB />
      <RecentlyWatched />
      <Cinema />
      <LatestTVShows />
      <Footer />
    </main>
  )
}