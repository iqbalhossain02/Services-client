import React from 'react';
import SkinCare from '../../../images/skinCare.jpg';

const CompleteServices = () => {
    return (
        <div className=" bg-light p-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={SkinCare} className="img-fluid" alt="care" />
                </div>
                <div className="col-md-6  align-self-center ">
                    <h4>let us handle your <br /> screen<span className="text-warning "> professionally.</span></h4>
                    <p className="text-secondary">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    <div className="row my-5">
                        <div className="col-md-6 text-center">
                            <h4>Total Services</h4>
                            <h4 className="text-warning">475+</h4>
                        </div>
                        <div className="col-md-6 text-center">
                            <h4>Happy Customers</h4>
                            <h4 className="text-warning">1200+</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteServices;
