import React from 'react'
import {
  BreadcrumbContainer,
  BreadcrumbInner,
  BreadcrumbLinks,
  BreadcrumbLink
} from './styles/Breadcrumb.styled'

export const Breadcrumb = () => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbInner>
        <BreadcrumbLinks>
          <BreadcrumbLink>Boards & Software</BreadcrumbLink>
          <BreadcrumbLink>HiFive</BreadcrumbLink>
        </BreadcrumbLinks>
      </BreadcrumbInner>
    </BreadcrumbContainer>
  )
}
