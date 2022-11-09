import { Link, useNavigate } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoIosArrowRoundBack } from 'react-icons/io'
import React from 'react';
import Popup from 'reactjs-popup';
import "../style/Navbar.css"



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between px-4 py-2 bg-orange-300">
            <button className="text-4xl" id="" onClick={() => navigate(-1)}>< IoIosArrowRoundBack /></button>
            <Link to="/Welcome" id="homeLink" ><AiOutlineHome /></Link>

            <Popup trigger={<button className="button" id="navbarInfo">< IoInformationCircleOutline /></button>} position="bottom right">
                <div className="p-4 m-2 bg-orange-200 rounded-md"><p>Upplever du problem med appen?</p> <p>Skicka mejl till:</p><p><a href="mailto:josefin@yoursite.com?subject=Problem med appen">josefin.sjostrand@nackakommun.se</a>
                </p></div>
            </Popup>




        </div >
    )
}

export default Navbar;