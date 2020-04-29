import React from "react"
import { ScanBarcode } from "components/ScanBarcode"
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products, fetchProductData } from 'reducers/products'
import { Home } from './components/Home'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

// const onDetected = (code) => {
//   console.log(`Code: ${code}`)
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     })
// };





export const App = () => {



  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div >
  );
};

        // {/*  <BrowserRouter>
        //   <Switch>
        //     <Route path='/' exact> */}
        //     <label>
        //     {" "}
        //         Test codes here:{" "}
        //     <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        //   </label>
        //   <p>
        //     {" "}
        //         Use the field above to test barcodes manually and keep an eye on your
        //         console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
        //       </p>
        //   <ScanBarcode />
        //   {/* </Route>
        //       <Route path='/product/:productId'>
        //          <ScanBarcode />
        //       </Route>
        //     </Switch>
        //   </BrowserRouter> */}