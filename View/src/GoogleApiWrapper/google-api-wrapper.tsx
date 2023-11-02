import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function GoogleApiWrapper(props: any) {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY || '';

    const { isLoaded } = useLoadScript({
        googleMapsApiKey,
    });

    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    const mapStyles = {
        width: '100%',
        height: '400px',
    };

    return (
        <div className="mapStyles">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                >
                    <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                </GoogleMap>
            )}
        </div>
    );
}

export default GoogleApiWrapper;
