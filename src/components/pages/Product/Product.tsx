import React, { useState, useEffect } from 'react'

import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion'

import ProductImagePNG from '../../../assets/product.png'
import { ReactComponent as DownArrowIcon } from '../../../assets/down-arrow.svg'
import { ReactComponent as CloseIcon } from '../../../assets/close.svg'
import { ReactComponent as ChevronIcon } from '../../../assets/chevron.svg'
import {
  ProductContainer,
  ProductInner,
  ProductContent,
  ProductContentInner,
  ButtonRow,
  ProductSlideEnlarge,
  Background,
  ProductDragHeader,
  CompanyName,
  Close,
  ProductImage,
  ProductDrag,
  ProductDragInner,
  ProductDragLabel,
  ProductDragProgressBackground,
  ProductDragProgress
} from './styles/Product.styled'
import { Spec } from './utils/Spec'

export const Product = () => {
  const ease = [0.6, 0.05, -0.01, 0.99]
  const x = useSpring(0, { stiffness: 300, damping: 200 })
  const width = useTransform(x, [-1060, 0], [350, 0])
  const scale = useTransform(x, [-100, 0], [1.25, 1])
  const fadeIn = useTransform(x, [-100, 0], [1, 0])
  const fadeOut = useTransform(x, [-60, 0], [0, 1])
  const up = useTransform(x, [-100, 0], [-100, 1])
  const down = useTransform(x, [-100, 0], [100, 1])

  const [state, setState] = useState(false)

  const targetElementHTML: HTMLElement | null = document.querySelector('html')
  const targetButtonElement: HTMLElement | null = document.querySelector(
    'button'
  )

  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  useEffect(() => {
    state
      ? ((targetElementHTML as HTMLInputElement).style.overflow = 'hidden')
      : ((targetElementHTML as HTMLInputElement).style.overflow = 'scroll')
    if (state) {
      ;(targetButtonElement as HTMLInputElement).scrollIntoView()
    }
  }, [state, targetButtonElement, targetElementHTML])

  const closeProductDrag = () => {
    x.stop()
    x.set(0)
  }

  return (
    <div>
      <ProductInner>
        <ProductContent>
          <ProductContentInner style={{ translateY: up }}>
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <ButtonRow>
              <button>Buy Now ($59)</button>
              <DownArrowIcon />
            </ButtonRow>
          </ProductContentInner>
        </ProductContent>
      </ProductInner>
      <ProductSlideEnlarge>
        <Background style={{ opacity: fadeIn }} />
        {state ? (
          <AnimatePresence>
            <ProductDragHeader
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ ease }}
            >
              <CompanyName>HiFive</CompanyName>
              <Close onClick={closeProductDrag}>
                <CloseIcon />
              </Close>
            </ProductDragHeader>
          </AnimatePresence>
        ) : (
          <AnimatePresence />
        )}
        <ProductContainer>
          <ProductImage
            style={{ x, scale }}
            drag={'x'}
            dragConstraints={{ left: -1060, right: 0 }}
            dragElastic={0.05}
          >
            <img src={ProductImagePNG} alt="product" />
          </ProductImage>
        </ProductContainer>
        <ProductDrag style={{ paddingBottom: down }}>
          <ProductDragInner>
            <ProductDragLabel>
              <motion.h6 style={{ opacity: fadeOut, x }}>
                <ChevronIcon />
                Drag To Enlarge
              </motion.h6>
            </ProductDragLabel>
            <ProductDragProgressBackground>
              <ProductDragProgress style={{ width }} />
            </ProductDragProgressBackground>
          </ProductDragInner>
        </ProductDrag>
      </ProductSlideEnlarge>
      <Spec />
    </div>
  )
}
