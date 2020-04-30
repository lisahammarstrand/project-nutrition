import React from 'react'
import { useSelector } from 'react-redux'
import './scanresultpage.css'

export const ScanResultPage = () => {
  const productInfo = useSelector((state) => state.products.productinfo)

  // !productInfo = vi har inte hämtat något ännu
  if (!productInfo) {
    return null
  }

  if (productInfo.status !== 1) {
    return <h1>Oh no! Product not found!</h1>
  }

  const product = productInfo.product

  return (
    <div>
      <section key={product.code}>
        <img src={product.image_url} alt={product.product_name} />
        <h3>Product brand: {product.brands}</h3>
        <h3>Product name: {product.product_name}</h3>
        <h3>Product origin: {product.origins}</h3>
        <h3>Vegetarian: {product.ingredients_analysis_tags && product.ingredients_analysis_tags[2] === 'en:vegetarian' ? 'YAY! Vegetarian!' : 'Sorry, prob not vegetarian!'}</h3>
        <h3>Vegan: {product.ingredients_analysis_tags && product.ingredients_analysis_tags[1] === 'en:vegan' ? 'YAY! Vegan!' : 'Sorry, prob not vegan!'}</h3>
      </section>
    </div>
  )
}