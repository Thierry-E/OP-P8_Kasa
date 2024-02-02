import falaises from '../assets/Falaises.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <img
        src={falaises}
        alt='Photo représentant des falaises en bord de mer'
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
