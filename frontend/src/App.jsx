import { useState } from 'react'
import './App.css'
import UpNavbar from './components/homepage/UpNavbar/UpNavbar'
import { MainNavbar } from './components/homepage/MainNavbar/MainNavbar'
import HeroSection from './components/homepage/HeroSection/HeroSection'
import OurProd from './components/homepage/OurProd/OurProd'
import UpFooter from './components/homepage/UpFooter/UpFooter'
import LastFooter from './components/homepage/LastFooter/LastFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UpNavbar />
      <MainNavbar />
      <HeroSection/>
      <OurProd/>
      <UpFooter/>
      <LastFooter/>
    </>
  )
}

export default App
