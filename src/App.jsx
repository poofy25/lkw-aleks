
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Certifications from './components/Certifications/Certifications'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { useEffect  ,useState } from 'react'
import useWindowSize from './hooks/WindowResize'

function App() {

  const size = useWindowSize()
  const [width , setWidth] = useState(window.screen.width)
  const [language , setLanguage] = useState('RO')

  useEffect(()=>{
    console.log(size)
    setWidth(size.width)
  },[size])



  return (
    <>
    <NavBar width={width} language={language} setLanguage={setLanguage}/>
    <Hero language={language}/>
    <About language={language}/>
    <Stats language={language}/>
    <Services language={language}/>
    <WhyUs language={language}/>
    <Certifications language={language}/>
    <Testimonials language={language}/>
    <FAQ language={language}/>
    <Contact language={language}/>
    <Footer language={language}/>
    </>
  )
}

export default App
