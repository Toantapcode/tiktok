import HeaderOnly from "~/components/Layout/HeaderOnly";
import Sidebar from "./Sidebar";

import React from 'react'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderOnly />
      <Sidebar />
      <div className='content'>{children}</div>
    </div>
  )
}
