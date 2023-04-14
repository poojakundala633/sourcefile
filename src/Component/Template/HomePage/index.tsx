import React from 'react'
import Sidebar from '../../organism/SideBar'
import Launch_Cash_Kick from '../../organism/Launch_Cash_Kick'
import CashKick_Table from '../../organism/Home_Table'
import Navbar from '../../organism/Navbar'
import {styled} from '@mui/material'
import Greeting_Molecule from '../../molecules/Greeting_Molecule'
import Greeting from '../../organism/Greeting'


export const TotalContainer = styled('div')({
      background:'black',
      border:'1px solid green',
      height:"99.7vh",
      width:'99.9vw',

      position: "absolute",
      left: "0px",
      right:"0px",
      top: "0px",
      bottom: "0px",
})
const HomePage = () => {
  return (
    <TotalContainer>
      <Navbar/>
      <Sidebar/>
      <Greeting/>
      <Launch_Cash_Kick/>
      <CashKick_Table/>
    </TotalContainer>
  )
}

export default HomePage
