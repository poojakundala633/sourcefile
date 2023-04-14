
import React from 'react'
import CardAccleration_Molecule from '../../molecules/CardAccleration_Molecule'
import {Container} from '@mui/material'

const CashAccleration_Card: React.FC = () => {
  return (
    <div>
    <Container sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "32px",
        gap: "12px",
        
        position: "absolute",
        width: "600px",
        height: "230px",
        left: "265px",
        top: "90px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
    }}>
      <CardAccleration_Molecule  text='Term cap' value='12 Months'/>
      <CardAccleration_Molecule text='Available credit' value='$880.0k'/>
      <CardAccleration_Molecule text='Max interest rate' value='12.00%'/>
      </Container>
    </div>
  )
}

export default CashAccleration_Card
