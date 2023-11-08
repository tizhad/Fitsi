import React, {useState} from 'react';
import './App.css';
import {Location} from "./Models/Location";
import Message from "./Message/message";
import Home from "./components/Home/Home";

function App() {
    const [location, setLocation] = useState(new Location());
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function getUserCurrentLocation() {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            setLocation({
                ...location,
                lat: position.coords.latitude,
                long: position.coords.longitude,
            });
            setMessage('Location received successfully!')
        }, (error) => {
            setErrorMessage(error.message);
        })
    }


    return (

        <div className="App m-4">
            <Message message={message} errorMessage={errorMessage}></Message>
            <Home></Home>
            <button className="btn btn-outline-primary m-2">Add Your Restaurant</button>
            <button className='btn btn-primary' onClick={getUserCurrentLocation}>Get Location</button>
            {location ? (
                <div>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lat: {location.lat} <br/> Long: {location.long}
                    </a>

                </div>

            ) : null}

        </div>

    );
}

export default App;
