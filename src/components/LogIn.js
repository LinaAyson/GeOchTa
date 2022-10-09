// Firebase LogIn eller FejkLogIn
import { Link } from "react-router-dom";
import "../style/Login.css";

const LogIn = () => {
    return (<div>
        <Link to="/Welcome">
            <img className="w-full" src={require('../assets/identifiering.png')} />
        </Link>


    </div>);
}

export default LogIn;