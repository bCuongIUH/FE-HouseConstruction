import React from "react"
import Header from "../components/home-page/Header"
import Hero from "../components/home-page/Hero"
import Services from "../components/home-page/Services"
import ProjectsAndCalculator from "../components/home-page/ProductSection"
import FeaturedProducts from "../components/home-page/FeaturedProducts"
import NewsAndFooter from "../components/home-page/Footer"


const HomePageT = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ProjectsAndCalculator />
      <FeaturedProducts />
      <NewsAndFooter />
     
    </div>
  )
}

export default HomePageT

