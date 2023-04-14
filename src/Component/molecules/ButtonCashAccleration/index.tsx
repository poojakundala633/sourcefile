import { Button } from '@mui/material'
import React from 'react'
type props={
    text:string;
}
const Button_CashAccleration: React.FC<props> = ({ text })=> {
  return (
    <div>
      <Button sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 24px",
        gap: "8px",
        
        width: "147px",
        height: "43px",
        fontSize:"10px",
        color:"white",
        
        /* Primary/purple/600
        
        Selection for background
        */
        background: "#393552",
        /* Primary/purple/400 */
        
        border: "1px solid #B4A9FF",
        borderRadius: "12px",
        marginLeft:"8px",
        
        /* Inside auto layout */
        
        flex: "none",
        order: "0",
        flexGrow: "0",
      }}>
        {text}
      </Button>
    </div>
  )
}

export default Button_CashAccleration
