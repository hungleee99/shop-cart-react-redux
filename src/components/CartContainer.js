import React from 'react'
import CartItem from './Cartitem'
import { connect } from 'react-redux'
import { CLEAR_CART, GET_TOTALS } from '../constants/typeAction'
const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS })
  }, [cart, dispatch])
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>your cart</header>
        <h4 className='empty-cart'>is currently empty</h4>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>My carts</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      <footer>
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear
        </button>
      </footer>
    </section>
  )
}
const mapStateToProps = (store) => {
  const { cart, total } = store
  return { cart, total }
}

export default connect(mapStateToProps)(CartContainer)
