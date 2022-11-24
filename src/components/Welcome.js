import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const Welcome = () => {
    const [parent, setParent] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(false);

    useEffect(() => {
        const getParent = async () => {
            const response = await fetch(
                "http://localhost:3001/parents/0"
            ).then((response) => response.json());
            // update the state
            if (response.selectedPackage != null && response.termsConfirmed) {
                getSelectedPackage(response.selectedPackage);
            }
            await setParent(response);
        };
        const getSelectedPackage = async (id) => {
            const response = await fetch(
                `http://localhost:3001/packages/${id}`
            ).then((response) => response.json());
            // update the state
            setSelectedPackage(response);
        };
        getParent();
    }, []);

    return (
        <div className="flex flex-col w-screen h-full overflow-scroll bg-white bg-opacity-70">
            <Navbar />
            <div className="mt-8 space-y-8">
                <div className="mx-16 text-4xl font-medium text-gray-900 rounded-lg bg-neutral-50 opacity-80 ">
                    {parent && <h1>Välkommen<p className="pb-1 text-3xl text-orange-400">{parent.name} {parent.surName}</p> </h1>}</div>
                <div className="py-4 mx-8 rounded-lg shadow-lg bg-neutral-50">{parent &&
                    <div className="space-y-4 text-xl">
                        <div>
                            <p>Du har <span className="font-medium">{parent.children.length}</span> barn registrerat</p>
                            <p>som är <span className="font-medium">{parent.children[0].age}</span> gammal.</p>
                        </div>
                        <div>
                            <p>Din registrerade adress är:</p>
                            <p>{parent.adress}</p>
                        </div>
                        <Popup trigger={<button><p className="text-orange-300 underline">Stämmer inte dina uppgifter?</p></button>} position="center">
                            <div className="bg-orange-200 rounded-md ">
                                <div className="py-2 mx-8"><p>Ta kontakt med Eva Nygren</p>
                                    <p>Telefonnummer: 08-7464687</p><p>Skicka mejl till:</p>
                                    <p><a href="mailto:eva@yoursite.com?subject=Felaktiga uppgifter">eva.nygren@nackakommun.se</a> </p></div>
                            </div>
                        </Popup>
                    </div>
                }
                </div>
            </div>
            <span>{selectedPackage && <p className="italic font-medium "> <div className="packageShow"> Du har 1 paket registrerat "{selectedPackage.size}" </div>  </p>}
            </span>
            <div className="p-4 mt-auto">
                <button className="knapp" ><Link to="/Select">GÅ VIDARE</Link></button>
            </div>
        </div>);
}

export default Welcome;