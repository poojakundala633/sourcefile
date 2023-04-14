import React from 'react'
import { TotalContainer } from '../HomePage'
import Sidebar from '../../organism/SideBar'
import Navbar from '../../organism/Navbar'
import Summary from '../../organism/Summary'
import Slider_Table from '../../organism/Slider_Table'

const NewCashKick = () => {
  return (
    <TotalContainer>
        <Navbar/>
      <Sidebar/>
      <Summary/>
      <Slider_Table/>
    </TotalContainer>
  )
}

export default NewCashKick
