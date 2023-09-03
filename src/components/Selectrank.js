import "./Selectrank.css"
import {ranks} from "../data"

const Selectrank = ({ onSelect }) => {
    const handleRankChange = (event) => {
        const selectedValue = event.target.value
        onSelect(selectedValue)
    }


    return <div className="input-wrap">
        
        <label htmlFor="ranks">Vaše hodnost</label>
      <select id="ranks" onChange={handleRankChange}>
        {ranks.map((oneRank) => (
          <option key={oneRank.id} value={oneRank.text}>
            {oneRank.text}
          </option>
        ))}
      </select>
    </div>
}

export default Selectrank