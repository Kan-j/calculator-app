import React from 'react'
import Keypad from './Keypad'
import { StyledKeyPadCover } from '../styles/KeypadCover.styled'
import { buttons } from '../data/data'
import { useDispatch } from 'react-redux'

const KeyPadCover = () => {
  return (
    <StyledKeyPadCover>
      {
        buttons.map((buttonData) => {
          return <Keypad data={buttonData} key={buttonData.id}  />;
        })
      }
    </StyledKeyPadCover>
  )
}

export default KeyPadCover