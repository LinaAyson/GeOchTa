// Navbar
// Information om person
// Knapp
import { Link } from "react-router-dom";
import "../style/Welcome.css";
import "../style/Button.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";




const Welcome = () => {

    const [parent, setParent] = useState(null);

    useEffect(() => {
        const getParent = async () => {
            const response = await fetch(
                "http://localhost:3001/parents/0"
            ).then((response) => response.json());
            // update the state
            setParent(response);
        };
        getParent();
    }, [])

    return (<div>
        <Navbar />
        <div className="wlc-content">

            <div className="wlc-header">{parent && <h1>Välkommen {parent.name}</h1>}

            </div>
            <div className="wlc-box">{parent &&
                <div>
                    <p>Du har {parent.children.length} barn registrerat</p>
                    <p>som är {parent.children[0].age} gammalt.</p>
                    <p>Din registrerade adress är:</p>
                    <p>{parent.adress}</p>
                    <a href="#">Stämmer inte dina uppgifter?</a>
                </div>
            }
            </div>
            <button className="btn"><Link to="/Select">GÅ VIDARE</Link></button>
        </div>

    </div>);


}

export default Welcome;