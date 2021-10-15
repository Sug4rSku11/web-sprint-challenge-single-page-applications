import React from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function Home() {

    const history = useHistory()
    const routeToPizza = () => {
        history.push('/pizza');
    }
    
    return (
        <div className="home">
            <h2>Your favorite food, delivered while coding!</h2>
            {/* <img></img> */}
           
            <button onClick={routeToPizza}>
                <Link to="/pizza" id="order-pizza">Pizza?</Link>
            </button>
            
        </div>
    )
}