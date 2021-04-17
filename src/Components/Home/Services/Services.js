import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const services = [
    {
        id: 1,
        title: 'Body Massage',
        price: '$99',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts'
    },
    {
        id: 2,
        title: 'Hair Cut Home Service',
        price: '$120',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts'
    }, {
        id: 3,
        title: 'Hair Color',
        price: '$55',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts'
    },
]

const Services = () => {
    return (
        <div className="p-5">
            <h3 className="text-center my-5">Our <span className="text-warning">Services</span></h3>
            <div className="row">
                {
                    services.map(service => <ServicesCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;