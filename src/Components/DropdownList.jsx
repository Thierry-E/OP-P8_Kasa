import PropTypes from 'prop-types' // Importez PropTypes
import Dropdown from './Dropdown'

const DropdownList = ({ services }) => {
  return (
    <div>
      {services.map((service) => (
        <Dropdown key={service.id} title={service.title} text={service.text} />
      ))}
    </div>
  )
}

// Définition des types de props
DropdownList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      // Permet à l'id d'être soit un nombre soit une chaîne de caractères.
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  // services est un tableau requis
}

export default DropdownList
