import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const OrderApproved = () => {

    return (
        <div className="flex flex-col bg-white h-full bg-opacity-80">
            <Navbar />
            <div className="mt-8 space-y-8">
                <div className="bg-white mx-8 shadow-lg py-4 rounded-lg ">
                    <div className="text-black text-3xl font-medium mx-4 bg-green-100 py-1 bg-opacity-50">
                        <p>Beställning godkänd</p>
                    </div>
                    <div className="space-y-4 text-xl font-medium">
                        <p>Du kan nu hämta ut ditt paket!</p>
                        <div className="text-base font-normal">
                            <p>Hämta och lämna på:</p>
                            <p>Kommunhuset</p>
                            <p>Nackakommunv 23</p>
                            <p>13140 Nacka</p>
                        </div>
                        <div className="font-medium text-lg">
                            Öppettider
                            <div className="font-normal text-base">
                                <p>Måndag-Onsdag - 8.00-17.00</p>
                                <p>Torsdag-Fredag - 8.00-16.30</p>
                                <p> Dag före röd dag - 8.00-12.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <img className="mx-auto" src={require('../assets/recycle.png')} />
            </div>
            <div className="mt-auto p-4">
                <button className="knapp"><Link to="/Welcome">Startsida</Link></button>
            </div>
        </div>

    );

}

export default OrderApproved;