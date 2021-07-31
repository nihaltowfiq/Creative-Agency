import { Fragment, useState } from 'react';
import { AddService as AddServiceComponent } from '../components/templates';

export const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [serviceFile, setServiceFile] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            setValidated(false);
            const formData = new FormData();
            formData.append('file', serviceFile);
            formData.append('title', serviceInfo.title);
            formData.append('details', serviceInfo.details);

            fetch('https://dry-ocean-34765.herokuapp.com/addService', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data === false) {
                        document.getElementById('serviceForm').innerHTML =
                            '<h3 class="text-center text-success mt-5"><b>Service Added Successfully</b></h3>';
                    }
                });
        }
    };

    return (
        <Fragment>
            <AddServiceComponent
                validated={validated}
                handleChange={(e) => {
                    const newServiceInfo = { ...serviceInfo };
                    newServiceInfo[e.target.name] = e.target.value;
                    setServiceInfo(newServiceInfo);
                }}
                handleFileChange={(e) => {
                    const newServiceFile = e.target.files[0];
                    setServiceFile(newServiceFile);
                }}
                submitHandler={handleSubmit}
            />
        </Fragment>
    );
};
