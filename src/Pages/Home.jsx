import React from 'react';
import Includes from "../Components/Includes"
import Plan from '../Components/Plan';
import FAQ from '../Components/FAQ';
import Hero from "../Components/Hero";
import Pop from "../Components/Pop"
import Trusted from "../Components/Trusted";
import Review from "../Components/Review"
import ReviewOverview from '../Components/ReviewOverview';
import Working from "../Components/Working";


function Home() {
  return (
    <>
     <section className="relative">
      {/* Always render the Hero first */}
      <Hero />

      {/* Desktop overlap container (hidden on mobile) */}
      <div className="relative hidden md:block">
        {/* Pop pinned at bottom of Hero, centered and overlapping */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-0 -translate-y-1/2
            z-20
          "
        >
          <Pop />
        </div>

        {/* Trusted directly under Hero for desktop */}
        <Trusted />
      </div>

      {/* Mobile stacked flow (shown only on mobile) */}
      <div className="md:hidden">
        {/* Pop comes after Hero, no overlap */}
        <div className="px-4 mt-4">
          <Pop />
        </div>

        {/* Trusted below Pop */}
        <div className="mt-4">
          <Trusted />
        </div>
      </div>
    </section>
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