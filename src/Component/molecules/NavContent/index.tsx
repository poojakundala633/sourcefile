import React from 'react'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material'

const StyledNav_Content = styled('div')({
    width: "294px",
    height: "42px",

    position: "absolute",
    left: "28px",
    top: "20px",
    
    /* title */
    
    fontFamily: 'Gilroy',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "36px",
    lineHeight: "42px",
    /* identical to box height, or 117% */
    
    letterSpacing: "-0.015em",
    
    /* text/high emp */
    
    color: "#E8E7F0",
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: "0",
    flexGrow: "0",
})
type props = {
  title : string;
  desc : string;
}
const NavContent: React.FC<props> = ({ title, desc })=>{
  return (
    <div>
    <StyledNav_Content>
      <MuiTypography variant='h5'>
        {title}</MuiTypography>
    </StyledNav_Content>
    <StyledNav_Content style={{top:'50px', color:'#A5A5A6',fontWeight: "500",
    fontSize: "18px",}}>
        <MuiTypography>{desc}</MuiTypography>
    </StyledNav_Content>
    </div>
  )
}

export default NavContent
