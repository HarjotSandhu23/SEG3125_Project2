import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundimg from './images/HomeBackground.jpeg';
import { useNavigate } from 'react-router-dom';
import './custom.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

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

    const { t } = useTranslation();


    return(
        <div className="BackgroundImage" style={sectionStyle}>
            <img src= {backgroundimg} alt="Background image" style={imgStyle} />
            <div className="content" style={contentStyle}>
                <h2>{t("background_message")}</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={lessonBook}>{t("background_book")}</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={rentStable}>{t("background_rent")}</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary ms-auto" onClick={viewHorses}>{t("background_horse")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BackgroundImage