import React from 'react'
import Button from '../../atoms/Buttton/Index'
import { styled } from '@mui/material/styles';
import { Home } from '../../atoms/Images/Index.stories';
import ImageComponent from '../../atoms/Images/Index';


const StyledButton = styled('div')({
            position: "absolute",
            left: "0%",
            right: "8.33%",
            top: "19.1%",
            bottom: "9.13%",
            width: "240px",
            height: "17px",  
          
            /* button 2 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "14px",
            padding:"10px",
            /* or 100% */
            
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.01em",
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "1",
})

const Home_Button = () => {
  return (
    <div>
    <StyledButton>
      <Button variant='contained' size='large' startIcon={<ImageComponent source="Home" alt='home' height={10} width={10}/>}sx={
        {
            width:'240px',
            height:'40px',
            background:"#201F24",
            color:"#E8E7F0",
            textTransform: "capitalize",
            justifyContent: "flex-start",
            boxShadow: 'none', 
            '&:hover': {
                background: '#2D2D30', /* change background color on hover */
              }
        }
      }>Home</Button>
      </StyledButton>

      <StyledButton style={{ top: "25%" }}>
        <Button variant='contained' size='large' sx={
          {
            width:'240px',
            height:'40px',
            background:"#201F24",
            color:"#E8E7F0",
            textTransform: "capitalize",
            justifyContent: "flex-start",
            boxShadow: 'none', 
            '&:hover': {
                background: '#2D2D30', /* change background color on hover */
              }
          }
        }>Cash Acceleration</Button>
      </StyledButton>


      <StyledButton style={{ top: "90%" }}>
        <Button variant='contained' size='large' sx={
          {
            width:'240px',
            height:'40px',
            background:"#201F24",
            color:"#E8E7F0",
            textTransform: "capitalize",
            boxShadow: 'none', 
            justifyContent: "flex-start",
            '&:hover': {
                background: '#2D2D30', /* change background color on hover */
              }
          }
        }>Watch how to</Button>
      </StyledButton>

</div>
  )
}

export default Home_Button
