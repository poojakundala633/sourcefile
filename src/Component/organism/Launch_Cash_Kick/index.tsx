import React from 'react'
import { styled } from '@mui/material/styles';
import Launch_Cash_Kick_Text from '../../molecules/Launch_Cash_Kick_Text';
import Launch_Cash_Kick_Button from '../../molecules/Launch_Cash_Kick_Button';

const StyledLaunch = styled('div')({
        boxSizing: "border-box",
        /* Auto layout */
        
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px",
        gap: "20px",
        
        position: "absolute",
        width: "330px",
        height: "230px",
        left: "869px",
        top: "90px",
        color:'white',
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
})

const Launch_Cash_Kick = () => {
  return (
    <StyledLaunch>
        <Launch_Cash_Kick_Text/>
        <Launch_Cash_Kick_Button/>
    </StyledLaunch>
  )
}

export default Launch_Cash_Kick
