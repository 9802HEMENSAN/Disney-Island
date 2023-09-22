import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerList from '../Components/CustomerList'
import SigleCustomer from '../Components/SigleCustomer'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<CustomerList/>}></Route>
            <Route path="/customer/:id" element={<SigleCustomer/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes