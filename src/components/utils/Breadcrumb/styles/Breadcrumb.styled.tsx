import styled from 'styled-components'

export const BreadcrumbContainer = styled.div`
  height: 72px;
  border-top: 1px solid rgba(66, 66, 77, 0.2);
  border-bottom: 1px solid rgba(66, 66, 77, 0.2);
`

export const BreadcrumbInner = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  height: 100%;
`

export const BreadcrumbLinks = styled.div`
  display: flex;
`

export const BreadcrumbLink = styled.div`
  font-size: 14px;
  opacity: 0.5;
  &:first-child::after {
    content: '>';
    margin: 0 16px;
  }
  &.active {
    opacity: 1;
  }
`
