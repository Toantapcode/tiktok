import Header from '~/components/Layout/component/Header'
import React from 'react'

export default function HeaderOnly({ children }) {
    return (
        <div className=''>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

