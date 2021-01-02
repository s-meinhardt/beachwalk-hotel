import React from 'react'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles'
import { PrimaryBtn } from '../globals/Buttons'
import styled from 'styled-components'

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className='about-img'>
          <img src={aboutImg} alt='about us' />
        </div>
        <div className='about-info'>
          <Title title='about us' center />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cupiditate voluptatum. Eligendi aliquid
            aperiam beatae officiis iure saepe illo alias repellendus magnam consectetur nostrum incidunt, aspernatur
            fugit, ducimus dolore accusantium!
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  .about-img,
  .about-info {
    padding: ${setRem(20)} 0;
    margin: 0 auto;
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })};
      object-fit: cover;
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }

  ${media.large`
  max-width: 1170px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  column-gap:${setRem(60)};
  .about-img,
  .about-info {
    padding: 0;
    align-self: center;
  }
 
  .about-info {
    p {
      width: 80%;
    }
  }
  `}
`

export default About
