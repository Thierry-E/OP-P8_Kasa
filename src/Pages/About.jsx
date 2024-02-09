import Banner from '../components/Banner'
import Montagnes from '../assets/Montagnes.jpg'
import DropdownList from '../components/DropdownList'

const About = () => {
  return (
    <div>
      <Banner
        showText={false}
        picture={Montagnes}
        isOpaque={true}
        altText='Photo représentant des montagnes'
      />
      <DropdownList />
    </div>
  )
}

export default About
