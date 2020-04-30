import React from "react"
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import { Home } from './components/Home'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {

  return (
    <div className='app'>
      <Provider store={store}>
        <Home />
      </Provider>
    </div >
  )
}