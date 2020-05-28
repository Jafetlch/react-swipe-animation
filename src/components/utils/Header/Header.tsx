import React from 'react'
import LogoPNG from '../../../assets/logo.png'
import {
  HeaderContainer,
  HeaderInner,
  HeaderContent,
  Logo,
  HamburgerMenu
} from './styles/Header.styled'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderContent>
          <Logo>
            <img src={LogoPNG} alt="Logo" />
          </Logo>
          <HamburgerMenu>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </HeaderContent>
      </HeaderInner>
    </HeaderContainer>
  )
}
