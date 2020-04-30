import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <section className='footer-section'>
        <h2>About this site</h2>
        <p>This site uses data from the Open Food Facts project, a collaborative, free and open database. The data may contain errors or be inconclusive. You can correct or add information to products on the Open Food Facts website.</p>
        <a href="https://world.openfoodfacts.org/">Open Food Facts</a>
      </section>
    </footer>
  )
}