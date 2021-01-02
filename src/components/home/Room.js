import React from 'react'
import styled from 'styled-components'
import { SmallBtn } from '../globals/Buttons'
import { setRem, setLetterSpacing, setTransition, setColor, setShadow, setBorder } from '../../styles'
import PropTypes from 'prop-types'

const Room = ({ img = '', title = '', info = '', price = 0, className }) => {
  return (
    <article className={className}>
      <div className='img-container'>
        <img src={img} alt={title} />
        <div className='price'>${price}</div>
      </div>
      <div className='room-info'>
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>Hello</SmallBtn>
      </div>
    </article>
  )
}

Room.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default styled(Room)`
  background-color: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background-color: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      ${setTransition}
    }
    &:hover img {
      opacity: 0.3;
    }
    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      text-align: center;
      ${setLetterSpacing()}
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()}
    }
    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
    padding: ${setRem()};
    ${setLetterSpacing()};
    h4 {
      text-transform: capitalize;
    }
  }
  ${setShadow.light};
  ${setTransition()};

  &:hover {
    ${setShadow.dark};
    transform: scale(1.02);
  }
`
