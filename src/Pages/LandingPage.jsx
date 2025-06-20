import React from 'react'
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import Homeblog from "../components/Homeblog";
const LandingPage = () => {
  return (
    <>
      <HomeBanner/>
      <HomeAbout/>
      <HomeProducts/>
      <Homeblog/>
    </>
  )
}

export default LandingPage