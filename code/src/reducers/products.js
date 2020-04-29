import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'


export const products = createSlice({
  name: 'products',
  initialState: {
    productinfo: {}
  },
  reducers: {
    setProducts: (state, action) => {
      state.productinfo = action.payload
    }
  }
})

export const fetchProductData = (code) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      })
  }
}


