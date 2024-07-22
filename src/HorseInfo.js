import { useContext } from 'react';
import { DataContext } from './DataContext';
import LeaseCalculator from './LeaseCalculator';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function HorseInfo() {
  const { data: horse } = useContext(DataContext);
  const navigate = useNavigate();

  if (!horse) {
    return <p>No horse selected.</p>;
  }

  const goBack = () => {
    navigate('/buylease');

  }



  return (
  <div>
    <div className="container mt-5" style={{marginTop: '20px'}}>
        <div className="row">
            <div className="col" style={{marginTop: '40px'}}><button className="btn btn-primary" onClick={goBack}>Back</button></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
        </div>
        <div className="row" style={{marginTop: '5px'}}>
            <div className="col-sm" style={{marginTop: '20px'}}>
                <h1>{horse.name}</h1>
                <img src={horse.img} alt={horse.name} className="img-fluid mb-4" />
            </div>
            <div className="col-sm" style={{marginTop: '100px'}}>
                <p><strong>Horse Description: </strong>{horse.description}</p>
                <p><strong>Breed:</strong> {horse.breed}</p>
                <p><strong>Price:</strong> ${horse.price}</p>
                <p><strong>Age:</strong> {horse.age}</p>
                <p><strong>Date of Birth:</strong> {horse.dob}</p>
                <p><strong>Purchase Option:</strong> {horse.purchaseoption}</p>
            </div>
        </div>
      <LeaseCalculator price={horse.price} />
      </div>
      <Footer />
    </div>
  );
}

export default HorseInfo;
