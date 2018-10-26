import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Country = ({country}) => (
  <CountryDetails>
    <Flag src={country.picture} />
    <CountryCode>{country.code}</CountryCode>
  </CountryDetails>
)

Country.propTypes = {
  country: PropTypes.object
}

const CountryDetails = styled.section`
  padding-bottom: 15px;
`
const Flag = styled.img`
  width: 30px;
`
const CountryCode = styled.p`
  font-weight: 800;
`

export default Country