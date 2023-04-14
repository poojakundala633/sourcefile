
import React from 'react'
import { MuiTerm } from '../Summary_Term'
import { MuiMonths } from '../Summary_Term'
import MuiTypography from '../../atoms/Typography'
import {styled} from '@mui/material'

const MuiLine = styled('div')({
    width: "276px",
    height: "0px",
    marginTop:'20px',
    /* border/high emp */
    
    border: "1px solid #413F4D",
    
    /* Inside auto layout */
    
    flex: "none",
    order: "4",
    alignSelf: "stretch",
    flexGrow: "0",
})

const SummaryPayment = () => {
  return (
    <div>
    <div style={{display:"flex"}}>
        <MuiTerm>
         <MuiTypography variant='body1'>Pay back amount</MuiTypography> 
         </MuiTerm>      
         <MuiMonths>
            <MuiTypography variant='body1'>$0.00</MuiTypography>
         </MuiMonths>
    </div>
    <div style={{display:"flex"}}>
      <MuiTerm>
        <MuiTypography variant='body1'>Rate%</MuiTypography>
      </MuiTerm>
      <MuiMonths>
        <MuiTypography variant='body1'>(0.00%)$0.00</MuiTypography>
      </MuiMonths>
    </div>

    <MuiLine>

    </MuiLine>

    <div style={{display:'flex'}}>
        <MuiTerm>
            <MuiTypography variant='h6'>Total Payable</MuiTypography>
        </MuiTerm>
        <MuiMonths>
            <MuiTypography variant='h6'>$0.00</MuiTypography>
        </MuiMonths>
    </div>

    </div>
    
  )
}

export default SummaryPayment
