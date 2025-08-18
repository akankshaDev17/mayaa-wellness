import React from 'react';
import Includes from "../Components/Includes"
import Plan from '../Components/Plan';
import FAQ from '../Components/FAQ';
import Hero from "../Components/Hero";
import Pop from "../Components/Pop"
import Trusted from "../Components/Trusted";
import Review from "../Components/Review"
import ReviewOverview from '../Components/ReviewOverview';
import Working from "../Components/Working"

function Home() {
  return (
    <>
      <Hero />
      <Pop />
      <Trusted />
      <Includes />
      <Plan />
      <Review />
      <ReviewOverview />
      <Working />
      <FAQ />
    </>
  )
}

export default Home