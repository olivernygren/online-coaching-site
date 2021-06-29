import React from 'react'
import Cover from '../../images/covers/traningsprogram.png'
import '../../css/productPages.css'
import '../../css/main.css'
import { products } from '../../database/products'

function Program1() {

  const i = 0;

  const productName = products[i].name
  const productPrice = products[i].price
  const productDesc = products[i].desc

  return (
    <div className="product-container">
      <div className="content">
        <div className="product">
          <div className="image">
            <img src={Cover} alt={productName} />
          </div>
          <div className="info">
            <h2 className="product-title">{productName}</h2>
            <div className="price-container">
              <h3 className="price">{productPrice} kr <i className="fas fa-tags"></i> </h3>
              <span>inkl. moms</span>
            </div>
            <p className="desc">{productDesc}</p>
            <h3 className="included-h3">Detta ingår:</h3>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Både kost- och träningsupplägg kan enkelt öppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Betalning sker smidigt och enkelt med e-faktura efter du får ditt upplägg, inga förskottsbetalningar!</li>
              <li> <b>+</b> Tillgång till en privat facebook-grupp med alla andra klienter.</li>
            </ul>
            <a className="buy-now-btn" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            <p className="agreement">Genom att gå vidare till betalningen godkänner du <a href="/terms-and-conditions">villkor</a> och <a href="/integrity-policy">integritetspolicyn</a>.</p>
            <p className="payment-info">Betalningen sköts snabbt, smidigt och säkert med <a href="https://stripe.com/"> <i className="fab fa-stripe"></i> </a></p>
          </div>
        </div>
        <div className="related-products">
          <div className="related-product related-product-1">
            
          </div>
          <div className="related-product related-product-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Program1
