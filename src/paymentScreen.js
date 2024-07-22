import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PaymentScreen(){

    const location = useLocation();
    const navigate = useNavigate();
    const {numHorses, Duration, startDate, Firstname, Lastname, Emailaddress, phoneNumber, Breed, dob} = location.state || {};

    const [PaymentName, setPaymentName] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [CardCVC, setCardCVC] = useState('');

    const payment = (e) => {
        e.preventDefault();
        if (!PaymentName) {
             window.alert("Please enter payment card name");
             return;
        }
        if (!CardNumber || CardNumber.length !=16 || isNaN(CardNumber)){
            window.alert("Please enter a valid card number");
        }
        if (!CardCVC || CardCVC.length != 3 || isNaN(CardCVC)){
            window.alert("Please enter a valid cvc number");
            return;
        }
        const data = {numHorses, Duration, startDate, Firstname, Lastname, Emailaddress, phoneNumber, Breed, dob, PaymentName, CardNumber, CardCVC};
        console.log(data);
        navigate("/ConfirmationScreen" , {state: data});
    }

    return(
    <div>
        <main className="container mt-5">
            <form onSubmit ={payment}>
                <div className="mn-4">
                    <h2>Payment Information</h2>
                        <label for="cardNumberInputText" className="form-label">Card Number:</label>
                        <input type="text" className="form-control" id="cardNumberInputText" placeholder="xxxx-xxxx-xxxx-xxxx" value = {CardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                        <label for="cardCVCInputText" className="form-label">Card CVC:</label>
                        <input type="text" className="form-control" id="cardCVCInputText" placeholder="xxx" value = {CardCVC} onChange={(e) => setCardCVC(e.target.value)} />
                        <label for="paymentNameInputText" className="form-label">Name on Card</label>
                        <input type="text" className="form-control" id="paymentNameInputText" placeholder="Name on Card" value= {PaymentName} onChange={(e) => setPaymentName(e.target.value)} />
                </div>
            <button type="submit" className="btn btn-primary">Next</button>
            </form>
        </main>
        <Footer />
    </div>
    );
}
export default PaymentScreen