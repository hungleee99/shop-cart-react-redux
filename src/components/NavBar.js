import React from 'react'
import { connect } from 'react-redux'
export const NavBar = ({ amount }) => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Shop-Cart
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                My-Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className='nav-center'>
          <h3>ReduxGear</h3>
          <div className='nav-container'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
            </svg>
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { amount: state.amount }
}
export default connect(mapStateToProps)(NavBar)
