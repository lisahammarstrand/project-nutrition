import React from 'react'
import { useSelector } from 'react-redux'
import './scanresultpage.css'

export const ScanResultPage = () => {
  const product = useSelector((state) => state.products.productinfo)

  // console.log(product.brands);

  if (!product) {
    return (
      <>
      </>
    )
  }

  return (
    <div>
      <section key={product.code}>
        <img src={product.image_url} alt={product.product_name} />
        <h3>Product name: {product.brands}</h3>
        <h3>Product origin: {product.origins}</h3>
        <h3>Vegetarian: {product.ingredients_analysis_tags}</h3>
        {/* <h2>Vegan: {product.ingredients.vegan}</h2> */}
      </section>
    </div>
  )
}