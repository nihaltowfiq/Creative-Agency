import { Fragment } from 'react';
import {
    Feedbacks,
    Footer,
    Header,
    OurWorks,
    Services,
} from '../components/templates';

export const Home = () => (
    <Fragment>
        <Header />
        <Services />
        <OurWorks />
        <Feedbacks />
        <Footer />
    </Fragment>
);
