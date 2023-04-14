import { Table } from '@mui/material'
import { Checkbox, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,Container, Typography, createStyles } from '@mui/material'
import { margin } from '@mui/system';
import React from 'react'
import { useState,useEffect } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { isNotEmittedStatement } from 'typescript';
import { styled } from '@mui/material' 
import Heading_Molecule from '../../molecules/Heading_Molecule';

const MuiTable = styled('div')({
    boxSizing : "border-box",
    background:"#201F24",

    /* Auto layout */
    
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px 0px 10px 10px",
    gap: "20px",
    
    position: "absolute",
    width: "580px",
    height: "500px",
    left: "278px",
    top: "100px",
    overflowX:"auto",
    
    /* background/elevation 1 */
  
    /* border/low emp */
    
    border: "1px solid #28272B",
    borderRadius: "12px",
})


export interface TableData {
  id: number;
  name: string;
  type: string;
  perpayment:string;
  termlength:string;
  payment:string;
}


const Slider_Table = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [rows,setRows] = useState<TableData[]>([])
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [selectAll,setSelect] = useState(false)
  
  

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> , rowId:number)=>{
    setChecked(prevCheckedRows => ({
      ...prevCheckedRows,
      [rowId]: event.target.checked,
    }));
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const newChecked: Record<number, boolean> = {};
    data.forEach(({ id }) => {
      newChecked[id] = checked;
    });
    setChecked(newChecked);
    setSelect(checked)
  };
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');
        console.log('the promsie is',response);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  


  return (
    <div>
      <MuiTable>
        
        <Heading_Molecule text='Yours Contracts'/>
      <TableContainer component={Paper} sx={{overflow: 'hidden',overflowX:"scroll" ,maxHeight:"400px"}}>
     <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{background:"black"}}>
            <TableCell style={{borderBottom:"none"}}><Checkbox style={{marginBottom:'-5px',color:"white"}}
            checked={selectAll}
            onChange={handleSelectAllClick}></Checkbox></TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Name</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Type</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Per payment</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Term length</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Payment</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{backgroundColor:"pink",color:"white"}}>
        {data.map(({id, name, type, perpayment,termlength,payment}) => (
          <TableRow key={id}
          sx={{ '&:last-child td, &:last-child th': { borderBottom:'none'} }}
          style={{ backgroundColor: checked[id] ? '#B4A9FF' : "#201F24"}}>
          <TableCell style={{color:"white",borderBottom:"none"}}><Checkbox  style={{color:"white"}}checked={checked[id]} onChange={event => handleCheckboxChange(event, id)}></Checkbox></TableCell>
             <TableCell component="th" scope="row" style={{color:"white",borderBottom:"none",padding:'5px'}}>
              {name}
              </TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{type}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{perpayment}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{termlength}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{payment}</TableCell>
          </TableRow>
        ))}
       

        </TableBody>
</Table>
      </TableContainer>
      </MuiTable>
    </div>
  )
}

export default Slider_Table

