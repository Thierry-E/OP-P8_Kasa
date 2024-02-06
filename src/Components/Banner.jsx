import PropTypes from 'prop-types'

const Banner = ({ showText, picture }) => {
  return (
    <div className='banner'>
      <img src={picture} alt='Photo représentant des falaises en bord de mer' />
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

// Définition des types de props avec PropTypes
Banner.propTypes = {
  showText: PropTypes.bool.isRequired,
  picture: PropTypes.string.isrequired,
}

export default Banner
