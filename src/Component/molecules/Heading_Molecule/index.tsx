import React from 'react'
import { styled } from '@mui/material'
import MuiTypography from '../../atoms/Typography'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const StyledText = styled('div')({
    width: "200px",
height: "29px",

/* heading 2 */

fontFamily: 'Gilroy',
fontStyle: "normal",
fontWeight: "600",
fontSize: "24px",
lineHeight: "29px",
letterSpacing: "-0.005em",

/* text/high emp */

color: "#E8E7F0",


/* Inside auto layout */

flex: "none",
order: "0",
flexGrow: "0",
})

type props={
    text : string
}

const Heading_Molecule: React.FC<props> = ({text}) => {
  return (
    <div>
    
    <StyledText style={{display:"flex"}}>
      <MuiTypography>
        {text}
      </MuiTypography>
     
      <InfoOutlinedIcon sx={{marginBottom:'-5px',marginLeft:'10px',color:'grey'}}></InfoOutlinedIcon>
      </StyledText>
    </div>
  )
}

export default Heading_Molecule
