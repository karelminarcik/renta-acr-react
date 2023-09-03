import OnePictureSlider from "./components/Slider"
import Navbar from "./components/Navbar"
import Selectrank from "./components/Selectrank"
import SelectAge  from "./components/SelectAge"
import './script.js'


const App = () => {
  return <>
          <Navbar />
          <div className="slider">
            <OnePictureSlider />
          </div>
          
          <div className="calculator_wrap">
            <form className="form-wrap">
              <h2>Výpočet výsluhového příspěvku vojaků AČR</h2>
              
              <Selectrank />
            
              <SelectAge />
              
              <div className="input-wrap">
                <label for="extraMoney">Výkonnostní příspěvek</label>
                <input type="text" id="extraMoney"/>
              </div>
              
              <input type="submit" value="Spočítat" />

            </form>

            <div id="helmet">
              <h2>Vase Renta</h2>
            </div>
          </div>

          
          {/* <script src="script.js"></script> */}
  
  </>  
  
}

export default App