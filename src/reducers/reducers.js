import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from '../constants/typeAction'
import cartItem from '../data/cart-items'

const initialStore = {
  cart: cartItem,
  total: 0,
  amount: 0,
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (carttotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          carttotal.total += itemTotal
          carttotal.amount += amount
          return carttotal
        },
        { total: 0, amount: 0 }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    case INCREASE: {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
    }
    case DECREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
  }
  return state
}
export default reducer
