import React, { useState } from 'react';
import Phichi from '../../../images/phici.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = [
    {
        id: 1,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 2,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 3,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 4,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
]


const Testimonial = () => {
    const [review , setReview] = useState({});

    // data load to database
    fetch('http://localhost:4444/review')
        .then((response) => response.json())
        .then((review) => {
            console.log(review)
            setReview(review[0])
        })

    return (
        <section className="Testimonial-section container my-5">
            <h4 className="text-warning text-center my-5">Testimonials</h4>
            <div className="row">
                {/* {
                    Testimonials.map(Testimonial => <TestimonialCard key={Testimonial.id} Testimonial={Testimonial} />)
                } */}
                
                <TestimonialCard  review={review} />)
                
                
            </div>
            <div className="">
                {/* <h5>{review.name}</h5>
                <h6>{review.company}</h6>
                <p>{review.description}</p> */}
            </div>
        </section>
    );
};

export default Testimonial;