import React from 'react';
import headerFrame from '../../../images/logos/Frame.png';

const HeaderInfo = () => {
    return (
        <section>
            <div className="row mt-5 pb-5 mb-5">
                <div className="col-md-5 col-12 mt-3">
                    <h1 className="pt-5">Let's Grow Your <br/>Brand To The <br/>Next Level.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe minima sit, tenetur iure ad.</p>
                    <a href="#services" className="btn btn-dark px-5">Hire us</a>
                </div>
                <div className="col-md-7 col-12">
                    <img className="img-fluid" src={headerFrame} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderInfo;