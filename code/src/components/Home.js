import React from "react"
import { ScanBarcode } from "components/ScanBarcode"
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { ui } from 'reducers/ui'
import { products, fetchProductInfo } from 'reducers/products'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ScanResultPage } from 'components/ScanResultPage'


// const onDetected = (code) => {
//   console.log(`Code: ${code}`)
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     })
// };





export const Home = () => {

  const dispatch = useDispatch()


  const onDetected = (code) => {

    console.log(`Code: ${code}`)
    dispatch(fetchProductInfo(code))
  }


  return (
    <div>

      <Header />
      {/*  <BrowserRouter>
          <Switch>
            <Route path='/' exact> */}
      <main>
        <label>
          {" "}
              Test barcode manually here:{" "}
          <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        </label>
        <p>
          {" "}
              7311070347272 - Pågen Gifflar. Yum!
            </p>
        <ScanBarcode onDetected={onDetected} />

        <ScanResultPage />
      </main>
      {/* </Route>
            <Route path='/product/:productId'>
               <ScanBarcode />
            </Route>
          </Switch>
        </BrowserRouter> */}
      <Footer />

    </div >
  );
};