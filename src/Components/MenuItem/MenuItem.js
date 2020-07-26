import React from 'react'
import './MenuItem.scss'
import {withRouter} from 'react-router-dom'


function MenuItem({title , imageUrl , size , linkUrl ,history , match}) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.path}${linkUrl}`)}>
            <div className='background-image' style={{
                backgroundImage : `url(${imageUrl})`
            }}>
            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
