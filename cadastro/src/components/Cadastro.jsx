import React, { useState } from 'react'
import './Cadastro.css'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Select from './Select'

const Cadastro = () => {

        const [nome , setNome] = useState('')
        const [email , setEmail] = useState('')
        const [telefone , setTelefone] = useState('')
        const [cep , setCep] = useState('')
        const [select , setSelect] = useState('')
        const [radio , setRadio] = useState('Masculino')
        const [check , setCheck] = useState([])
        const [enviado , setEnviado] = useState('')
        const [salvo , setSalvo] = useState('')
        const [ok, setOk] = useState('')

        function enviar(event){
            event.preventDefault()
          if(nome.length === 0){
              setEnviado('Preencha um nome')
          } else if (  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email)  ){
              setEnviado('Preencha um Email ')
          }else if ( !/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm.test(telefone)  ) {
            setEnviado('Preencha um Telefone ')
          }else if (!/^\d{5}-?\d{3}$/.test(cep)) {
            setEnviado('Preencha um cep')
          }else if (check.length === 0){
              setEnviado('Selecione para confirmar')
          }else{
            setEnviado('');
            const salvar = (
            <main>
                <h1>Cadastro Salvo</h1>
                <h2>Nome</h2>
                {nome}
                <h2>Email</h2>
                {email}
                <h2>Telefone</h2>
                {telefone}
                <h2>Cep</h2>
                {cep}
                <h2>Opção Selecionada</h2>
                {select}
                <h2>Sexo</h2>
                {radio}
            </main>
            )
            setSalvo(salvar)
            const okk = (<h3>Cadastro Salvo!</h3>)
            setOk(okk)
          }
        }

    return(
        <>
    <form className = 'cadastro' onSubmit = {e => enviar(e)} >
         <Input place = 'Nome Completo' id = 'nome ' value = {nome} setValue = {setNome}  />
         <Input place = 'Email'  id = 'email' value = {email} setValue = {setEmail}  />
         <Input place = 'Telefone'  id = 'telefone' value = {telefone} setValue = {setTelefone}  />
         <Input place = 'Cep'  id = 'cep' value = {cep} setValue = {setCep}   />
         <Select option = {['Opção 1' , 'Opção 2' , 'Opção 3']} name = 'select' value = {select} setValue ={setSelect}/>
         <Radio options = {['Masculino', ' Feminino']}  value = {radio} setValue = {setRadio} />
         <Checkbox options = {['Selecione para confirmar']}  value = {check} setValue = {setCheck} />
         <button className = 'button'> Salvar</button>
         {enviado && <p>{enviado} </p>}
         {ok &&  ok }
     </form>
     {salvo &&  salvo }
     
     </>
    )
}

export default Cadastro