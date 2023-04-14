import React from 'react'
import {styled} from '@mui/material'
import Greeting_Molecule from '../../molecules/Greeting_Molecule'

const StyledGreeting = styled('div')({
    position: "absolute",
    left: "280px",
    right: "0px",
    top: "80px",
    bottom: "0px",
    height:'240px',
})

const Greeting = () => {
  return (
    <StyledGreeting>
     <Greeting_Molecule/>
    </StyledGreeting>
  )
}

export default Greeting
