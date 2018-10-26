import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Name = ({firstName, lastName}) => (
  <NameContainer>
    <NameText>{firstName}</NameText>
    <NameText>{lastName}</NameText>
  </NameContainer>
)

Name.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

const NameContainer = styled.section`
  padding-bottom: 15px;
`
const NameText = styled.h4`
  font-size: 30px;
`

export default Name