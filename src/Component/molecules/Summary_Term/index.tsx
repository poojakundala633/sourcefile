import { Container, Typography } from '@mui/material'
import React from 'react'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material'

export const MuiTerm = styled('div')({
    width: "180px",
    height: "22px",
    
    /* body 1 */
    
    fontFamily: 'Gilroy',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "140%",
    /* or 22px */
    
    
    /* text/low emp */
    
    color: "#A5A5A6",
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: "0",
    flexGrow: "1",
})

export const MuiMonths = styled('div')({
    width: "90px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "140%",
            /* or 22px */
        
            textAlign:"right",
            /* text/high emp */
            
            color: "#E8E7F0",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "0",
            marginRight:"50px",
})
 
const Term = () => {
  return (
    <div>
        <div style={{display:"flex"}}>
        <MuiTerm>
        <MuiTypography variant='body1'>Term</MuiTypography>
        </MuiTerm>
        <MuiMonths>
        <MuiTypography variant="body1">12months</MuiTypography>
        </MuiMonths>
        </div>


      <div style={{display:"flex"}}>
        <MuiTerm>
      <MuiTypography variant='body1'>Selected Contracts</MuiTypography>
        </MuiTerm>
        <MuiMonths>
        <MuiTypography variant="body1">0</MuiTypography>
        </MuiMonths>
        </div>
    </div>
  )
}

export default Term
