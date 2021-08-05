import { Fragment, useEffect, useState } from 'react';
import { ServedList as ServedListComponent } from '../components/templates';

export const ServedList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://dry-ocean-34765.herokuapp.com/allOrders')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const updateStatus = (event, id) => {
        const updatedOrder = { status: event.target.value };
        document.getElementById('update').innerText = 'Updating Changes';

        fetch(`https://dry-ocean-34765.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    document.getElementById('update').innerText =
                        'Changes Updated Successfully!';
                }
            });
    };

    return (
        <Fragment>
            <ServedListComponent data={orders} updateStatus={updateStatus} />
        </Fragment>
    );
};
