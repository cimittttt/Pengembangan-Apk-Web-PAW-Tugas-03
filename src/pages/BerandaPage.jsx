import HeroBanner from '../components/HeroBanner'
import MovieSection from '../components/MovieSection'

const filmPopuler = [
  { id: 1, judul: 'Squid Game S3',                  genre: 'Thriller',    rating: '9.0', tahun: '2026' },
  { id: 2, judul: 'When Life Gives You Tangerines', genre: 'Drama Korea', rating: '8.8', tahun: '2025' },
  { id: 3, judul: 'True Beauty',                    genre: 'Drama Korea', rating: '8.5', tahun: '2020' },
  { id: 4, judul: 'Exhuma',                         genre: 'Horor',       rating: '8.3', tahun: '2024' },
  { id: 5, judul: 'Mission: Impossible 8',          genre: 'Aksi',        rating: '8.1', tahun: '2025' },
  { id: 6, judul: 'Penthouse',                      genre: 'Drama Korea', rating: '7.9', tahun: '2020' },
]

function BerandaPage() {
  return (
    <>
      <HeroBanner />
      <MovieSection judul="Film Populer" daftarFilm={filmPopuler} />
    </>
  )
}

export default BerandaPage
