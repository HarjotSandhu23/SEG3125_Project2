import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundimg from './images/HomeBackground.jpeg';
import { useNavigate } from 'react-router-dom';
import './custom.css'

function BackgroundImage(){
    const sectionStyle = {
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        marginTop: '5px'
    }
    const imgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1'
    }
    const contentStyle = {
         position: 'relative',
         width: '700px',
         background: 'rgba(0, 0, 0, 0.5)',
         color: 'white',
         padding: '10px',
         zIndex: '1'
    }

    const navigate = useNavigate();

    const lessonBook = () => {

        navigate('/Lesson');

    }

    const rentStable = () => {
        navigate('/RentStable');
    }

    const viewHorses = () => {
        navigate('/buylease');
    }


    return(
        <div className="BackgroundImage" style={sectionStyle}>
            <img src= {backgroundimg} alt="Background image" style={imgStyle} />
            <div className="content" style={contentStyle}>
                <h2>WELCOME TO HALTON HILLS STABLE</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={lessonBook}>BOOK A LESSON</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={rentStable}>RENT A STABLE</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={viewHorses}>VIEW OUR HORSES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BackgroundImage