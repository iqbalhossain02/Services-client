/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card col-md-4">
            <div class=" m-3 "  >
                <div className={` text-center   `}>
                    <div className="d-flex justify-content-center " >
                        <div className="card-body " >
                            <h4 className="card-title ">{service.title}</h4>
                            <h5>{service.price}</h5>
                            <p className="card-text">{service.description}</p>
                            <button type="button" className="btn btn-warning">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;