import { useState } from "react";
import React from "react";
import './App.css';
import {Header} from './components/Header';
import { Footer } from "./components/Footer";
import { Featured } from './components/Featured';

const App = () => {

  let [name, setName] = useState('Helder');

  let [age, setAge] = useState(17);

  let [bg, setBg] = useState("#ccc");

  const handleMarcelo = () => {
    setName('Marcelo');
    setAge(24);
    setBg("#FF0000");
  }

  const handleHelder = () => {
    setName('Helder');
    setAge(17);
    setBg("#00FF00");
  }

  const [list,setlist] = useState([
    "Tom & Jerry",
    "Donald's",
    "Cachorro Lindo"
  ]);

  return (
    <>
      <Header /> {/** Menu, Cabeçalho */}
      <Featured name={name} age={age} /> {/** Props */}
        <div className='container'>
            <button onClick={handleMarcelo}>Sou o Marcelo!</button>
            <button onClick={handleHelder}>Sou o Helder!</button>
        </div>
            <div className="message--age" style={{backgroundColor: bg, padding: 20}}>
              {age > 17 && "Marcelo é o Irmão mais velho!"}
              {age == 17 && "Helder é o Irmão mais Novo!"}
            </div>

            <ul>
              {list.map((frase, index) => (
                <li key={index}>{frase}</li>
              ))}
            </ul>

      <Footer /> {/** Rodapé do site */}
    </>
  );
}

export default App;