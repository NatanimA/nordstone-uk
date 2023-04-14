import React,{useState} from 'react'
import axios from 'axios'


import { SERVER_URL } from '../../constants/constants'
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
      setMathDetails((pv) => {
        return {
          ...pv,
          op:e.target.value
        }
      })

  }

  const handleCalculate = async () => {
      if(mathDetails.a && mathDetails.b && mathDetails.op){
        const response = await axios.post(SERVER_URL,mathDetails)
        setResult(response.data.data)
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
