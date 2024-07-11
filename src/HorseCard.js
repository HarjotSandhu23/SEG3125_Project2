import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function HorseCard( {horse} ){
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setData(horse);
    navigate('/HorseInfo');
  };

    return(
        <div className="card mb-3">
          <img className="card-img-top" src={horse.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{horse.name}</h5>
            <p className="card-text">Price: {horse.price}</p>
            <button className="btn btn-primary" onClick={handleSubmit}>More Info</button>
          </div>
        </div>
    );
}
export default HorseCard