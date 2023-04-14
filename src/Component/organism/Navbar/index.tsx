import React from 'react'
import NavContent from '../../molecules/NavContent'
import { styled } from '@mui/material/styles'

const StyledNavbar = styled('div')({
    boxSizing: "border-box",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0px 20px",
    gap: "40px",
    
    position: "absolute",
    width: "990px",
    left: "230px",
    height:'100px',
    top: "0px",
    bottom: "600px",
    
    /* background/elevation 1 */
    
    borderRight: "1px solid #222124",
    borderRadius: "0px",
})

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavContent title='Good afternoon' desc='April 02, 2021'/>
    </StyledNavbar>
  )
}

export default Navbar
