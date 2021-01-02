import styled from 'styled-components'
import { setColor, setFont, setRem, setLetterSpacing, setBorder, setTransition } from '../../styles'

export const PrimaryBtn = styled.button`
  display: inline-block;
  background-color: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  font-family: ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor, width: '3px' })};
  ${setLetterSpacing()};
  ${setTransition({ time: '0.5s' })};
  text-decoration: none;
  ${props => `margin:  ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${setColor.primaryColor};
    box-shadow: 0 0 10px ${setColor.darkGrey};
    transform: scale(1.03);
  }

  &:focus {
    outline: 0;
  }
`

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};

  &:hover {
    box-shadow: 0 0 10px ${setColor.darkGrey};
    transform: scale(1.03);
  }
`
