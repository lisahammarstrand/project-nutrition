import React from "react"
import { ScanBarcode } from "components/ScanBarcode"
import { useDispatch } from 'react-redux'
import { fetchProductInfo } from 'reducers/products'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ScanResultPage } from 'components/ScanResultPage'

export const Home = () => {

  const dispatch = useDispatch()

  const onDetected = (code) => {

    dispatch(fetchProductInfo(code))
  }

  return (
    <div>
      <Header />
      <main>
        <ScanBarcode onDetected={onDetected} />
        <label>
          {" "}
          <p>Scanner not working?</p>
          <p>Test barcode manually here:{" "}</p>
          <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        </label>
        <ScanResultPage />
      </main>
      <Footer />
    </div >
  );
};