import React from 'react'
import { styled } from '@mui/material'
import CashKick_Table from '../../molecules/Home_Table'


const StyledTable = styled("div")({
    boxSizing: "border-box",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "32px",
    gap: "20px",
    
    position: "absolute",
    width: "920px",
    height: "279px",
    left: "278px",
    top: "322px",
    
    /* background/elevation 1 */
    
    background: "#201F24",
    /* border/low emp */
    
    border: "1px solid #28272B",
    borderRadius: "12px",
})

const Home_Table = () => {
  return (
    <StyledTable>
      <CashKick_Table/>
    </StyledTable>
  )
}

export default Home_Table
