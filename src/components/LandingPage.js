// Logga
// Knapp
import { Link } from 'react-router-dom';
import "../style/LandingPage.css";

const LandingPage = () => {
    return (
        <div>
            <h2>GE & TA</h2>
            <Link to="/LogIn"><p><button>LOGGA IN</button></p></Link>

        </div>
    );
}

export default LandingPage;
