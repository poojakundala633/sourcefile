import React from 'react'
import { styled } from '@mui/material/styles';
import Seeder_Logo from '../../molecules/Seeder_Logo';
import Home_Button from '../../molecules/Home_Button';



const Container = styled("div")
({
    boxSizing: "border-box",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px 20px",
    gap: "40px",
    
    position: "absolute",
    width: "250px",
    left: "0px",
    top: "0px",
    bottom: "0px",
    
    /* background/elevation 1 */
    
    background: "#201F24",
    borderRight: "1px solid #222124",
    borderRadius: "0px",

});
const Sidebar = () => {
  return (
    <Container>
      <Seeder_Logo/>
      <Home_Button/>
    </Container>
  )
}

export default Sidebar
