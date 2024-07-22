import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'

function FAQ() {

    return(
    <div>
        <main className = "container mt-5" style={{marginTop:'50px'}}>
            <h3>What types of riding lessons do you offer and what are the costs?</h3>
            <p>We offer a variety of riding lessons tailored to different skill levels, from beginners to advanced riders. Our lessons include private, semi-private, and group sessions. Prices vary based on the type and duration of the lesson. For a detailed list of lesson types and prices, please visit our Lessons page or contact us directly.</p>
            <h3>How can I rent a stable, and what are the rental terms?</h3>
            <p>Renting a stable at our facility is simple. You can browse the available stables on our website and select the one that suits your needs. Our rental terms include monthly or yearly options, with services such as daily feeding, cleaning, and turnout. For more information on availability and pricing, please visit our Stable Rental page or get in touch with our team.</p>
            <h3>Can I view and purchase horses online, and how does the buying process work?</h3>
            <p>Yes, you can view our horses for sale directly on our website. Each horse's profile includes detailed information, photos, and videos. If you are interested in purchasing a horse, you can schedule a visit to meet the horse in person. Our team will guide you through the buying process, including vet checks and transportation arrangements. For more details, please visit our Horses for Sale page or contact us.</p>
        </main>
    <Footer />
    </div>

    );

}
export default FAQ