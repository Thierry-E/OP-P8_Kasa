import falaises from '../assets/Falaises.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <img
        src={falaises}
        alt='Photo représentant des falaises en bord de mer'
      />
      <span>Chez vous, partout et ailleurs</span>
    </div>
  )
}

export default Banner
