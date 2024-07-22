import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import calendar from './images/calendar.jpeg';

function StableConfirmation(){

    const location = useLocation();
    const {numHorses, Duration, startDate, Firstname, Lastname, Emailaddress, phoneNumber, Breed, dob, PaymentName, CardNumber, CardCVC} = location.state || {};

    return(
    <div>
        <main className="container mt-5">
            <div class="alert alert-success mt-5">
                <div className="mn-4">
                    <h2>Renting Confirmation</h2>
                    <h3>First Name</h3>
                    <p>{Firstname}</p>
                    <h3>Last Name</h3>
                    <p>{Lastname}</p>
                    <p><img src={calendar} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" />{startDate}</p>
                    <h3>Duration</h3>
                    <p>{Duration}</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
    );

}
export default StableConfirmation