import React, { useState } from 'react'
import { ScreenStyle } from '../styles/Screen.styled'
import { useSelector } from 'react-redux'
import { selectAllCalculations } from '../Storage/calculatorSlice'



const Screen = () => {
  let calculator = useSelector(selectAllCalculations)
  console.log(calculator.num);

  // value={[...calculator.num]}
  return (
    <ScreenStyle >
          {calculator.num}
    </ScreenStyle>

  )
}

export default Screen