import Cinema from '@/components/cinema'
import Footer from '@/components/footer'
import LatestTVShows from '@/components/latest-tv'
import Menu from '@/components/menu'
import SearchDB from '@/components/search-database'
import WatchedShelf from '@/components/watched-shelf'
import WishListShelf from '@/components/wishlist-shelf'

export default function Home() {
  return (
    <main className='space-y-8'>
      <Menu />
      <SearchDB />
      {/* 
      Only Appear on UI when user is logged in
      <WatchedShelf />
      <WishListShelf /> 
      */}
      <Cinema />
      <LatestTVShows />
      <Footer />
    </main>
  )
}