import React, {useEffect, useState} from 'react';
import './App.css';
import {Location} from "./Models/Location";

function App() {
    const [location, setLocation] = useState(new Location());
    useEffect(() => {
        getUserCurrentLocation();
    }, []);

    function getUserCurrentLocation() {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            setLocation({
                ...location,
                lat: position.coords.latitude,
                long: position.coords.longitude,
            })
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lat: {location.lat} <br/> Long: {location.long}
                </a>
            </header>
        </div>
    );
}

export default App;
