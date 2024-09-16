import './App.css'
import './Components/Gradient.css'
import './ScrollAnimation.css'
import TCard from "./Components/Testimonials"
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Teams from './Components/Team'
import Form from './Components/Form'
import Work from './Components/Work'

import {Routes , Route} from 'react-router-dom'
import ScrollAnime from './components/ScrollAnime'


function App() {


  return (
    < >
    <ScrollAnime/>
    <NavBar/>
     <Routes>

     <Route path='/' element={<Hero/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Skills' element={<Skills/>} />
     <Route path='/Teams' element={<Teams/>} />
     <Route path='/Projects' element={<Work/>} />
     <Route path='/Testimonials' element={<TCard/>} />
     <Route path='/Contact' element={<Form/>} />

     </Routes>
     <Footer/>
    </>
  )
 
}

export default App
