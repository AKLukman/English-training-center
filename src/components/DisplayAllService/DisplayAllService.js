import React from 'react';
import './DisplayAllService.css'
const DisplayAllService = (props) => {
    const {title, description, price, img} = props.allService;
    return (
        <div className="all-service-main">
            <div className="all-service">
                <img src={img} alt="" />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h6>Price : {price} tk</h6>
                    <button className="button">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllService;