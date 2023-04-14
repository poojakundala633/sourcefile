import React from 'react'
import Button from '../../atoms/Buttton/Index'
import { styled } from '@mui/material'

const StyledButton = styled('div')({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 40px",
    gap: "8px",
    
    width: "200px",
    height: "20px",
    
    /* Primary/purple/500
    
    Primary action color
    */
    background: "#6C5DD3",
    borderRadius: "12px",
    
    /* Inside auto layout */
    
    flex: "none",
    order: "1",
    alignSelf: "stretch",
    flexGrow: "0",
    color:"white",
})

const Launch_Cash_Kick_Button = () => {
  return (
    <StyledButton>
      <Button sx={{
        width:'350px',
        height:'60px',
        background:'transparent',
        boxShadow:'none',
        textTransform:"capitalize",
        '&:hover': {
            background: 'transparent', /* change background color on hover */
          },
      }}>New Cash Kick</Button>
    </StyledButton>
  )
}

export default Launch_Cash_Kick_Button
