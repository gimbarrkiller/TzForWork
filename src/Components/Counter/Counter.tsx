import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  INCREMENT_COUNTER_VALUE,
  DECREMENT_COUNTER_VALUE,
  DELETE_COUNTER
} from '../../store/actions';

import './Counter.css'

type CounterType = {
  id: number
  ticker: boolean
  count: number
}


const Counter: FC<CounterType> = ({ ticker, count, id }) => {
  const [localCount, setLocalCount] = useState(0)
  const dispatch = useDispatch()
  
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNTER_VALUE,
      id
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNTER_VALUE,
      id
    })
  }

  const deleteCounter = () => {
    dispatch({
      type: DELETE_COUNTER,
      data: id,
    })
  }

  ticker && setInterval(() => setLocalCount(localCount + 1), 1000);

  return (
    <div className="Container">
      {!ticker && <button onClick={decrement}> - </button>}
      <div className="count">{!ticker ? count : localCount}</div>
      {!ticker && <button onClick={increment}> + </button>}
      <button onClick={deleteCounter} className="deletedCounter">X</button>
    </div>
  )
}

export default Counter