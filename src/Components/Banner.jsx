import falaises from '../assets/Falaises.jpg'
import PropTypes from 'prop-types'

const Banner = ({ showText }) => {
  return (
    <div className='banner'>
      <img
        src={falaises}
        alt='Photo représentant des falaises en bord de mer'
      />
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

// Définition des types de props avec PropTypes
Banner.propTypes = {
  showText: PropTypes.bool.isRequired,
}

export default Banner
