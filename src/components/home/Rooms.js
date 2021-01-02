import React, { useState } from 'react'
import styled from 'styled-components'
import { setColor, media, setRem } from '../../styles'
import Section from '../globals/Section'
import Title from '../globals/Title'
import Room from './Room'
import data from './rooms-data'

const Rooms = () => {
  const [rooms, setRooms] = useState(data)
  return (
    <Section color={setColor.lightGrey}>
      <Title title='our rooms' center />
      <RoomsCenter>
        {rooms.map(room => (
          <Room key={room.id} {...room} />
        ))}
      </RoomsCenter>
    </Section>
  )
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    max-width: 1170px;
  `}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: ${setRem(60)};

  /* ${media.tablet` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${setRem(60)};
  `}

  ${media.large` 
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${setRem(32)};
  `} */
`

export default Rooms
