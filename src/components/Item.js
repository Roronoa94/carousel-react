import React from "react";

const Item = (props) => {
    console.log(props)
    return (
        <div className='item'>
            <div className='img'>
                <img src={props.image} alt='item image'/>
            </div>
            <div className='info'>
                <div className='name'>{props.name}</div>
                <div className='price'>{props.price}</div>
                <div className='category'>{props.category}</div>
            </div>
        </div>
    )
};



export default Item;


