import styled from 'styled-components'
import { setFlex, setBackground } from '../../styles.js'

const Hero = styled.header`
  min-height: 100vh;
  ${props => setBackground({ img: props.img, color: props.color })};
  ${setFlex({ x: 'center', y: 'center' })}
`

export default Hero
