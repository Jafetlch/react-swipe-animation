import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductInner = styled.div`
  padding: 0 32px;
`

export const ProductContent = styled.div`
  padding: 72px 0 24px;
`

export const ProductContentInner = styled(motion.div)`
  h4 {
    font-size: 14px;
    margin: 0 0 16px 0;
    line-height: 1;
  }
  h1 {
    font-size: 50px;
    font-weight: 700px;
    margin: 0 0 24px 0;
    line-height: 1;
  }
  p {
    font-size: 14px;
  }
`

export const ButtonRow = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    height: 56px;
    padding: 0 24px;
    background: #fc3f4e;
    color: #fff;
    border: none;
    font-size: 14px;
    line-height: 1;
  }
  svg {
    margin-right: 24px;
  }
`

export const ProductSlideEnlarge = styled.div`
  position: relative;
`

export const Background = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #636363;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  overflow-y: hidden;
`

export const ProductDragHeader = styled(motion.div)`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 22;
  top: 0;
  padding: 24px 32px;
  opacity: 0;
`

export const CompanyName = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
`

export const Close = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100px;
  justify-content: center;
`

export const ProductContainer = styled.div`
  position: relative;
  height: 540px;
`

export const ProductImage = styled(motion.div)`
  z-index: 8;
  position: absolute;
`
// export const ProductImage = motion.custom(styled.div`
//   z-index: 8;
//   position: absolute;
// `)

export const ProductDrag = styled(motion.div)`
  z-index: 99;
  position: relative;
  margin-bottom: 40px;
`

export const ProductDragInner = styled.div`
  padding: 0 32px;
`

export const ProductDragLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  h6 {
    font-size: 14px;
    margin: 0;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 12px;
    }
  }
`

export const ProductDragProgressBackground = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(66, 66, 67, 0.2);
  position: relative;
`

// export const ProductDragProgress = motion.custom(styled.div`
//   width: 0%;
//   height: 1px;
//   background: #fff;
//   position: absolute;
//   z-index: 2;
//   right: 0;
// `)
export const ProductDragProgress = styled(motion.div)`
  width: 0%;
  height: 1px;
  background: #fff;
  position: absolute;
  z-index: 2;
  right: 0;
`
