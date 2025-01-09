import { useState } from 'react'

// Write your Color component here
const Color = (props) => {
  const isSelected= props.selectedColor === props.color
  return <div className={`${props.color} ${isSelected? "selected" : "valueIfFalse"}`} onClick={()=> props.setSelectedColor(props.color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color 
        color="green" 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor}
      />
      <Color 
      color="blue" 
      selectedColor={selectedColor} 
      setSelectedColor={setSelectedColor}
      />
      <Color 
      color="violet" 
      selectedColor={selectedColor} 
      setSelectedColor={setSelectedColor}
      />
      </div>
    </div>
  );
};

export default App;
