import HeaderOnly from "~/components/Layout/HeaderOnly";
import Sidebar from "./Sidebar";

import React from 'react';

export default function DefaultLayout({ children }) {
  console.log(children);
  return (
    <div>
      <HeaderOnly />
      <div>
        <div>
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
