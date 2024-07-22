import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/Logo.jpeg';
import phone from './images/phone.jpeg';
import email from './images/email.jpeg';
import instagram from './images/instagram.jpeg';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Footer(){

    const { t } = useTranslation();
     return(
    <footer className="bg-dark text-white">
    <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4 text-center mb-3" style={{marginTop:'50px'}}>
                    <img src={Logo} alt="Avatar Logo" style={{width: '250px'}} className="rounded" />
                </div>
                <div className="col-sm-4" style={{marginTop:'50px'}}>
                    <h2>{t("footer_about")}</h2>
                    <p>{t("footer_about_message")}</p>
                </div>
                <div className="col-sm-4" style={{marginTop:'50px'}}>
                    <h2>Contact Us</h2>
                    <p>14214 8 Line</p>
                    <p>Georgetown ON</p>
                    <p>L7G 4S4</p>
                    <p><img src={email} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" /> contact@haltonhillsstable.com</p>
                    <p><img src={phone} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" /> (905) 467-7890</p>
                    <p><img src={instagram} alt="Avatar Logo" style={{width: '40px'}} className="img-fluid rounded-circle" /> @haltonhillstables</p>
                </div>
            </div>
        </div>
        <div className="text-center py-3">
            <p>{t("footer_rights")}</p>
        </div>
        </footer>
    );

}

export default Footer