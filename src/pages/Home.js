import React from 'react' //rfce
import { Link } from 'react-router-dom';
import Background from '../assests/pizza.jpeg';

const Home = () => {
    return (
        <div className="home" style={{backgroundImage: `url(${Background})`}}>
            <div className="headerContainer" >
                <h1>Ravish Pizzaria</h1>
                <p> PIZZA TO FIT ALL TASTE</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default Home
