import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Select = () => {
    return (<div className="flex flex-col bg-white h-full bg-opacity-80">
        <Navbar />
        <div className="mt-8 space-y-4 px-8">
            <div>
                <h1 className="text-black text-4xl font-bold">Våra paket</h1>
            </div>
            <p className="font-semibold">Välj mellan 3 olika storlekar nedan. Alla paket kommer i blandade färger.</p>
            <p className="font-semibold">Välj storlek</p>
            <div className="bg-yellow-100 rounded-lg p-4 text-md flex justify-between font-semibold">
                Storlek 44-50
                <svg xmlns="http://www.w3.org/2000s/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="bg-violet-300 rounded-lg p-4 px-4 text-md flex justify-between font-semibold">
                Storlek 44-50
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="bg-blue-300 rounded-lg p-4 text-md flex justify-between font-semibold">
                Storlek 44-50
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="text-black mt-8" >
                <Link className="text-black mt-8 font-bold" to="/Confirm">Bekräfta order</Link>
            </div>
        </div >
    </div >);
}

export default Select;