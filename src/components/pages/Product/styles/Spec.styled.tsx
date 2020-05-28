import styled from 'styled-components'

export const SpecInner = styled.div`
  padding: 0 32px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      height: 60px;
      padding: 6px 0;
      border-top: 1px solid rgba(66, 66, 67, 0.2);
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const SpecHeader = styled.div`
  h5 {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 24px;
    position: relative;
    &::after {
      content: '';
      height: 2px;
      width: 32px;
      background: #fc3f4e;
      bottom: 4px;
      left: 0;
    }
  }
`

export const SpecLabel = styled.div`
  color: rgba(66, 66, 67, 0.6);
  font-weight: 300;
  height: 24px;
`

export const SpecContent = styled.div`
  height: 24px;
  color: #424243;
`

export const Red = styled.div`
  color: #fc3f4e;
`
