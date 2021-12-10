import { useDispatch } from 'react-redux';
import { ADD_COUNTER } from '../../store/actions';

const AddCounter = () => {
  const dispatch = useDispatch()

  const addCounter = () => dispatch({
    type: ADD_COUNTER,
  })

  return <button onClick={addCounter}> Добавить кнопку </button>
}

export default AddCounter