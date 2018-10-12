import React, {Component} from 'react';

const Card = (props) => {


    return (
        <div className="card">
            <img src={props.imgSrc} alt="card" />
        </div>
    )
}

export default Card;
