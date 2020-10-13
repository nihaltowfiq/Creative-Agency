import React from 'react';
import Feedbacks from '../Feedbacks/Feedbacks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWorks></OurWorks>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;