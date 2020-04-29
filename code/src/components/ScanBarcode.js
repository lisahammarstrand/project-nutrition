import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'


export const ScanBarcode = ({ onDetected }) => {
  const [showScanner, setShowScanner] = useState(false)
  // const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          onDetected(code)
        }} />
      )}
    </>
  )
}