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
        <div className="flex flex-col h-full overflow-scroll bg-white bg-opacity-80">
            <Navbar />
            <div className="mt-3 text-4xl font-bold text-black">
                <p>Välj paket</p>
            </div>
            <div className="m-6 mt-6 text-lg font-normal bg-opacity-70 bg-slate-50 rounded-xl">
                <p>Välj mellan 3 olika storlekar nedan. </p>
                <p>Alla klädpaket kommer i mixade färger.</p>
            </div>
            <p className="mt-4 text-xl font-semibold">Välj storlek</p>
            <div className="px-8 mt-4 mb-4 space-y-4 ">
                {/* Foreach package make a accordion and include package  */}
                {packages.map((p, i) =>
                    <MyAccordion key={i} p={p} />
                )}
            </div>
        </div>);
}

export default Select;