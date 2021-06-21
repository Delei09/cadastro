import React, { useState } from 'react'
import './Checkbox.css'

const Checkbox = ({ options, value, setValue }) => {
  
  const [erro, setErro] = useState('')
    function handleChange({ target }) {
      if (target.checked) {
        setValue([...value, target.value]);
      } else {
        setValue(value.filter((itemValue) => itemValue !== target.value));
        setErro('Selecione para confirma')
      }
    }
  
    return (
      <>
        {options.map((option) => (
          <label key={option} className = 'check'>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
        {erro && <p> {erro}</p>}
      </>
    );
  };
  
  export default Checkbox;