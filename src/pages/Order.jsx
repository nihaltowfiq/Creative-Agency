import { Fragment, useEffect, useState } from 'react';
import { Order as OrderComponent } from '../components/templates';

export const Order = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServicesData(data));
    }, []);

    return (
        <Fragment>
            <OrderComponent data={servicesData} />
        </Fragment>
    );
};
