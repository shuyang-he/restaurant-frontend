import React from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './MapView.css';

const mapView = (props) => {
    return (
        <div className={classes.MapView}>
            <h1>Map</h1>
            <GoogleMapReact className={classes.Map}
                bootstrapURLKeys={{ key: 'AIzaSyBqGhccmsNetVo04vLhqIycG60G6llLW78' }}
                defaultCenter={{ lat: 47.444, lng: -122.176}}
                defaultZoom={8}
            />
        </div>
    );
}

export default mapView;