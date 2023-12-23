import "./index.css";
import { useState } from "react";

export default function Password() {
  //todo ----- Declair state varriable -----
  let [length, setLength] = useState(8);
  let [lowerChar, setLowerChar] = useState(false);
  let [upperChar, setUpperChar] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);

  //todo ----- set arrays for different catagories -----
  const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseArray = lowerCaseArray.toUpperCase();
  const numberArray = "0123456789";
  const symbolArray = "!@#$%^&*()_+=-{}|[]\\:;\"'<>,.?/";

 //todo ----- create a string -----
 function createString(){
    let str = "";
    if (lowerChar) str += lowerCaseArray;
    else if (upperChar) str += upperCaseArray;
    else if (number) str += numberArray;
    else if (symbol) str += symbolArray;
    generatePassword(str);
 }

 //todo ----- extract password based on string -----
function generatePassword(str){
    let password = "";
    for (let i=0; i < length; i++){
        password+= str[Math.floor(Math.random() * str.length)];
    }
    console.log(password);
}





  return (
    <div className="container">
        {console.log(lowerChar, upperChar, number, symbol)}
      <h2>Generate Your Password</h2>
      <div className="lengthContainer">
        <p>
          Select Password length <b>(**8-50 characters**)</b>
        </p>
        <input
          type="number"
          min={8}
          max={50}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <h2>Customize your Password</h2>
      <div className="passwordOptions">
        <div className="conditionContainer1">
          <label htmlFor="lowercase">Include Lower Case Letters?</label>
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            onClick={(e) => setLowerChar(e.target.checked)}
          />
          <br />
          <label htmlFor="uppercase">Include Upper Case Letters?</label>
          <input 
            type="checkbox" 
            id="uppercase" 
            name="uppercase"
            onClick={(e) => setUpperChar(e.target.checked)}
           />
          <br />
        </div>
        <div className="conditionContainer2">
          <label htmlFor="number">Include Numbers?</label>
          <input 
                type="checkbox" 
                id="lowercase" 
                name="lowercase" 
                onClick={(e) => setNumber(e.target.checked)}
            />
          <br />
          <label htmlFor="symbol">Include Symbols?</label>
          <input 
            type="checkbox" 
            id="uppercase" 
            name="uppercase" 
            onClick={(e) => setSymbol(e.target.checked)}
        />
          <br />
        </div>
      </div>
      <button 
        className="ready"
        onClick = {createString}
      >Ready to Generate !</button>
      <div className="readyPassword">
        <input 
            type="text" 
            id = "password"
            disabled 
        />
        <button>Copy</button>
      </div>
    </div>
  );
}
