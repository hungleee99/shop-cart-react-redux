// import React from 'react'
import { INCREASE, DECREASE, REMOVE } from '../constants/typeAction'
export const Action = (dispatch, ownProps) => {
  const { id, amount } = ownProps
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  }
}
