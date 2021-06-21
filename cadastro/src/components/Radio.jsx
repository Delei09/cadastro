import React from 'react'
import './Radio.css'

const Radio = ({options, value, setValue}) => {

    return(
       <div className="radio">
         {options.map(option => {
             return(
                 <label key = {option}> {option} 
                     <input 
                        value = {option}
                        onChange = { ({target}) => setValue(target.value) }
                        checked = {  value === option }
                        type = 'radio'
                        />
                 </label>
             )
         })} 
       </div>
    )
}

export default Radio