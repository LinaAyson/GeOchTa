// Logga
// Knapp
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <h2 className="text-6xl font-bold text-red-400 my-auto" >Ge & Ta</h2>
            <div className="static mb-4">
                <button className="knapp"><Link to="/LogIn">GÅ VIDARE</Link></button>
            </div>

        </div>
    );
}

export default LandingPage;
