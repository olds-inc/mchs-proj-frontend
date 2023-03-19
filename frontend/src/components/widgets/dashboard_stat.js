import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

function Widget(props) {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', width: '300px', textAlign: 'center' }}>
            <p>1  Реагирование</p>
            <p>1  В процессе</p>
            <p>14 Завершено</p>
        </div>
    );
}

export default Widget;