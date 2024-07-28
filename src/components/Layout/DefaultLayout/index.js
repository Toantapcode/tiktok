import HeaderOnly from "~/components/Layout/HeaderOnly";
import Sidebar from "./Sidebar";

import React from 'react';

export default function DefaultLayout({ children }) {
  console.log(children);
  return (
    <div>
      <HeaderOnly />
      <div className="flex justify-center">
        <div className="flex w-1150px">
          <Sidebar />
          <div className='content flex-1'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
