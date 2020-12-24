import itemList from './components/testData'
import ItemSlider from './components/ItemSlider'

import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
     <ItemSlider items={itemList} />
    </div>
  );
}

export default App;
