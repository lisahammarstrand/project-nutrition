import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'

export const ScanBarcode = ({ onDetected }) => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <div className='scan-barcode'>
      <h3>Check if your food products are vegetarian, vegan and where they come from!</h3>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          SHOW SCANNER
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          onDetected(code)
        }} />
      )}
    </div>
  )
}