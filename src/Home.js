import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './BackgroundSection';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Home(){

    const { t } = useTranslation();
    return(
    <div className = 'Home'>
        <Background />
        <main className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>{t("choose_us")}</h3>
                        <p>c{t("choose_us_message")}</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>{t("commitment")}</h3>
                        <p>{t("commitment_message")}</p>
                    </div>
                </div>
        </main>
        <Footer />
    </div>
    )
}

export default Home