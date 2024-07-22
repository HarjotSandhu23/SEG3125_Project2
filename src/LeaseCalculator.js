import {useState} from 'react';


function LeaseCalculator({price}){
    const [Duration, onDurationChange] = useState('');
    const [LeaseCost, onLeaseChange] = useState('');
    const [DownPayment, onDownPaymentChange] = useState('');
    const rate = 0.02;

    const calculateLease = (e) => {
    const months = parseFloat(Duration);
    const cost = months * rate * (price-DownPayment);
    const costmonth = cost/months;
    onLeaseChange(costmonth);
    }

    return(
    <div className="Lease Calculator">
            <div className="Lease Form Group">
                <select className="form-control mb-2" value={Duration} onChange={(e) => onDurationChange(e.target.value)}>
                    <option value="">Lease Duration (Months)</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="60">60</option>
                    <option value="72">72</option>
                    <option value="84">84</option>
                </select>
                <select className="form-control mb-2" value={DownPayment} onChange={(e) => onDownPaymentChange(e.target.value)}>
                    <option value="">Down Payment</option>
                    <option value="1000">$1000</option>
                    <option value="1500">$1500</option>
                    <option value="2000">$2000</option>
                    <option value="2500">$2500</option>
                    <option value="3000">$3000</option>
                    <option value="4000">$4000</option>
                </select>
            </div>
        <button onClick={calculateLease}>Calculate</button>
        <div>
            <h3>Lease: ${LeaseCost} / Month</h3>
        </div>
    </div>
    );
}

export default LeaseCalculator