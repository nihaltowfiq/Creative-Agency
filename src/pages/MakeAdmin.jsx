import { Fragment, useState } from 'react';
import { MakeAdmin as MakeAdminComponent } from '../components/templates';

export const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleChange = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dry-ocean-34765.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    document.getElementById('makeAdminForm').innerHTML =
                        '<h3 class="text-center text-success mt-5"><b>Admin Added Successfully</b></h3>';
                }
            });
    };
    return (
        <Fragment>
            <MakeAdminComponent
                changeHandler={handleChange}
                submitHandler={handleSubmit}
            />
        </Fragment>
    );
};
