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
        <div className="navbarContent">
            <button id="navbarBtn" onClick={() => navigate(-1)}>< IoIosArrowRoundBack /></button>
            <Link to="/Welcome" id="homeLink" ><AiOutlineHome /></Link>
            <Popup
                trigger={<button className="button" id="navbarInfo"> < IoInformationCircleOutline /> </button>}
                modal
                nested
            >
                {close => (
                    < div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="content">
                            *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequuntur doloribus eveniet. Iste laborum quos earum harum, dignissimos modi obcaecati? Magnam molestiae modi non recusandae odit sed veritatis mollitia dolorum!
                            <br />
                        </div>

                    </div>
                )
                }
            </Popup >

        </div >
    )
}

export default Navbar;