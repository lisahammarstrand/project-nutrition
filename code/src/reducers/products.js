import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'


export const products = createSlice({
  name: 'products',
  initialState: {
    all: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.all = action.payload
    }
  }
})

export const onDetected = (code) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      })
  }
}


