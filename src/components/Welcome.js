// Navbar
// Information om person
// Knapp
import { Link } from "react-router-dom";
import "../style/Welcome.css";
import Navbar from "./Navbar";
const Welcome = () => {
    return (<div>
        <Navbar />
        <p>Välkommen Anna</p><Link to="/Select">VÄLJ PAKET</Link></div>);
}

export default Welcome;