import React, {useEffect, useState} from 'react';
import './App.css';
import {Location} from "./Models/Location";
import Message from "./Message/message";

function App() {
    const [location, setLocation] = useState(new Location());
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getUserCurrentLocation();
    }, []);

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
        <div className="App">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Lat: {location.lat} <br/> Long: {location.long}
            </a>
            <Message message={message} errorMessage={errorMessage}></Message>

        </div>

    );
}

export default App;
