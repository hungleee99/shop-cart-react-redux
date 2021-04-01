import './App.css'

import React from 'react'
import NavBar from './components/NavBar'
import CartContainer from './components/CartContainer'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/reducers'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <CartContainer />
    </Provider>
  )
}

export default App
