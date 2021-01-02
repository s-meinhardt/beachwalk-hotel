import React from 'react'
import styled from 'styled-components'
import { setRem, setFont, setLetterSpacing } from '../../styles'

const Title = ({ title, center, className }) => {
  return <p className={className}>{title}</p>
}

export default styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  font-family: ${setFont.slanted};
  text-align: ${props => (props.center ? 'center' : 'left')};
`
