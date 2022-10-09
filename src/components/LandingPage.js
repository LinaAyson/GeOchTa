// Logga
// Knapp
import { Link } from 'react-router-dom';
import "../style/LandingPage.css";

const LandingPage = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <h2 className="text-6xl font-bold text-red-400 my-auto" >Ge & Ta</h2>
            <div className="static mb-4">
                <button className="bg-orange-400 text-2xl rounded-lg px-16 py-2"><Link to="/LogIn">GÅ VIDARE</Link></button>
            </div>

        </div>
    );
}

export default LandingPage;
