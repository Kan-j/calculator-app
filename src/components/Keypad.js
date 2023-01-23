import React, { useState } from 'react'
import { StyledKeyPad } from '../styles/Keypad.styled'
import { evaluate , round} from 'mathjs'; 
import { useDispatch } from 'react-redux';
import { PerformOperation } from '../Storage/calculatorSlice';



const operations = ["+", "-", "*", "/"];

let num = ""


const Keypad = ({ data }) => {
  const [numb, setNumb] = useState("")

  let dispatch = useDispatch()

  
  // console.log(data);
  const val = data.value;

  

  const onKeyPress = () => {
    // dispatch(PerformOperation(100))
    // dispatch(PerformOperation("Gosh"))
    if (!isNaN(val) || val === "." ) {
      if (num.includes(".")) {
        if (val === ".") { }
        else {
          num += val;
          setNumb(num)
          console.log(num);
          console.log(numb);
          
        }

      } else {
        num += val;
        console.log(num);
      }

    } else if (operations.includes(val)) {
      num += val
      console.log(num);
    } else if (val === "DEL") {
      num = num.slice(0, -1)
      console.log(num);
    } else if (val === "RESET") {
        num = ""
      console.log("RESET");
      console.log(num);
    } else if (val === "=") {
      let ans;

      if (num.startsWith("*") || num.startsWith("/") || num.endsWith("/") || num.endsWith("*")) {
        console.log("hi");
      } else {
        ans = evaluate(num)
        num = ""+ round(ans, 6) 
      }
      
      console.log(num);
    }
    dispatch(PerformOperation(num))
  }

  return (
    <StyledKeyPad span = {data.columns} change = {data.colorChange} equal={data.equal} onClick={onKeyPress} >
        {data.id}
    </StyledKeyPad>
  )
}

export default Keypad