import React from 'react'

function Avatar({ avatar,size }) {
    return (
        <img className={size} src={avatar} alt="" />
    )
}

export default Avatar