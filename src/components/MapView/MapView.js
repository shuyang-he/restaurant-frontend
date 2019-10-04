import React from 'react';
import GoogleMapReact from 'google-map-react';

const mapView = (props) => {
    return (
        <div>
            <h1>Map</h1>
            <GoogleMapReact
                defaultCenter={{ lat: 47.444, lng: -122.176}}
                defaultZoom={8}
            />
        </div>
    );
}

export default mapView;