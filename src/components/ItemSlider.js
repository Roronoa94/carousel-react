import {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Item from './Item'

const ItemSlider = ({items}) => {
    const [current, setCurrent] = useState(0);
    const length = items.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(items) || length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {items.map((item, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<Item {...item}/>)}
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ItemSlider;
