import React from 'react'
import ImageComponent from '../../atoms/Images/Index'
import GreetImg from '../../../Asset/image/GreetImage.svg'
import MuiTypography from '../../atoms/Typography'
import {styled} from '@mui/material'

const Greeting_Molecule = () => {
  return (
    <div>
      <div>
      <ImageComponent source={GreetImg} alt='GreetImg' height={250} width={580}/>
      </div>
      
    </div>
  )
}

export default Greeting_Molecule
