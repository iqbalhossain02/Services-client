import React from 'react';
import salon from '../../../images/Header.jpg';

const HeaderMain = () => {
    return (
        <div  className="row bg-light p-5">
            <div className="col-md-6 align-self-center">
                <h3>Amazing Our Body Service</h3>
                <p className="text-secondary">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button type="button" className="btn btn-warning">Get On</button>
            </div>
            <div className="col-md-6">
                <img src={salon} alt="Salon" />
            </div>
        </div>
    );
};

export default HeaderMain;