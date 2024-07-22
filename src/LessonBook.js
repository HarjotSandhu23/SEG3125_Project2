import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
import { useLocation } from 'react-router-dom';

function LessonBook() {

    const location = useLocation();
    const navigate = useNavigate();
    const {lessonName, lessonId} = location.state || {};

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');
    const [visible, setvisible] = useState(false);

    const additionalMembers = () => {
        setvisible(true);
    }

    const validateEmail = (EmailAddress) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(EmailAddress);
    }

    const lessonBook = (e) => {
        e.preventDefault();
        if (!FirstName){
            window.alert("Please enter first name");
            return;
        }
        if (!LastName){
            window.alert("Please enter last name");
            return;
        }
        if (!EmailAddress || !validateEmail(EmailAddress)){
            window.alert("Please enter Email Address");
            return;
        }
        if (!PhoneNumber){
            window.alert("Please enter phone number");
            return;
        }
        if (PhoneNumber.length !== 10){
            window.alert("Please enter a 10-digit phone number");
            return;
        }
        if (isNaN(PhoneNumber)){
            window.alert("Please enter a valid phone Number");
            return;
        }
        if (!Date){
            window.alert("Please enter a date");
            return;
        }
        if (!Time) {
            window.alert("Please enter a valid time");
            return;
        }

        const data = {lessonName, lessonId, FirstName, LastName, PhoneNumber, EmailAddress, Date, Time};
        console.log(data);
        navigate("/LessonBookPayment" , {state: data});
    }


    return(

    <div>
        <main className="container mt-5">
        <form onSubmit = {lessonBook}>
            <div>
                <label for="firstNameInputText" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="firstNameInputText" placeholder="First Name" value = {FirstName} onChange={(e) => setFirstName(e.target.value)} />
                <label for="lastNameInputText" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastNameInputText" placeholder="Last Name" value = {LastName} onChange={(e) => setLastName(e.target.value)} />
                <label for="emailAddressInputText" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="emailaddressInputText" placeholder="xxxx@xxxxx.com" value= {EmailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                <label for="phoneNumberInputText" className="form-label">Phone Number:</label>
                <input type="text" className="form-control" id="phoneNumberInputText" placeholder="(xxx)-xxx-xxxx" value = {PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label for="dateInput" className="form-label">Date of Lesson:</label>
                <input type="date" className="form-control" id="dateInput" value={Date} onChange={(e) => setDate(e.target.value)} />
                <label for="timeInput" className="form-control">Time of Lesson:</label>
                <input type="time" className="form-control" id="timeInput" value={Time} onChange={(e) => setTime(e.target.value)} />
            </div>
            {visible && (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h3>Member 1</h3>
                        <label for="firstNameMember1" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstNameMember1" placeholder="First Name"></input>
                        <label for="lastNameMember1" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastNameMember1" placeholder="Last Name"></input>
                    </div>
                    <div className="col">
                        <h3>Member 2</h3>
                        <label for="firstNameMember1" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstNameMember1" placeholder="First Name"></input>
                        <label for="lastNameMember1" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastNameMember1" placeholder="Last Name"></input>
                    </div>
                    <div className="col">
                        <h3>Member 3</h3>
                        <label for="firstNameMember1" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstNameMember1" placeholder="First Name"></input>
                        <label for="lastNameMember1" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastNameMember1" placeholder="Last Name"></input>
                    </div>
                </div>
            </div>
            )}
            <div className="row" style={{marginTop: '40px', marginBottom:'20px'}}>
                <div className="col">
                <button className="btn btn-primary" onClick={additionalMembers}>Add Additional Members</button>
                </div>
                <div className="col">
                <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </div>
        </form>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </main>
    </div>

    );


}
export default LessonBook