import { Fragment, useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { EnrolledServices as EnrolledServicesCompoment } from '../components/templates';

export const EnrolledServices = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            `https://dry-ocean-34765.herokuapp.com/orders?email=${loggedInUser.email}`
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [loggedInUser.email]);

    return (
        <Fragment>
            <EnrolledServicesCompoment data={orders} />
        </Fragment>
    );
};
