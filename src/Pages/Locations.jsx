import { useParams } from 'react-router-dom'
import hebergements from '../datas/hebergements.json'
import Caroussel from '../components/Caroussel'

const Locations = () => {
  const { id } = useParams()
  const location = hebergements.find((location) => location.id === id)
  const allTags = location.tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ))

  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (rating) => {
    return [0, 1, 2, 3, 4].map((i) => (
      <i
        className='fas fa-star'
        style={{
          color: i < rating ? '#ff6060' : '#e3e3e3',
        }}
        key={i}
      ></i>
    ))
  }

  return (
    <div>
      <Caroussel slides={location.pictures} />
      <div className='logementContent'>
        <div className='infosLeft'>
          <h2>{location.title}</h2>
          <p>{location.location}</p>
          <div className='tags'>{allTags}</div>
        </div>
        <div className='infosRight'>
          <div className='personna'>
            <h3>{location.host.name}</h3>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className='stars'>{renderStars(location.rating)}</div>
        </div>
      </div>
    </div>
  )
}

export default Locations
