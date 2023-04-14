import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody,TableContainer,Paper } from '@mui/material';
import ChequeImg from '../../../Asset/image/ChequeImg.svg'
import ImageComponent from '../../atoms/Images/Index'
import {styled} from '@mui/material'

const StyleImage = styled('div')({
  paddingLeft:"250px"

})

const CashKick_Table = () => {
  return (
    <div>
       <TableContainer component={Paper} sx={{overflow: 'hidden',width:"866px",
       "& td": {
        height: "5px" // add this line to set the height of all TableCells
      }}}>
     <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"white",borderBottom:"none",background:"#262529"}}>Due date</TableCell>
            <TableCell style={{color:"white",borderBottom:"none",background:"#262529"}}>Status</TableCell>
            <TableCell style={{color:"white",borderBottom:"none",background:"#262529"}}>Expected amount</TableCell>
            <TableCell style={{color:"white",borderBottom:"none",background:"#262529"}}>Outstanding</TableCell>
            </TableRow>
        </TableHead>

        <TableBody sx={{backgroundColor:"#393552"}}>
         <TableRow 
          sx={{ '&:last-child td, &:last-child th': { borderBottom:'none'},
         }}>
    <TableCell
      colSpan={4}
      style={{ color: "white", borderBottom: "none",height:"100px",
       }}
    >
      <StyleImage>
      <ImageComponent source={ChequeImg} alt='inage' height={150}></ImageComponent>
      </StyleImage>
    </TableCell>
          </TableRow>
        
       

        </TableBody>
</Table>
      </TableContainer>

    </div>
  )
}

export default CashKick_Table
