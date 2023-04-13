import React,{useState} from 'react'

import "./Calculator.scss"

const Calculator = () => {
  const [mathDetails,setMathDetails ] = useState({a:"",b:"",op:""})
  const [result,setResult] = useState(null)

  const handleChangeInput = e => {
    setMathDetails((pv) => {
      return {
        ...pv,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleChangeOp = e => {
      console.log(e.target.value)
      setMathDetails((pv) => {
        return {
          ...pv,
          op:e.target.value
        }
      })

  }

  const handleCalculate = () => {
      if(mathDetails.a && mathDetails.b && mathDetails.op){
        if(mathDetails.op === "+"){
          setResult(parseInt(mathDetails.a) + parseInt(mathDetails.b))
        }
        if(mathDetails.op === "-"){
          setResult(parseInt(mathDetails.a) - parseInt(mathDetails.b))
        }
        if(mathDetails.op === "*"){
          setResult(parseInt(mathDetails.a) * parseInt(mathDetails.b))
        }
      }
  }

  return (
    <>
      <div className='app__calculate__container'>
          <div className='screen'>
              {result !== null ? (<span>{result}</span>): (
                <span>{mathDetails.a || mathDetails.b || 0}</span>
              )}
          </div>
          <div className='calculate-operation-container'>
            <input onChange={handleChangeInput} name='a' className='calculate-input' type='number' />
            <input onChange={handleChangeInput} name='b' className='calculate-input' type='number' />
            <select defaultValue={null} onChange={handleChangeOp}>
              <option value={null}>Select operations</option>
              <option value="*">Multiply</option>
              <option value="+">Add</option>
              <option value="-">Subtract</option>
            </select>
            <button onClick={handleCalculate} className='btn-post' style={{padding:'2rem'}}>Calculate</button>
          </div>

      </div>
    </>
  )
}

export default Calculator
