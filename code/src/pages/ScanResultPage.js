import React from 'react'
import { useSelector } from 'react-redux'

export const ScanResult = () => {
  const results = useSelector((state) => state.products.productinfo)

  return (
    <div>
      {results.map((product) => (
        <section key={product.code}>
          <img src={product.image_url} alt={product.product_name} />
          <h1>Product name: {product.product_name}</h1>
          <h2>Product origin: {product.origins}</h2>
          <h2>Vegetarian: {product.ingredients.vegetarian}</h2>
          <h2>Vegan: {product.ingredients.vegan}</h2>
        </section>
      ))}
    </div>
  )
}
