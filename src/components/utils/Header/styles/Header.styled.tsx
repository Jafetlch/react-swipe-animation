import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 72px;
`

export const HeaderInner = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  height: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Logo = styled.div`
  position: relative;
  width: 85px;
  display: flex;
  align-items: center;
  img {
    width: 85px;
  }
`

export const HamburgerMenu = styled.div`
  width: 24px;
  span {
    display: block;
    background: #424243;
    height: 2px;
    width: 24px;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
