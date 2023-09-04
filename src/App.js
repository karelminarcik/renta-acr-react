import React, { useState } from 'react';
import OnePictureSlider from "./components/Slider"
import Navbar from "./components/Navbar"
import Selectrank from "./components/Selectrank"
import SelectAge  from "./components/SelectAge"
import './script.js'


const App = () => {

  // Initialize state to store the selected rank
  const [selectedRank, setSelectedRank] = useState('');

  // Callback function to update the selected rank
  const handleRankChange = (value) => {
    setSelectedRank(value);
  };

  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (value) => {
    setSelectedAge(value);
  };

  const [extramoney, setExtramoney] = useState("")

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
                <input type="text" id="extraMoney" onChange={ (event) => {
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

          
          {/* <script src="script.js"></script> */}
  
  </>  
  
}

export default App