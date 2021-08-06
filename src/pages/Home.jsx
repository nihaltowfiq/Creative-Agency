import { Fragment } from 'react';
import {
    Feedbacks,
    Footer,
    Header,
    Icons,
    OurWorks,
    Services,
} from '../components/templates';

export const Home = () => (
    <Fragment>
        <Header />
        <Icons />
        <Services />
        <OurWorks />
        <Feedbacks />
        <Footer />
    </Fragment>
);
