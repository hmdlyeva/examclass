import React from 'react'
import UpNavbar from '../.././components/homepage/UpNavbar/UpNavbar'
import { MainNavbar } from '../../components/homepage/MainNavbar/MainNavbar'
import HeroSection from '../../components/homepage/HeroSection/HeroSection'
import OurProd from '../../components/homepage/OurProd/OurProd'
import UpFooter from '../../components/homepage/UpFooter/UpFooter'
import LastFooter from '../../components/homepage/LastFooter/LastFooter'
import AboutUs from '../../components/homepage/aboutUs/AboutUs'
import LeaderShip from '../../components/homepage/leadership/LeaderShip'
import OfferService from '../../components/homepage/offer/OfferService'
const Home = () => {
    return (
        <>
            <UpNavbar />
            <MainNavbar />
            <HeroSection />
            <OurProd />
            <AboutUs />
            <LeaderShip />
            <OfferService />
            <UpFooter />
            <LastFooter />

        </>
    )
}

export default Home