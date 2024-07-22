import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './BackgroundSection';
import Footer from './Footer';

function Home(){
    return(
    <div className = 'Home'>
        <Background />
        <main className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Why Choose Us</h3>
                        <p>At Halton Hills Stable, we provide expert training, state-of-the-art facilities, and comprehensive care for both horses and riders. Our experienced trainers offer personalized programs for all skill levels, while our professional staff ensures the well-being of every horse. Nestled in the scenic landscapes of Halton Hills, we offer a welcoming community and diverse programs, from riding lessons to boarding and training. Join us for an unparalleled equestrian experience where safety, skill development, and a supportive environment are our top priorities.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Our Commitment</h3>
                        <p>At Halton Hills Stable, our commitment is to excellence in every aspect of equestrian care and training. We are dedicated to providing a safe, supportive, and enriching environment for both horses and riders. Our experienced team is passionate about delivering personalized training programs, top-notch facilities, and comprehensive care to ensure the well-being and development of our equestrian community. We strive to foster a sense of camaraderie and community, where every member feels valued and supported. Your goals, safety, and happiness are our top priorities, and we are devoted to helping you and your horse achieve your fullest potential.</p>
                    </div>
                </div>
        </main>
        <Footer />
    </div>
    )
}

export default Home