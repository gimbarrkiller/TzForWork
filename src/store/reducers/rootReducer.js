import { combineReducers } from 'redux'

import numberCounters from './numberCounters'

const rootReducer = combineReducers({
  numberCounters,
})

export default rootReducer