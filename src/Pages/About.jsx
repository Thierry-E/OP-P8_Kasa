import Banner from '../components/Banner'
import Montagnes from '../assets/Montagnes.jpg'

const About = () => {
  return (
    <div>
      <Banner
        showText={false}
        picture={Montagnes}
        isOpaque={true}
        altText='Photo représentant des montagnes'
      />
    </div>
  )
}

export default About
