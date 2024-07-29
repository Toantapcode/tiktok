import HeaderOnly from "~/components/Layout/HeaderOnly";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import React from 'react';

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderOnly />
      <div className={cx('container')}>
        <div className={cx('sidebar')}>
          <Sidebar />
        </div>
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    </div>
  );
}
