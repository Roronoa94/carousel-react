import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Item from './Item'

const ItemSlider = ({items}) => {
    const [current, setCurrent] = useState(Math.floor(items.length/2));
    const [searchTerm, setSearchTerm] = useState('');

    const nextSlide = () => {
        setCurrent(current === itemsToRender.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? itemsToRender.length - 1 : current - 1);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrent(Math.floor(itemsToRender.length/2));
    };

    const itemsToRender = items
        .filter(item => {
            if (searchTerm === '') {
                return item;
            }
            else if (item.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item;
            }
        });

    if(!Array.isArray(items) || items.length <= 0) {
        return null;
    }

    return (
        <div>
            <input className='search-input' type='text' placeholder='Search....' onChange={handleSearch}/>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                {
                    itemsToRender.map((item, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'}>
                                {(index === current)
                                &&
                                (<Item {...item}/>)}
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
};

export default ItemSlider;
