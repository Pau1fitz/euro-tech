import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SlideCircles = ({players, slideIndex, changeSlide}) => (
  <SlideCirclesContainer>
    {
      players.map((p, i) => (
        <SlideCircle 
          key={i}
          onClick={changeSlide}
          active={i === slideIndex ? true : false}
        />
      ))
    }
  </SlideCirclesContainer>
)

SlideCircles.propTypes = {
  players: PropTypes.array,
  slideIndex: PropTypes.number,
  changeSlide: PropTypes.func
}

const SlideCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
const SlideCircle = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 2px solid #001f3f;
  margin: 0 2px;
  cursor: pointer;
  background: ${props => props.active ? '#001f3f' : 'transparent' }
`

export default SlideCircles