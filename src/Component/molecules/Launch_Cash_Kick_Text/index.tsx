import React from 'react'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material/styles';

const StyledLaunchCash = styled('div')({
        width: "150px",
        height: "58px",
        
        /* heading 2 */
        
        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "29px",
        letterSpacing: "-0.005em",

        
        /* text/high emp */
        
        color: "#E8E7F0",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: "0",
        alignSelf: "stretch",
        flexGrow: "0",
})

const StyledDesc = styled('div')({
    width: "276px",
    height: "44px",
    
    /* body 1 */
    
    fontFamily: 'Gilroy',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "140%",
    /* or 22px */
    
    
    /* text/low emp */
    
    color: "#A5A5A6",
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: "1",
    alignSelf: "stretch",
    flexGrow: "0",
})


const Launch_Cash_Kick_Text = () => {
  return (
    <div>
    <StyledLaunchCash>
      <MuiTypography variant='h6'>
      Launch a new Cash Kick
      </MuiTypography>
      </StyledLaunchCash>
      <StyledDesc>
      <MuiTypography variant='body1'>
      You have upto $880,000.00 available for a new cash advance
      </MuiTypography>
      </StyledDesc>
    </div>
  )
}

export default Launch_Cash_Kick_Text
