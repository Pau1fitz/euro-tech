import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BioBlock = ({header, detail}) => (
  <BioBlockContainer>
    <BioHeader>{header}</BioHeader>
    <BioDetail>{detail}</BioDetail>
  </BioBlockContainer>
)

BioBlock.propTypes = {
  header: PropTypes.string,
  detail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const BioBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`
const BioHeader = styled.p`
  color: #aaa;
`
const BioDetail = styled.p`
  font-weight: 800;
`

export default BioBlock