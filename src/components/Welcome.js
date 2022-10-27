import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";





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
        <div className="flex flex-col bg-white h-full bg-opacity-80">
            <Navbar />
            <div className="mt-8 space-y-8">
                <div className="text-black text-4xl font-medium">
                    {parent && <h1>Välkommen {parent.name}!</h1>}</div>
                <div className="bg-white mx-8 shadow-lg py-4 rounded-lg">{parent &&
                    <div className="space-y-4 text-xl">
                        <div>
                            <p>Du har <span className="font-medium">{parent.children.length}</span> barn registrerat</p>
                            <p>som är <span className="font-medium">{parent.children[0].age}</span> gammal.</p>
                        </div>
                        <div>
                            <p>Din registrerade adress är:</p>
                            <p>{parent.adress}</p>

                        </div>
                        <p className="text-orange-300 underline">Stämmer inte dina uppgifter?</p>
                    </div>
                }
                </div>
            </div>
            <div className="bg-green-100 shadow-lg bg-opacity-60 mx-10 mt-8 p-3">{selectedPackage && <p className="italic font-medium"> Du har 1 paket registrerat "{selectedPackage.size}"  </p>}
            </div>
            <div className="mt-auto p-4">
                <button className="knapp" ><Link to="/Select">GÅ VIDARE</Link></button>
            </div>


        </div >);


}

export default Welcome;