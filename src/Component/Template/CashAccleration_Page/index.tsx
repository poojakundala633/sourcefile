import React from 'react'
import { styled } from '@mui/material'
import { TotalContainer } from '../HomePage'
import Sidebar from '../../organism/SideBar'
import Launch_Cash_Kick from '../../organism/Launch_Cash_Kick'
import NavContent from '../../molecules/NavContent'
import Navbar from '../../organism/Navbar'
import CashAccleration_Card from '../../organism/CashAcclerationCard'
import CashAcclerationTable from '../../organism/CashAcclerationTable'

const CashAccleration_Page = () => {
  return (
    <TotalContainer>
    <Navbar/>
      {/* <NavContent title='Cash Accleration' desc='Place to create new cash kicks to run your business'/> */}
      <Sidebar/>
      <Launch_Cash_Kick/>
    <CashAccleration_Card/>
    <CashAcclerationTable/>
    </TotalContainer>
  )
}

export default CashAccleration_Page
