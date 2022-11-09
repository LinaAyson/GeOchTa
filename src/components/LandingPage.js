
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col w-full h-full">

            <h2 className="my-auto rounded-full mx-12 text-6xl font-bold py-2 text-[#2e4f54] bg-[#faf0dc]" >-Ge & Ta-</h2>

            <div className="static mb-8">
                <button className="m-2 knapp"><Link to="/LogIn">LOGGA IN</Link></button>
                <p className="rounded-md mx-12 py-1 font-medium  italic text-[#2e4f54] bg-[#ecd8ae]" >I samarbete med Nacka Kommun</p>
            </div>

        </div>
    );
}

export default LandingPage;
