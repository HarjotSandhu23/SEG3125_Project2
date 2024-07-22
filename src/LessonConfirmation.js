import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import calendar from './images/calendar.jpeg';
import time from './images/time.jpeg';

function LessonConfirmation(){

    const location = useLocation();
    const {lessonName, lessonId, FirstName, LastName, PhoneNumber, EmailAddress, Date, Time, CardName, CardNumber, CardCvc} = location.state || {};

    return(
    <div>
        <main className="container mt-5">
            <div class="alert alert-success mt-5">
                <div className="mn-4">
                    <h2>Renting Confirmation</h2>
                    <h3>First Name</h3>
                    <p>{FirstName}</p>
                    <h3>Last Name</h3>
                    <p>{LastName}</p>
                    <p><img src={calendar} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" />{Date}</p>
                    <p><img src={time} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" />{Time}</p>
                    <h3>Lesson</h3>
                    <p>{lessonName}</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
    );

}
export default LessonConfirmation