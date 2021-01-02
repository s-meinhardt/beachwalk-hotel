import React from 'react'
import Hero from '../globals/Hero'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'
import homeImg from '../../images/homeBcg.jpeg'
import aboutImg from '../../images/aboutBcg.jpeg'

const Header = () => {
  return (
    <>
      <Hero img={homeImg} color='rgba(0,0,0,0.0)'>
        <Banner
          greeting='welcome to'
          title='beachwalk hotel'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae id, ratione fuga blanditiis laudantium.'
        >
          <PrimaryBtn t='1rem'>view details</PrimaryBtn>
          {/* <PrimaryBtn t='1rem' as='a' href='https://www.google.com'>
            click me
          </PrimaryBtn> */}
        </Banner>
      </Hero>
    </>
  )
}

export default Header
