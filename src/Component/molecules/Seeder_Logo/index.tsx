import { Container,Typography } from '@mui/material'
import React from 'react'
import ImageComponent from '../../atoms/Images/Index'
import MuiTypography from '../../atoms/Typography';
import { styled } from '@mui/material/styles';
import seederLogo from '../../../Asset/image/SeederLogo.svg'

export const StyledTypo = styled('div')({
  width: "164.12px",
  height: "32px",

  marginLeft:'20px',
  
  fontFamily: 'Gilroy',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "30px",
  display: "flex",
  alignItems: "flex-end",
  
  /* text/high emp */
  
  color: "#E8E7F0",
  
  
  /* Inside auto layout */
  
  flex: "none",
  order: "1",
  flexGrow: "1",
})

const Seeder_Logo = () => {
  return (
    <div>
      <Container sx={{display:"flex"}}>
        <ImageComponent source={seederLogo} alt='LOGO' height={25} width={25} />
       <StyledTypo>
        <MuiTypography variant='h6'>Seeder</MuiTypography>
        </StyledTypo>
      </Container>
    </div>
  )
}

export default Seeder_Logo

