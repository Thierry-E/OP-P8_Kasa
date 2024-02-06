import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import falaises from '../assets/Falaises.jpg'

const Home = () => {
  return (
    <div>
      <Banner showText={true} picture={falaises} />
      <Gallery />
    </div>
  )
}

export default Home
