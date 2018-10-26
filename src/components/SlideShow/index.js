import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlayerCard from '../PlayerCard'

const SlideShow = ({players, slideIndex}) => (
  <SlideShowWrapper>
    {
      players.map((p, i) => (
        <div key={i}>
          <PlayerCard 
            player={p} 
            slideIndex={slideIndex}
          />
        </div>
        )
      ).reverse()
    }
  </SlideShowWrapper>
)

SlideShow.propTypes = {
  players: PropTypes.array,
  slideIndex: PropTypes.number
}

const SlideShowWrapper = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  @media (max-width: 600px) {
    max-width: 320px;
  }
`

export default SlideShow