import Navbar from "./Navbar";
import MyAccordion from "./MyAccordion";
import { useEffect, useState } from "react";



const Select = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const getPackages = async () => {
            const response = await fetch(
                "http://localhost:3001/packages"
            ).then((response) => response.json());
            // update the state
            setPackages(response);
        };
        getPackages();
    }, [])

    return (
        <div className="flex flex-col bg-white h-full bg-opacity-80 ">
            <Navbar />
            <div>
                <p className="text-black text-4xl font-bold mt-3">Välj paket</p>
            </div>
            <div className="font-normal mt-6 text-lg bg-slate-200 rounded-xl m-6">
                <p>Välj mellan 3 olika storlekar nedan. </p>
                <p>Alla klädpaket kommer i mixade färger.</p>
            </div>
            <p className="font-semibold text-xl mt-4">Välj storlek</p>
            <div className="mt-4 space-y-4 px-8 ">
                {/* Foreach package make a accordion and include package  */}
                {packages.map((p, i) =>
                    <MyAccordion key={i} p={p} />
                )}
            </div>
        </div >);
}

export default Select;