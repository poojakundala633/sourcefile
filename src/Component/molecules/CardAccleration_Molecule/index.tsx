import { Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react'
import MuiTypography from '../../atoms/Typography';
import { styled } from '@mui/material';
import coin from '../../../Asset/image/coin.svg'

const StyledCardTypo = styled('div')({
    width: "196px",
    height: "22px",
    /* body 1 */
    
    fontFamily: 'Gilroy',
    fontStyle: "normal",
    
   
    lineHeight: "140%",
    /* or 22px */
    
    
    /* text/med emp */
    
    
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: "0",
    flexGrow: "0",
})


type props = {
  text : string;
  value : string;
}
const CardAccleration_Molecule: React.FC<props> = ({ text, value })=> {
  return (
    <div>
    <StyledCardTypo style={{fontWeight: "300",fontSize: "8px",color: "#C9C8CC",}}>
      <MuiTypography>{text}</MuiTypography>
    </StyledCardTypo>

    <StyledCardTypo style={{fontWeight: "500",fontSize:"18px",color: "white",}}>
      <MuiTypography>
        {value}
      </MuiTypography>
      </StyledCardTypo>
    </div>
  )
}

export default CardAccleration_Molecule
