import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="Tiktok" />

        <div className={cx('search')}>
          <input type="text" placeholder='Search' />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} className={cx('icon')} />
          </button>
          <span className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner} className={cx('icon')} />
          </span>
          <span className={cx('line')}></span>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
          </button>
        </div>

        <div className={cx('action')}></div>
      </div>
    </header >
  )
}
