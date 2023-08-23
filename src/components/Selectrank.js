import "./Selectrank.css"
import {ranks} from "../data/"

const Selectrank = () => {


    return <div className="choose-rank">
        <label for="ranks">
            Vaše hodnost
        </label>
        <select id="ranks">
            {
                ranks.map ( (oneRank) => {
                    const {id, text} = oneRank

                    return <option key={id}>
                        {text}
                    </option>
                })
            }

        </select>
    </div>
}

export default Selectrank