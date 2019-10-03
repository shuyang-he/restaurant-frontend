import React from 'react';
import RestaurantFinder from './containers/RestaurantFinder/RestaurantFinder';
import Auxiliary from './hocs/Auxiliary/Auxiliary';
import './App.css';

function App() {
  return (
    <Auxiliary className="App">
      <RestaurantFinder
          
      />
    </Auxiliary>
  );
}

export default App;
