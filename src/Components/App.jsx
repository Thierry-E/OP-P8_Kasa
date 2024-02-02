import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
