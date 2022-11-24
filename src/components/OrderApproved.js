import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Iframe from "react-iframe";

const OrderApproved = () => {
    return (
        <div className="flex flex-col h-full overflow-scroll bg-white bg-opacity-80">
            <Navbar />
            <div className="mt-8 space-y-8">
                <div className="py-4 mx-8 rounded-lg shadow-lg bg-neutral-50 ">
                    <div className="py-1 mx-4 text-3xl font-medium text-black bg-green-100 bg-opacity-50">
                        <p>Beställning godkänd</p>
                    </div>
                    <div className="mt-1 space-y-4 text-xl font-medium">
                        <p>Du kan nu hämta ut ditt paket!</p>
                        <div className="text-base font-normal">
                            <p className="font-medium">Hämta och lämna på:</p>
                            <p>Nacka Stadshus, Stadshusvägen 24</p>
                        </div>
                        <div className="text-base font-medium">
                            Öppettider
                            <div className="text-base font-normal">
                                <p>Måndag-Fredag - 8.00-17.00</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.4355533246655!2d18.1577626164606!3d59.30898368165165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f787eeb75c323%3A0x17efa67508ee0fb1!2sNacka%20Stadshus!5e0!3m2!1ssv!2sse!4v1667297206807!5m2!1ssv!2sse" width="300" height="200" style="border:0" referrerPolicy="no-referrer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-auto">
                <Link to="/Welcome">
                    <img className="mx-auto h-36 w-46" src={require('../assets/nackakmn.png')} />
                </Link>
            </div>
        </div>

    );

}

export default OrderApproved;

