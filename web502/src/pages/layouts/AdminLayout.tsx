import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    // <div>Dashboard Admin</div>
    <Outlet />
  )
}

export default AdminLayout