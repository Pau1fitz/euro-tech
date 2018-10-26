import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlayerImage = ({picture}) => (
  <PlayerImg src={picture} />
)

PlayerImage.propTypes = {
  picture: PropTypes.string
}

const PlayerImg = styled.img`
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
  max-width: 100px;
  width: 100%;
`
export default PlayerImage