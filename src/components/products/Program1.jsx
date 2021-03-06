import React, { useEffect } from 'react'
import '../../css/productPages.css'
import '../../css/main.css'
import LogoIcon from '../../images/ONfitness-icon.svg'
import { products } from '../../database/products'
import { useHistory } from 'react-router'

function Program1() {

  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const product = products.findIndex((product) => product.id === 1001);
  const productName = products[product].name
  const productPrice = products[product].price
  const productDesc = products[product].desc
  const productPaymentLink = products[product].paymentLink
  const productCover = products[product].coverImage

  useEffect(() => {
    document.title = 'ONfitness | ' + productName
  }, [productName])

  const relatedProduct1ID = products.findIndex((product) => product.id === 2001)
  const relatedProduct1Name = products[relatedProduct1ID].name
  const relatedProduct1Price = products[relatedProduct1ID].price
  const relatedProduct1Link = products[relatedProduct1ID].link
  const relatedProduct1Cover = products[relatedProduct1ID].coverImage
  
  const relatedProduct2ID = products.findIndex((product) => product.id === 2003)
  const relatedProduct2Name = products[relatedProduct2ID].name
  const relatedProduct2Price = products[relatedProduct2ID].price
  const relatedProduct2Link = products[relatedProduct2ID].link
  const relatedProduct2Cover = products[relatedProduct2ID].coverImage

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
            <img src={productCover} alt={productName} />
          </div>
          <div className="info">
            <h2 className="product-title">{productName}</h2>
            <div className="price-container">
              <h3 className="price">{productPrice} kr <i className="fas fa-tags"></i> </h3>
              <span>inkl. moms</span>
            </div>
            <p className="desc">{productDesc}</p>
            <h3 className="included-h3">Detta ing??r:</h3>
            <ul>
              <li> <b>+</b> 3 st faser av programmet som ??kar i volym och intensitet f??r att forts??tta utvecklas hela tiden</li>
              <li> <b>+</b> Noga genomt??nkt tr??ningsprogram med fokus p?? ofta bortgl??mda muskelgrupper</li>
              <li> <b>+</b> Tr??ningsprogram inkluderar ??vningar, sets, reps, vila och noteringar</li>
              <li> <b>+</b> F??rklaringar av viktiga begrepp och guide till hur du l??ser av programmet</li>
              <li> <b>+</b> ??VNINGSBANKEN - Utf??rliga f??rklaringar till varje ??vning i programmet</li>
              <li> <b>+</b> Allt basinfo du beh??ver veta kring hur du ska tr??na och t??nka kring tr??ning som nyb??rjare</li>
              <li> <b>+</b> Kortare introduktion till hur ska ??ta f??r att b??de bygga muskler och tappa fett</li>
              <li> <b>+</b> Guide till hur du kan g?? vidare och forts??tta utvecklas efter programmet</li>
              <li> <b>+</b> 34 sidor fulla av information och utan on??diga utfyllnader!</li>
            </ul>
            <p className="delivery-notice">Notera att leverans av program och e-b??cker kan ta upp till 24h efter betalning!</p>
            <a className="buy-now-btn" href={productPaymentLink} target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            <p className="agreement">Genom att g?? vidare till betalningen godk??nner du <a href="/terms-and-conditions">villkor</a> och <a href="/integrity-policy">integritetspolicyn</a>.</p>
            <p className="payment-info">Betalningen sk??ts snabbt, smidigt och s??kert med <a href="https://stripe.com/"> <i className="fab fa-stripe"></i> </a></p>
          </div>
        </div>

        <div className="related-products">
          <h2>Liknande produkter</h2>
          <div className="cards-flex">
            <div className="related-product related-product-1" onClick={redirectToRelatedProduct1}>
              <div className="program program-1">
                <div className="program-header-btns">
                  <i className="fas fa-eye" title="L??s mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-arrow-right" title="L??s mer"></i>
                </div>
                <div className="img-bg"></div>
                <img className="program-cover-img" src={relatedProduct1Cover} alt="Program" />
                <h4>{relatedProduct1Name}</h4>
                <h5>{relatedProduct1Price} kr</h5>
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct1}>L??s mer <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div>
            <div className="related-product related-product-2" onClick={redirectToRelatedProduct2}>
              <div className="program program-2">
                <div className="program-header-btns">
                  <i className="fas fa-eye" title="L??s mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-arrow-right" title="L??s mer"></i>
                </div>
                <div className="img-bg"></div>
                <img className="program-cover-img" src={relatedProduct2Cover} alt="Program" />
                <h4>{relatedProduct2Name}</h4>
                <h5>{relatedProduct2Price} kr</h5>
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct2}>L??S MER <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program1
