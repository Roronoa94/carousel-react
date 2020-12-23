import itemList from './components/testData'
import ItemList from './components/ItemList'
import ItemSlider from './components/ItemSlider'

import './App.css';

function App() {
  return (
    <div className="App">
     {/* <ItemList items={itemList}/>*/}
     <ItemSlider items={itemList} />
    </div>
  );
}

export default App;
