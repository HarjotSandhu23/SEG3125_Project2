import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useContext} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';


function LessonEditPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const { setData } = useContext(DataContext);
    const {
        lessonName,
        lessonId,
        FirstName:intialF,
        LastName:intialL,
        PhoneNumber:intialP,
        EmailAddress:intialE,
        Date:intialD,
        Time:intialT,
        CardName:intialCName,
        CardNumber:intialCNum,
        CardCvc:intialCC} = location.state || {};

    const [FirstName, setFirstName] = useState(intialF || '');
    const [LastName, setLastName] = useState(intialL || '');
    const [PhoneNumber, setPhoneNumber] = useState(intialP || '');
    const [EmailAddress, setEmailAddress] = useState(intialE || '');
    const [Date, setDate] = useState(intialD || '');
    const [Time, setTime] = useState(intialT || '');
    const [CardNumber, setCardNumber] = useState(intialCNum || '');
    const [CardCvc, setCardCvc] = useState(intialCC || '');
    const [CardName, setCardName] = useState(intialCName || '');
    const [isDisabled, setisDisabled] = useState(true);


    const changeDisabled = () => {
        setisDisabled(false);
    }
    const validateEmail = (EmailAddress) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(EmailAddress);
    }

    const nextPage = (e) => {
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
        if (!CardName) {
             window.alert("Please enter payment card name");
             return;
        }
        if (!CardNumber || CardNumber.length !==16 || isNaN(CardNumber)){
            window.alert("Please enter a valid card number");
        }
        if (!CardCvc || CardCvc.length !== 3 || isNaN(CardCvc)){
            window.alert("Please enter a valid cvc number");
            return;
        }
        const data = {lessonName, lessonId, FirstName, LastName, PhoneNumber, EmailAddress, Date, Time, CardName, CardNumber, CardCvc};
        console.log(data);
        navigate("/LessonConfirmation", {state: data});
    }


    return(

    <div>
        <main className="container mt-5">
        <div className="row">
            <div className="col">
                <form>
                    <label for="firstNameInputText" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstNameInputText" placeholder="First Name" value = {FirstName} onChange={(e) => setFirstName(e.target.value)} disabled={isDisabled} />
                    <label for="lastNameInputText" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastNameInputText" placeholder="Last Name" value = {LastName} onChange={(e) => setLastName(e.target.value)} disabled={isDisabled} />
                    <label for="emailAddressInputText" className="form-label">Email Address</label>
                    <input type="text" className="form-control" id="emailaddressInputText" placeholder="Email Address" value= {EmailAddress} nChange={(e) => setEmailAddress(e.target.value)} disabled={isDisabled} />
                    <label for="phoneNumberInputText" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="phoneNumberInputText" placeholder="Phone Number" value = {PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={isDisabled} />
                    <label for="dateInput" className="form-label">Date of Lesson:</label>
                    <input type="date" className="form-control" id="dateInput"  value={Date} onChange={(e) => setDate(e.target.value)} disabled={isDisabled} />
                    <label for="timeInput" className="form-control">Time of Lesson:</label>
                    <input type="time" className="form-control" id="timeInput"  value={Time} onChange={(e) => setTime(e.target.value)} disabled={isDisabled} />
                </form>
            </div>
            <div className="col">
                <form>
                    <label for="cardNumberInputText" className="form-label">Card Number:</label>
                    <input type="text" className="form-control" id="cardNumberInputText" placeholder="Card Number" value = {CardNumber} onChange={(e) => setCardNumber(e.target.value)} disabled={isDisabled}/>
                    <label for="cardCVCInputText" className="form-label">Card CVC:</label>
                    <input type="text" className="form-control" id="cardCVCInputText" placeholder="Card CVC" value = {CardCvc} onChange={(e) => setCardCvc(e.target.value)}  disabled={isDisabled}/>
                    <label for="paymentNameInputText" className="form-label">Name on Card</label>
                    <input type="text" className="form-control" id="paymentNameInputText" placeholder="Name on Card" value= {CardName} onChange={(e) => setCardName(e.target.value)}  disabled={isDisabled}/>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" style={{marginTop:'20px'}} onClick={changeDisabled}>Edit</button>
            </div>
            <div className="col">
                <button className="btn btn-primary" style={{marginTop:'20px'}} onClick={nextPage}>Confirm</button>
            </div>
        </div>
        <div className="progress" style={{marginTop:'25px', marginBottom:'25px'}}>
          <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </main>
        <Footer />
    </div>
    )

}
export default LessonEditPage