import React, { useEffect } from 'react'
import '../../css/productPages.css'
import '../../css/main.css'
import LogoIcon from '../../images/ONfitness-icon.svg'
import { products } from '../../database/products'
import { useHistory } from 'react-router'

function EBook3() {

  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  const product = products.findIndex((product) => product.id === 2003);
  const productName = products[product].name
  const productPrice = products[product].price
  const productDesc = products[product].desc
  const productPaymentLink = products[product].paymentLink
  const productCoverImage = products[product].coverImage
  
  useEffect(() => {
    document.title = 'ONfitness | ' + productName
  }, [productName])

  const relatedProduct1ID = products.findIndex((product) => product.id === 2006);
  const relatedProduct1Name = products[relatedProduct1ID].name
  const relatedProduct1Price = products[relatedProduct1ID].price
  const relatedProduct1Link = products[relatedProduct1ID].link
  const relatedProduct1CoverImage = products[relatedProduct1ID].coverImage
  
  const relatedProduct2ID = products.findIndex((product) => product.id === 2001);
  const relatedProduct2Name = products[relatedProduct2ID].name
  const relatedProduct2Price = products[relatedProduct2ID].price
  const relatedProduct2Link = products[relatedProduct2ID].link
  const relatedProduct2CoverImage = products[relatedProduct2ID].coverImage

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
            <img src={productCoverImage} alt={productName} />
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
              <li> <b>+</b> 47 sidor fullproppade med information!</li>
              <li> <b>+</b> Grunderna i hypertrofiträning</li>
              <li> <b>+</b> Hur du bör anpassa träningen efter din erfarenhetsnivå</li>
              <li> <b>+</b> Detaljerad genomgång av träningsvolym och frekvens</li>
              <li> <b>+</b> Guide till hur du väljer rätt övningar och hur du utför dem på rätt sätt</li>
              <li> <b>+</b> Hur tungt du ska lyfta för att bygga muskelmassa och minimera skaderisken</li>
              <li> <b>+</b> Genomgång av hur du kan progressivt belasta för att bygga maximalt med muskelmassa</li>
              <li> <b>+</b> Hur och när du bör genomföra en deload</li>
              <li> <b>+</b> Hur du kan prioritera vissa muskelgrupper</li>
              <li> <b>+</b> Hur du bryter dig igenom en platå</li>
              <li> <b>+</b> Hur du förebygger och återhämtar dig från skador + hur du bör värma upp</li>
              <li> <b>+</b> 11-stegs sammanfattande guide till hur du bygger ditt eget träningsprogram</li>
              <li> <b>Och mer! I min åsikt en av marknandens mest prisvärda och lättförståeliga e-böcker inom ämnet</b></li>
            </ul>
            <p className="delivery-notice">Notera att leverans av program och e-böcker kan ta upp till 24h efter betalning!</p>
            <a className="buy-now-btn" href={productPaymentLink} target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            <p className="agreement">Genom att gå vidare till betalningen godkänner du <a href="/terms-and-conditions">villkor</a> och <a href="/integrity-policy">integritetspolicyn</a>.</p>
            <p className="payment-info">Betalningen sköts snabbt, smidigt och säkert med <a href="https://stripe.com/"> <i className="fab fa-stripe"></i> </a></p>
          </div>
        </div>
        {/* TA BORT KLASSEN DISBLED-PRODUCT VID PROD */}
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
                <img className="program-cover-img" src={relatedProduct1CoverImage} alt={relatedProduct1Name} />
                <h4>{relatedProduct1Name}</h4>
                <h5>{relatedProduct1Price} kr</h5>
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct1}>LÄS MER <i className="fas fa-arrow-right"></i> </button>
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
                <img className="program-cover-img" src={relatedProduct2CoverImage} alt={relatedProduct2Name} />
                <h4>{relatedProduct2Name}</h4>
                <h5>{relatedProduct2Price} kr</h5>
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct2}>LÄS MER <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EBook3
