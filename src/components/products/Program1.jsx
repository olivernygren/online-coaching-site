import React, { useEffect } from 'react'
import Cover from '../../images/covers/traningsprogram.png'
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

  const i = 0;
  const productName = products[i].name
  const productPrice = products[i].price
  const productDesc = products[i].desc

  useEffect(() => {
    document.title = 'ONfitness | ' + productName
  }, [productName])

  const relatedProduct1Index = 4;
  const relatedProduct1Name = products[relatedProduct1Index].name
  const relatedProduct1Price = products[relatedProduct1Index].price
  const relatedProduct1Link = products[relatedProduct1Index].link
  
  // const relatedProduct2Index = 2;
  // const relatedProduct2Name = products[relatedProduct2Index].name
  // const relatedProduct2Price = products[relatedProduct2Index].price
  // const relatedProduct2Link = products[relatedProduct2Index].link

  const redirectToRelatedProduct1 = (e) => {
    e.preventDefault()
    history.push(relatedProduct1Link)
  }

  // const redirectToRelatedProduct2 = (e) => {
  //   e.preventDefault()
  //   history.push(relatedProduct2Link)
  // }

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
              <li> <b>+</b> Noga genomtänkt träningsprogram med fokus på ofta bortglömda muskelgrupper</li>
              <li> <b>+</b> Träningsprogram inkluderar övningar, sets, reps, vila och noteringar</li>
              <li> <b>+</b> Förklaringar av viktiga begrepp och guide till hur du läser av programmet</li>
              <li> <b>+</b> ÖVNINGSBANKEN - Utförliga förklaringar till varje övning i programmet</li>
              <li> <b>+</b> Allt du behöver veta kring hur du ska träna och tänka kring träning som nybörjare</li>
              <li> <b>+</b> Kortare introduktion till hur ska äta för att både bygga muskler och tappa fett</li>
              <li> <b>+</b> Guide till hur du kan gå vidare och fortsätta utvecklas efter programmet</li>
              <li> <b>+</b> 31 sidor fulla av information och utan onödiga utfyllnader!</li>
            </ul>
            <a className="buy-now-btn" href="https://buy.stripe.com/3cs28N4Iec5peSA4gg" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            <p className="agreement">Genom att gå vidare till betalningen godkänner du <a href="/terms-and-conditions">villkor</a> och <a href="/integrity-policy">integritetspolicyn</a>.</p>
            <p className="payment-info">Betalningen sköts snabbt, smidigt och säkert med <a href="https://stripe.com/"> <i className="fab fa-stripe"></i> </a></p>
          </div>
        </div>
        <div className="related-products">
          <h2>Liknande produkter</h2>
          <div className="cards-flex">
            {/* <div className="related-product related-product-1" onClick={redirectToRelatedProduct1}>
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
            </div> */}
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
            {/* <div className="related-product related-product-2" onClick={redirectToRelatedProduct2}>
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
                <button className="add-to-cart-btn" onClick={redirectToRelatedProduct2}>Läs mer <i className="fas fa-arrow-right"></i> </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program1
