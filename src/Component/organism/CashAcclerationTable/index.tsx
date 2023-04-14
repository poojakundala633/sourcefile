import React from 'react'
import { styled } from '@mui/material'
import Heading_Molecule from '../../molecules/Heading_Molecule'
import Button_CashAccleration from '../../molecules/ButtonCashAccleration'
import CashKick_Table from '../../molecules/CashKick_Table'

const Container = styled('div')({
    boxSizing: "border-box",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "32px",
    gap: "20px",
    
    position: "absolute",
    width: "930px",
    height: "270px",
    left: "265px",
    top: "325px",
    
    /* background/elevation 1 */
    
    background: "#201F24",
    /* border/low emp */
    
    border: "1px solid #28272B",
    borderRadius: "12px",
})

const CashAcclerationTable = () => {
  return (
    <Container>
      <Heading_Molecule text='Cash Acceleration'/>
    <div style={{display:"flex"}}>
      <Button_CashAccleration text='My Contracts'/>
      <Button_CashAccleration text='My Cash Kicks'/>
      
      </div>
      <CashKick_Table/>
      </Container>
  )
}

export default CashAcclerationTable
