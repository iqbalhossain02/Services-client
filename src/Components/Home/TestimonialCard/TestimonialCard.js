/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TestimonialCard = ({  review}) => {
    console.log(review);
    const [color ,setColor] = useState(null);

    // handle Change Color 
    const handleColorChange = () => {
        const newColor = 'text-warning'
        setColor(newColor);
    }

    
        
    
    return (
        <div className=" col-md-3 ">

            <div className="d-flex">
                
                
                <div className="align-self-center" >
                    <h5>{review.name}</h5>
                    <br />
                    <strong>{review.company}</strong> 
                </div>
            </div>
            <p className="my-2">{review.description}</p>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} className={` ${color}`}   /></Link> {/* onClick={handleColorChange} */}
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} className={` ${color}`}  /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} className={` ${color}`} /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} className={` ${color}`}  /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} className={` ${color}`}  /></Link>
        </div>
    );
};

export default TestimonialCard;