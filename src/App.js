import './App.css';
import React,{useState} from 'react'


function formatarCpf(cpf){
  cpf = cpf.replace(/[^\d]/g, "")

  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1-$2")

  cpf=cpf.substring(0,14);
  return cpf;
}
function CPFinput({component,value,onChange, ...propInput}){
  const InnerComponent=component;
  const cpfValue=formatarCpf(value);
  const onChangeCpf = value =>{ 
    value=formatarCpf(value);
    onChange(value);
  };
  return (
    <InnerComponent value={cpfValue} onChange={onChangeCpf} {...propInput}/>
  );
}
function NumericInput({component,value,onChange, ...propInput}){
  const numberValue= value.replace(/[^\d]/g,'');
  const onChangeNumeric = value => onChange(value.replace(/[^\d]/g,''));
  const InnerComponent=component;

  return(
    <InnerComponent value={numberValue} onChange={onChangeNumeric} {...propInput}/>
  );
}

function MyInput({value,onChange,...propsInputs}){
  return(
    <input value={value} onChange={ev => onChange(ev.target.value)}/>
  );
}
function App() {
  const [number,setNumber]=useState('');
  const [cpf,setCpf]=useState('');
  return (
    <div className="App">
      <NumericInput component={MyInput} value={number} onChange={value => setNumber(value)}/>
      <div>Número: {number}</div>
      <CPFinput component={MyInput} value={cpf} onChange={value => setCpf(value)}/>
      <div>Cpf: {cpf}</div>
    </div>
  );
}

export default App;
