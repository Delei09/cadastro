import React from 'react'
import './Select.css'

const Select = (props) => {


    return(
        <>
           <select name = {props.name} value = {props.value} onChange = {e => props.setValue(e.target.value)}>
               <option disabled value ='' key = 'as'>Selecione uma opção</option>
               {props.option.map(option => <option key = {option} > {option} </option>)}
           </select>
        </>
    )
}

export default Select