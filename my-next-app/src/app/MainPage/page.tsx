import About from '@/Component/About'
import CallToAction from '@/Component/CallToAction'
import Footer from '@/Component/Footer'
import JourneyPart from '@/Component/JournyPart'
import Navbar from '@/Component/Navbar'
import Reveal from '@/Component/Reveal'
import Story from '@/Component/Story'
import TrustPart from '@/Component/TrustPart'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Story />
      </Reveal>

      <Reveal>
        <TrustPart />
      </Reveal>

      <Reveal>
        <JourneyPart />
      </Reveal>

      <Reveal>
        <CallToAction />
      </Reveal>

      <Reveal y={0}>
        <Footer />
      </Reveal>
    </div>
  )
}

export default page