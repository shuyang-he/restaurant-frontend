import React from 'react';
import classes from './RestaurantView.css';

const restaurantView = (props) => {
    return (
        <div className={classes.RestaurantView}>
            <h1>Restaurants</h1>
            <div>List Space</div>
        </div>
    );
}

export default restaurantView;