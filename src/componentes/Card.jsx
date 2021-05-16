import React from 'react'
import Anchor from './Anchor';

export default function Card(props) {

    const divStyle = {
        backgroundColor: props.color
    };

    return (
        <>
            <div className="card mx-4 my-4">
                <div className="row py-3" style={divStyle}>
                    <div className="col-lg-2 col-12">
                        <img src={props.image} className="img-fluid" alt="..."></img>
                    </div>
                    <div className="col-lg-10 col-12">
                        <h2 className="title-card">{props.title}</h2> 
                        <Anchor link={props.link} subtitle={props.subtitle}/>                       
                    </div>
                </div>            
            </div>            
        </>
    )
}
