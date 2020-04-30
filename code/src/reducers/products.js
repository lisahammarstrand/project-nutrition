import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'


export const products = createSlice({
  name: 'products',
  initialState: {
    productinfo: null
    // productinfo: {}
  },
  reducers: {
    setProducts: (state, action) => {
      state.productinfo = action.payload
    }
  }
})

// This is a thunk with a loader
export const fetchProductInfo = (code) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        dispatch(products.actions.setProducts(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}


