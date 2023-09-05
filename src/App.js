import React, { useState } from 'react';
import OnePictureSlider from "./components/Slider"
import Navbar from "./components/Navbar"
import Selectrank from "./components/Selectrank"
import SelectAge  from "./components/SelectAge"



const App = () => {

  // Initialize state to store the selected rank
  const [selectedRank, setSelectedRank] = useState('');

  // Callback function to update the selected rank
  const handleRankChange = (value) => {
    setSelectedRank(value);
  };

 // Initialize state to store the selected age
  const [selectedAge, setSelectedAge] = useState('');

 // Callback function to update the selected age
  const handleAgeChange = (value) => {
    setSelectedAge(value);
  };



  const [extramoney, setExtramoney] = useState("0")

  return <>
          <Navbar />
          <div className="slider">
            <OnePictureSlider />
          </div>
          
          <div className="calculator_wrap">
            <form className="form-wrap">
              <h2>Výpočet výsluhového příspěvku vojaků AČR</h2>
              
              <Selectrank onSelect={handleRankChange}/>
            
              <SelectAge onSelect={handleAgeChange}/>
              
              <div className="input-wrap">
                <label for="extraMoney">Výkonnostní příspěvek</label>
                <input type="number" min="0" max="20" step="0.5" id="extraMoney" value={extramoney} onChange={ (event) => {
                  event.preventDefault()
                  setExtramoney(event.target.value)
                  }
                }/>
                              
              </div>
              
              <input type="submit" value="Spočítat" />

            </form>

            <div id="helmet">
              <h2>Vase Renta</h2>
              <p>Vaše hodnost: {selectedRank}</p>
              <p>Odsloužené roky: {selectedAge}</p>
              <p>Výkonnostní příspěvek: {extramoney}</p>
            </div>
          </div>

          
  
  
  </>  
  
}

export default App