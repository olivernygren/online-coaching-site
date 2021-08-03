import React, { useEffect } from 'react'
import Cover from '../../images/covers/traningsprogram.png'
import '../../css/productPages.css'
import '../../css/main.css'
import LogoIcon from '../../images/ONfitness-icon.svg'
import { products } from '../../database/products'
import { useHistory } from 'react-router'

function Program2() {

  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const product = products.findIndex((product) => product.id === 1002);
  const productName = products[product].name
  const productPrice = products[product].price
  const productDesc = products[product].desc
  const productPaymentLink = products[product].paymentLink

  useEffect(() => {
    document.title = 'ONfitness | ' + productName
  }, [productName])

  const relatedProduct1ID = products.findIndex((product) => product.id === 1001)
  const relatedProduct1Name = products[relatedProduct1ID].name
  const relatedProduct1Price = products[relatedProduct1ID].price
  const relatedProduct1Link = products[relatedProduct1ID].link
  
  const relatedProduct2ID = products.findIndex((product) => product.id === 2001)
  const relatedProduct2Name = products[relatedProduct2ID].name
  const relatedProduct2Price = products[relatedProduct2ID].price
  const relatedProduct2Link = products[relatedProduct2ID].link

  const redirectToRelatedProduct1 = (e) => {
    e.preventDefault()
    history.push(relatedProduct1Link)
  }

  const redirectToRelatedProduct2 = (e) => {
    e.preventDefault()
    history.push(relatedProduct2Link)
  }

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
              <li> <b>+</b> 9 veckors upplägg</li>
              <li> <b>+</b> 4(!) olika träningspass för varje muskelgrupp, tröttna aldrig på ett pass!</li>
              <li> <b>+</b> Varje pass inkluderar övningar, sets, reps, vila och noteringar kring utförande</li>
              <li> <b>+</b> Noggrann guide till bodybuilding-typen av träning</li>
              <li> <b>+</b> Genomgång av hur du bygger upp ditt split utifrån dina förutsättningar</li>
              <li> <b>+</b> Planerad progression över tid för att maximera resultaten</li>
              <li> <b>+</b> Guide till hur du genomför en deload-vecka</li>
              <li> <b>+</b> Noggrant planerad struktur som får programmet att stå ut från andra på marknaden</li>
            </ul>
            <a className="buy-now-btn" href={productPaymentLink} target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            <p className="agreement">Genom att gå vidare till betalningen godkänner du <a href="/terms-and-conditions">villkor</a> och <a href="/integrity-policy">integritetspolicyn</a>.</p>
            <p className="payment-info">Betalningen sköts snabbt, smidigt och säkert med <a href="https://stripe.com/"> <i className="fab fa-stripe"></i> </a></p>
          </div>
        </div>
        <div className="related-products">
          <h2>Liknande produkter</h2>
          <div className="cards-flex">
            <div className="related-product related-product-1" onClick={redirectToRelatedProduct1}>
              <div className="program program-1">
                <div className="program-header-btns">
                  <i className="fas fa-eye" title="Läs mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-arrow-right" title="Läs mer"></i>
                </div>
                <div className="img-bg"></div>
                <img className="program-cover-img" src={Cover} alt="Program" />
                <h4>{relatedProduct1Name}</h4>
                <h5>{relatedProduct1Price} kr</h5>
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct1}>Läs mer <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div>
            <div className="related-product related-product-2" onClick={redirectToRelatedProduct2}>
              <div className="program program-2">
                <div className="program-header-btns">
                  <i className="fas fa-eye" title="Läs mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-arrow-right" title="Läs mer"></i>
                </div>
                <div className="img-bg"></div>
                <img className="program-cover-img" src={Cover} alt="Program" />
                <h4>{relatedProduct2Name}</h4>
                <h5>{relatedProduct2Price} kr</h5>
                <button className="add-to-cart-btn"  onClick={redirectToRelatedProduct2}>Läs mer <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program2
