import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const Header = () => (
  <HeaderContainer>
    <Logo />
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100%;
`
export default Header