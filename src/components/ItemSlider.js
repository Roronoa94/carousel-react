import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Item from './Item'

const ItemSlider = ({items}) => {
    const [current, setCurrent] = useState(1);
    const length = items.length;

    const nextSlide = () => {
        setCurrent(current === length - 2 ? 1 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 1 ? length - 2 : current - 1);
    };

    if(!Array.isArray(items) || length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {items.map((item, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}>
                            {(index === current || index === current + 1 || index === current - 1) && (<Item {...item}/>)}
                        </div>
                    )
                })
            }
        </section>
    )
};

export default ItemSlider;
