import {
  DECREMENT_COUNTER_VALUE,
  INCREMENT_COUNTER_VALUE,
  ADD_COUNTER, DELETE_COUNTER
} from '../actions'

const initialState = [
  {
    id: 1,
    count: 1,
  }
]

const numberCounters = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER_VALUE:
      return state.map(item => item.id === action.id ?
        { ...item, count: item.count + 1 } :
        item
      )

    case DECREMENT_COUNTER_VALUE:
      return state.map(item => item.id === action.id ?
        { ...item, count: item.count - 1 } :
        item
      )

    case ADD_COUNTER:
      return [...state,
      {
        id: state.length + 1,
        count: state.length > 1 ?
          state
            .map(a => a.id % 4 !== 0 ? a.count : 0)
            .reduce((a, b) => a + b, 0) 
        :
          state[0] ? state[0].count : 0
      }
      ]

    case DELETE_COUNTER:
      return state.filter(item => item.id !== action.data)

    default:
      return state
  }
}

export default numberCounters;