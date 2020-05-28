import React from 'react'
import {
  SpecInner,
  SpecHeader,
  SpecLabel,
  SpecContent,
  Red
} from '../styles/Spec.styled'

export const Spec = () => {
  return (
    <div>
      <SpecInner>
        <SpecHeader>
          <h5>
            HiFive1 Rev B Features <br /> and Specifications
          </h5>
        </SpecHeader>
        <ul>
          <li>
            <SpecLabel>Microcontroller</SpecLabel>
            <SpecContent>
              <Red>FE310-G002</Red>
            </SpecContent>
          </li>
          <li>
            <SpecLabel>Operating Voltage</SpecLabel>
            <SpecContent>3.3 V and 1.8 V</SpecContent>
          </li>
          <li>
            <SpecLabel>Input Voltage</SpecLabel>
            <SpecContent>5 V USB or 7-12 VDC Jack</SpecContent>
          </li>
          <li>
            <SpecLabel>IO Voltage</SpecLabel>
            <SpecContent>3.3 V</SpecContent>
          </li>
          <li>
            <SpecLabel>Digital I/O Pins</SpecLabel>
            <SpecContent>19</SpecContent>
          </li>
          <li>
            <SpecLabel>PWM Pins</SpecLabel>
            <SpecContent>9</SpecContent>
          </li>
          <li>
            <SpecLabel>SPI Controllers/HW CS Pins</SpecLabel>
            <SpecContent>1/3</SpecContent>
          </li>
        </ul>
      </SpecInner>
    </div>
  )
}
