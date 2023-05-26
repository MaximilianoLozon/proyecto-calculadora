import './App.css';
import Boton from './assets/componentes/Boton';
import Pantalla from './assets/componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [estado, cambiarEstado] = useState('');

  const agregarInput = val => {
    cambiarEstado(estado + val);
  };

  const calcularResultado = () => {
    if (estado){
      cambiarEstado(evaluate(estado));
    } else {
      alert("Por favor ingrese valores para realizar los calculos.")
    }
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <h2> Maximiliano Lozon dev</h2>
        <Pantalla input={estado}/>
        <div className='fila'>
          <Boton manejarClic ={agregarInput}>1</Boton>
          <Boton manejarClic ={agregarInput}>2</Boton>
          <Boton manejarClic ={agregarInput}>3</Boton>
          <Boton manejarClic ={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={() => cambiarEstado('')}>C</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;