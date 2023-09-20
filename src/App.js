
import './App.css';

import React, { useState }  from 'react';
const App = () =>   {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.kuna) );
  }
   const clear = () =>{
    setResult("")
   }
return(
  <>
  <div className='con'>
    
    <form> 
      <input type='text' value={result}></input>
    </form>

    <div className='keypad'>
        <button OnClick={clear} id='clear'>c</button>
        <button kuna="1" OnClick={handleClick}>1</button>
        <button kuna="2" OnClick={handleClick}>2</button>
        <button kuna="3" OnClick={handleClick}>3</button>
        <button kuna="+" OnClick={handleClick}>+</button>
        <button kuna="4" OnClick={handleClick}>4</button>
        <button kuna="5" OnClick={handleClick}>5</button>
        <button kuna="6" OnClick={handleClick}>6</button>
        <button kuna="-" OnClick={handleClick}>-</button>
        <button kuna="7" OnClick={handleClick}>7</button>
        <button kuna="8" OnClick={handleClick}>8</button>
        <button kuna="9" OnClick={handleClick}>9</button>
        <button kuna="*" OnClick={handleClick}>*</button>
        <button kuna="/" OnClick={handleClick}>/</button>
        <button kuna="." OnClick={handleClick}>.</button>
        <button  OnClick={handleClick}>=</button>
    </div> 
  </div>
  </>
)

}

export default App;
