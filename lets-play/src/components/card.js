import React, {Component} from 'react';

const Card = (props) => {


    return (
        <div className="card" onClick={props.onClickHandler}>
            <div className="card-img-top">
                <img src={props.imgSrc} alt="card" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.value}</h3>
            </div>
        </div>
    )
}

export default Card;
