import React, { useState } from 'react';


export default function Work7() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function addToInput(val) {
    setInput(input + val);
  }

  function clearInput() {
    setInput('');
    setResult('');
  }

  function calculate() {
    try {
      const res = eval(input);
      setResult(res.toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div>
        <div className='position-absalute d-flex pt-5 justify-content-center '>
            <div className='justify-content-center bg-light p-2'>
                <div className=' '><h1 className='text-bg-info rounded-2 fs-3 text-center'>CALCULATOR</h1>
                <div>
                <input type="text" className='fs-5 text-primary text-end rounded-5' value={input} onChange={e => setInput(e.target.value )} />
                <div className='text-danger text-end fs-5'>{result}</div></div>
                </div>
             
                <div className='d-flex fs-1  justify-content-around'>
                        <button className=' border btn btn-outline-info btn btn-lg' onClick={() => addToInput('7')}>7</button>
                        <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('8')}>8</button>
                        <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('9')}>9</button>
                        <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('/')}>/</button></div>
                <div className='d-flex fs-1  justify-content-around'>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('4')}>4</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('5')}>5</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('6')}>6</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('*')}>*</button>
                </div>
                <div className='d-flex fs-1  justify-content-around'>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('1')}>1</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('2')}>2</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('3')}>3</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('-')}>-</button>
                </div>
                <div className='d-flex fs-1  justify-content-around'>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('0')}>0</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('.')}> • </button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => calculate()}>=</button>
                <button className='border btn btn-outline-info btn btn-lg' onClick={() => addToInput('+')}>+</button>
                </div>
                <div className='d-grid gap-2 col-12 border btn btn-outline-info'><button className='border border-info btn' onClick={() => clearInput()}>C</button></div>
            
    
      
            </div>
        
        </div>
        
     
    </div>
  );
}

