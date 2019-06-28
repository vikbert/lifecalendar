import React from 'react';
import {Container} from "@material-ui/core";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = () => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
        console.log(date);
    }

    return (
        <Container maxWidth={'sm'}>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
            />
        </Container>
    );
};

export default RegisterForm;
