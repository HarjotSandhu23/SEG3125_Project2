import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import HorseCard from './HorseCard';
import HorseFilter from './HorseFilter';
import {horsedata} from './HorseData';
import Footer from './Footer';

function BuyLease(){
    const [breedType, setBreedType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [purchaseType, setPurchaseType] = useState('');

    const handlePrice = (type, value) => {
        if (type === 'min'){
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    }

    const handleAge = (type, value) => {
        if(type === 'min'){
            setMinAge(value);
        } else {
            setMaxAge(value);
        }
    }

    const handleBreed = (type) => {
        setBreedType(type);
    }

    const handlePurchase = (type) => {
        setPurchaseType(type);
    }

    const filteredHorses = horsedata.filter((horse) => {
        return(
        (breedType === '' || horse.breed === breedType) &&
        (minPrice === '' || horse.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || horse.price <= parseFloat(maxPrice)) &&
        (minAge === '' || horse.age >= parseFloat(minAge)) &&
        (maxAge === '' || horse.age <= parseFloat(maxAge)) &&
        (purchaseType === '' || horse.purchaseoption === purchaseType || horse.purchaseoption === 'Buy or Lease')
        );
    });

    return(
    <div>
        <div className="container mt-5">
        <h1>Horses</h1>
        <HorseFilter
            breedType={breedType}
            onbreedTypeChange={handleBreed}
            minPrice={minPrice}
            maxPrice={maxPrice}
            minAge={minAge}
            maxAge={maxAge}
            onPriceChange={handlePrice}
            onAgeChange={handleAge}
            onpurchaseTypeChange = {handlePurchase}
        />
        <div className="row">
            {filteredHorses.map((horse) => (
            <div className="col-md-4">
                <HorseCard key={horse.id} horse={horse} />
            </div>
         ))}
        </div>
    </div>
    <Footer />
    </div>
    )
}

export default BuyLease