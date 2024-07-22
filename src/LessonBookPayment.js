import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useContext} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';


function LessonBookPayment() {

    const location = useLocation();
    const navigate = useNavigate();
    const { setData } = useContext(DataContext);
    const {lessonName, lessonId, FirstName, LastName, PhoneNumber, EmailAddress, Date, Time} = location.state || {};

    const [CardNumber, setCardNumber] = useState('');
    const [CardCvc, setCardCvc] = useState('');
    const [CardName, setCardName] = useState('');

    const LessonPayment = (e) => {
        e.preventDefault();
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
        navigate("/LessonEditPage" , {state: data});
    }

    return(

    <div>
        <main className="container mt-5">
            <form onSubmit ={LessonPayment} style={{marginBottom:'20px'}}>
                <div className="mn-4">
                    <h2>Payment Information</h2>
                        <label for="cardNumberInputText" className="form-label">Card Number:</label>
                        <input type="text" className="form-control" id="cardNumberInputText" placeholder="xxxx-xxxx-xxxx-xxxx" value = {CardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                        <label for="cardCVCInputText" className="form-label">Card CVC:</label>
                        <input type="text" className="form-control" id="cardCVCInputText" placeholder="xxx" value = {CardCvc} onChange={(e) => setCardCvc(e.target.value)} />
                        <label for="paymentNameInputText" className="form-label">Name on Card</label>
                        <input type="text" className="form-control" id="paymentNameInputText" placeholder="Name on Card" value= {CardName} onChange={(e) => setCardName(e.target.value)} />
                </div>
            <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>Next</button>
            </form>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </main>
        <Footer />
    </div>

    );
}
export default LessonBookPayment