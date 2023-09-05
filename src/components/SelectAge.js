import {ages} from "../data"

const Selectage = ({ onSelect }) => {
  const handleAgeChange = (event) => {
      const selectedValue = event.target.value
      onSelect(selectedValue)
  }

  return <div className='input-wrap'>
          <label htmlFor="selectage">Odsloužené roky</label>
          <select id="selectage" onChange={handleAgeChange}>
            {ages.map((oneAge) => (
                <option key={oneAge.age} value={oneAge.age}>
                  {oneAge.age}
                </option>
              ))}
          </select>
        </div>
  
}

export default Selectage

