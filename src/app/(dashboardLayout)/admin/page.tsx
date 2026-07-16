import React from 'react'
import { getDashboardOverview } from './profile/_action'
import DashboardHomePage from '@/components/model/DashboardHomePage'

const AdminHomePage = async() => {
  const dashboard = await getDashboardOverview()
  return (
    <div>
    <DashboardHomePage dashboard={dashboard}/>
    </div>
  )
}

export default AdminHomePage