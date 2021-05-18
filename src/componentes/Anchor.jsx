import React from 'react'
import { Link } from "react-router-dom";

export default function Anchor(props) {
    return (
        <>
        <Link to={props.link}><h4 className="subtitle-card">{props.subtitle}</h4> </Link>            
        </>
    )
}
