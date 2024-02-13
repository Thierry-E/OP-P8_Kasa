import { useParams } from 'react-router-dom'
import hebergements from '../datas/hebergements.json'
import Caroussel from '../components/Caroussel'

const Locations = () => {
  const { id } = useParams()
  const location = hebergements.find((location) => location.id === id)

  return (
    <div>
      <Caroussel slides={location.pictures} />
    </div>
  )
}

export default Locations
