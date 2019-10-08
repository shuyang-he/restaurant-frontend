import React, {Component} from 'react';
import RestaurantView from '../../components/RestaurantView/RestaurantView';
import MapView from '../../components/MapView/MapView';
import classes from './RestaurantFinder.css';

class RestaurantFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [],
            activeRestaurant: null,
        };
    }

    render() {
        return (
            <main className={classes.RestaurantFinder}>
                <RestaurantView
                    restaurantList={this.state.restaurantList}
                    activeRestaurant={this.state.activeRestaurant}
                    
                />
                <MapView
                
                />
            </main>
        );
    }
}

export default RestaurantFinder;