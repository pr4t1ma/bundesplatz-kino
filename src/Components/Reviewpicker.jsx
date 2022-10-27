import { faClock, faFlagUsa, faLanguage, faStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 export const Reviewpicker =( {duration}) =>{
    return(
        <div className="flex gap-10">
            <div className="time flex gap-5 text-yellow-600 text-2xl">
                <FontAwesomeIcon icon ={faClock}/>
                <p>{duration}</p>
            </div>
            <div className="totla-review flex gap-5 text-yellow-600 text-2xl">
                <FontAwesomeIcon icon ={faStar}/>
                <span className="text-black">7.1/10</span>
            </div>
            <div className="languages flex gap-5 text-yellow-600 text-2xl">
                <FontAwesomeIcon icon={faFlagUsa}/>
                <FontAwesomeIcon icon ={faLanguage}/>
                <span className="text-black">English/German</span>
            </div>
            
      
        </div>
    
    )
}