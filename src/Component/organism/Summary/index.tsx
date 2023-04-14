import React from 'react'
import { styled } from '@mui/material'

import Heading_Molecule from '../../molecules/Heading_Molecule'
import Term from '../../molecules/Summary_Term'
import Slider_Change from '../../molecules/Slider_Changer'
import SummaryPayment from '../../molecules/SummaryPayment'
import SummaryPaymentButton from '../../molecules/SummaryPaymentButton'

const StyledSummary = styled('div')({
    boxSizing: "border-box",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "32px",
    gap: "20px",
    
    position: "absolute",
    width: "330px",
    height: "480px",
    left: "880px",
    top: "100px",
    
    /* background/elevation 1 */
    
    background: "#201F24",
    /* border/low emp */
    
    border: "1px solid #28272B",
    borderRadius: "12px",
})

const Summary = () => {
  return (
    <StyledSummary>
        <Heading_Molecule text='Summary'/>
        <Term/>
        <Slider_Change/>
        <SummaryPayment/>
        <SummaryPaymentButton/>
     </StyledSummary>
  )
}

export default Summary
