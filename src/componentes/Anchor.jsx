import React from 'react'

export default function Anchor(props) {
    return (
        <>
        <a href={props.link}><h4 className="subtitle-card">{props.subtitle}</h4></a>            
        </>
    )
}
