import React from 'react'
import Button from '../../atoms/Buttton/Index'


const SummaryPaymentButton = () => {
  return (
    <div>
      <Button sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent : "center",
        alignItems: "center",
        padding: "20px 40px",
        gap: "8px",

        width: "276px",
        height: "59px",

        /* Primary/purple/500

        Primary action color
        */
        background: "#6C5DD3",
        opacity: "0.56",
        borderRadius: "12px",
        color:"white",
        /* Inside auto layout */
        '&:hover': {
            background: '#2D2D30', /* change background color on hover */
          },
        flex: "none",
        order: "6",
        alignSelf: "stretch",
        flexGrow: "0",
      }}>
       Review Your Credits
      </Button>
    </div>
  )
}

export default SummaryPaymentButton
