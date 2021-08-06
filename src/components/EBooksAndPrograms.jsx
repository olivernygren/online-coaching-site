import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/eBooksAndPrograms.css'
import LogoIcon from '../images/ONfitness-icon.svg'
// import PlaceholderCover from '../images/covers/placeholder.png'
import { products } from '../database/products'
import { useHistory } from 'react-router'

function EBooksAndPrograms() {

  const history = useHistory()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | E-böcker & Färdiga Program'
  }, [])

  const program1 = products.findIndex((product) => product.id === 1001)
  const program1Name = products[program1].name
  const program1Price = products[program1].price
  const program1Link = products[program1].link
  const program1CoverImage = products[program1].coverImage

  const program2 = products.findIndex((product) => product.id === 1002)
  const program2Name = products[program2].name
  const program2Price = products[program2].price
  const program2Link = products[program2].link
  const program2CoverImage = products[program2].coverImage
  
  // const program3 = products.findIndex((product) => product.id === 1003)
  // const program3Name = products[program3].name
  // const program3Price = products[program3].price
  // const program3Link = products[program3].link
  
  // const program4 = products.findIndex((product) => product.id === 1004)
  // const program4Name = products[program4].name
  // const program4Price = products[program4].price
  // const program4Link = products[program4].link

  const eBook1 = products.findIndex((product) => product.id === 2001)
  const eBook1Name = products[eBook1].name
  const eBook1Price = products[eBook1].price
  const eBook1Link = products[eBook1].link
  const eBook1CoverImage = products[eBook1].coverImage

  const eBook2 = products.findIndex((product) => product.id === 2002)
  const eBook2Name = products[eBook2].name
  const eBook2Price = products[eBook2].price
  const eBook2Link = products[eBook2].link
  const eBook2CoverImage = products[eBook2].coverImage
  
  const eBook3 = products.findIndex((product) => product.id === 2003)
  const eBook3Name = products[eBook3].name
  const eBook3Price = products[eBook3].price
  const eBook3Link = products[eBook3].link
  const eBook3CoverImage = products[eBook3].coverImage
  
  const eBook4 = products.findIndex((product) => product.id === 2004)
  const eBook4Name = products[eBook4].name
  const eBook4Price = products[eBook4].price
  const eBook4Link = products[eBook4].link
  const eBook4CoverImage = products[eBook4].coverImage

  const redirectToEBook1 = (e) => {
    e.preventDefault()
    history.push(eBook1Link)
  }

  const redirectToEBook2 = (e) => {
    e.preventDefault()
    history.push(eBook2Link)
  }

  const redirectToEBook3 = (e) => {
    e.preventDefault()
    history.push(eBook3Link)
  }

  const redirectToEBook4 = (e) => {
    e.preventDefault()
    history.push(eBook4Link)
  }

  const redirectToProgram1 = (e) => {
    e.preventDefault()
    history.push(program1Link)
  }

  const redirectToProgram2 = (e) => {
    e.preventDefault()
    history.push(program2Link)
  }

  // const redirectToProgram3 = (e) => {
  //   e.preventDefault()
  //   history.push(program3Link)
  // }

  // const redirectToProgram4 = (e) => {
  //   e.preventDefault()
  //   history.push(program4Link)
  // }

  return (
    <div className="e-books-and-programs">
      <h2 className="main-h2">E-böcker och Program</h2>

      <div className="e-books-container">
        <h2>E-böcker <i className="fas fa-book"></i> </h2>
        <div className="e-books">

          <div className="book book-1" onClick={redirectToEBook1}> 
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-white-bg" src={eBook1CoverImage} alt={eBook1Name} />
            <h4>{eBook1Name}</h4>
            <h5>{eBook1Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="book book-2 disabled-product" onClick={redirectToEBook2}> {/* onClick={redirectToEBook2} */}
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-white-bg" src={eBook2CoverImage} alt="E-bok" />
            <h4>{eBook2Name}</h4>
            <h5>{eBook2Price} kr</h5>
            <button className="add-to-cart-btn">KOMMER SNART! {/*<i className="fas fa-arrow-right"></i>*/} </button>
          </div>

          <div className="book book-3 disabled-product" onClick={redirectToEBook3}>
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-white-bg" src={eBook3CoverImage} alt="E-bok" />
            <h4>{eBook3Name}</h4>
            <h5>{eBook3Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">KOMMER SNART! {/*<i className="fas fa-arrow-right"></i>*/} </button>
          </div>

          <div className="book book-4 disabled-product" onClick={redirectToEBook4}>
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={eBook4CoverImage} alt="E-bok" />
            <h4>{eBook4Name}</h4>
            <h5>{eBook4Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">KOMMER SNART! {/*<i className="fas fa-arrow-right"></i>*/} </button>
          </div>

        </div>
      </div>
      <div className="programs-container">
        <h2>Färdiga Kost- och Träningsprogram <i className="fas fa-dumbbell"></i> </h2>
        <div className="programs">
          <div className="program program-1 disabled-product" onClick={redirectToProgram1}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={program1CoverImage} alt="Program" />
            <h4>{program1Name}</h4>
            <h5>{program1Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">KOMMER SNART! <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="program program-2 disabled-product" onClick={redirectToProgram2}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={program2CoverImage} alt="Program" />
            <h4>{program2Name}</h4>
            <h5>{program2Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">KOMMER SNART! <i className="fas fa-arrow-right"></i> </button>
          </div>
{/* 
          <div className="program program-3" onClick={redirectToProgram3}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>{program3Name}</h4>
            <h5>{program3Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="program program-4"  onClick={redirectToProgram4}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>{program4Name}</h4>
            <h5>{program4Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default EBooksAndPrograms
