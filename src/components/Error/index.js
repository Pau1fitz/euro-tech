import React from 'react'
import styled from 'styled-components'

const Error = () => (
  <ErrorContainer>
    Apologies something went wrong
  </ErrorContainer>
)

const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #001f3f;
`
export default Error