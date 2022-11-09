import React from "react";
import { TextField } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import pic from "../assets/nackakmn.png";



const LogIn = () => {

    return (
        <div className="p-4 mx-16 bg-orange-300 rounded-md mt-80">
            <form noValidate autoComplete="off">
                <div className="mt-4 space-y-8">
                    <TextField className="rounded-md login"
                        id="filled-basic"
                        color="warning"
                        label="Användarnamn"
                        type="text"
                        variant="filled"
                        placeholder="Anna" />
                </div>

                <div className="mt-1 space-y-8">
                    <TextField className="rounded-md login"
                        id="password"
                        color="warning"
                        label="Lösenord"
                        type="number"
                        variant="filled"
                        placeholder="1234" />
                </div>
                <div className="p-1">
                    <Button className="" id="knapp" type="submit" variant="contained">
                        <Link to="/Welcome"> Logga in</Link></Button>
                    <a href="../"><img src={pic} /> </a>

                </div>
            </form >
        </div >
    );
};

export default LogIn;