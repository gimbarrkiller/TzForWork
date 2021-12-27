import { ReducerAction } from './type'

export interface Action<T> {
  type: ReducerAction
  data: T
}

