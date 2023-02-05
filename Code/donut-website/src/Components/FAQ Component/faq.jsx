// Imports
import Footer from "../Footer Component/Footer";
import NavBar from "../Navbar Component/NavBar";
import './faq.css';

const FaqComponent = () => {

    document.title = 'FAQ – Crave Doughnuts'; // Change Title 

    return ( 
        <>
        <NavBar />
        <div className="locationDiv">
            <header  className="qNAHeader">FAQ</header>
            <h1 className="question">Where are you located?</h1>
            <p className="answer">Crave Doughnuts is located at 102 Lupin Drive, Whitby, Ontario, Canada.</p>
            <h1 className="question">You sell out often. Why don't you make more doughnuts throughout the day?</h1>
            <p className="answer">We live by “quality over quantity” in our shop, and we understand it can be frustrating to hear that we have sold out for the day. We are doing our very best to ensure we make as many doughnuts as possible daily and not compromise on quality. Our dough needs 24 hours from start to finish and we really think it makes a difference. We update our stock levels through social media (Facebook & Instagram) and post when we are sold out so you’re kept up to date.</p>
            <h1 className="question">Are you nut free?</h1>
            <p className="answer">We are not nut free. We love incorporating nuts for texture in our doughnuts and we cannot guarantee any cross-contamination in our small shop. We are sorry for any inconvenience.</p>
            <h1 className="question">Do you accommodate allergies? </h1>
            <p className="answer">We accommodate nut allergies or religious preferences at this time. If you have an allergy, please tell us in the comment section upon pickup or email us at info@cravedoughnuts.com with your order # in the subject line. We will try our best to replace it or move those doughnuts to another box. We cannot guarantee no cross contamination. </p>
            <h1 className="question">Do you make gluten free doughnuts?</h1>
            <p className="answer">We do not offer gluten free doughnuts in our line up. Sorry!</p>
            <h1 className="question">What time does your day start?</h1>
            <p className="answer">Doughnut making usually starts around midnight to have our creations fresh and ready for you by the time we open our doors!</p>
            <h1 className="question">Why can't I find your phone number?</h1>
            <p className="answer"> We don’t have one! Send us a message via email/Instagram/Facebook to get in touch.</p>
            <h1 className="question">Do you make mini doughnuts?</h1>
            <p className="answer">No we do not make mini doughnuts at this time.</p>
            <h1 className="question">Help! I've ordered and don't have my confirmation email!</h1>
            <p className="answer">Don't worry! If you haven't received your email, please check your junk mail. If you still do not see it, please send us an email at info@cravedoughnuts.com to retrieve it! </p>
        </div>
        <Footer />
        </>
     );
}
 
export default FaqComponent;