import { useState } from 'react'
import './Input.css'

const Input = ( props ) => {

    const [erro , setErro] = useState('')

        function setOnblur(e){
               if( props.place.includes('Email')){
                if (props.value.length === 0) {
                    setErro('*Preencha um valor');
                    return false;
                  } else if (  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(props.value)  ) {
                    setErro('*Preencha um Email válido');
                    return false;
                  } else {
                    setErro(null);
                    return true;
                  }
               }
               if( props.place.includes('Telefone')){

                if (props.value.length === 0) {
                    setErro('*Preencha um valor');
                    return false;
                  } else if ( !/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm.test(props.value)  ) {
                    setErro('*Preencha um Telefone válido');
                    return false;
                  } else {
                    setErro(null);
                    return true;
                  }
            }
            if( props.place.includes('Cep')){

                if (props.value.length === 0) {
                    setErro('*Preencha um valor');
                    return false;
                  } else if (!/^\d{5}-?\d{3}$/.test(props.value)) {
                    setErro('*Preencha um cep válido');
                    return false;
                  } else {
                    setErro(null);
                    return true;
                  }
            }
            if(props.place.includes('Nome')  ){
                if(props.value.length === 0){
                    setErro('*Preencha um valor')
                }else(setErro(''))
            }
        }
   

    return(
        <>
            <label>
                <input
                type = 'input'
                value = {props.value}
                onChange = {(e) => props.setValue(e.target.value)}
                id = {props.place}
                placeholder = {props.place}
                onBlur = {e => setOnblur(e)}
                />
            </label>
            {erro && <p>{erro}</p>}
        </>
    )
}

export default Input