import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/eBooksAndPrograms.css'
import LogoIcon from '../images/ONfitness-icon.svg'
import PlaceholderCover from '../images/covers/placeholder.png'
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

  const program1Index = 0
  const program1Name = products[program1Index].name
  const program1Price = products[program1Index].price
  const program1Link = products[program1Index].link

  // const program2Index = 1
  // const program2Name = products[program2Index].name
  // const program2Price = products[program2Index].price
  // const program2Link = products[program2Index].link
  
  // const program3Index = 2
  // const program3Name = products[program3Index].name
  // const program3Price = products[program3Index].price
  // const program3Link = products[program3Index].link
  
  // const program4Index = 3
  // const program4Name = products[program4Index].name
  // const program4Price = products[program4Index].price
  // const program4Link = products[program4Index].link

  const eBook1Index = 4
  const eBook1Name = products[eBook1Index].name
  const eBook1Price = products[eBook1Index].price
  const eBook1Link = products[eBook1Index].link

  // const eBook2Index = 5
  // const eBook2Name = products[eBook2Index].name
  // const eBook2Price = products[eBook2Index].price
  // const eBook2Link = products[eBook2Index].link
  
  // const eBook3Index = 6
  // const eBook3Name = products[eBook3Index].name
  // const eBook3Price = products[eBook3Index].price
  // const eBook3Link = products[eBook3Index].link
  
  // const eBook4Index = 7
  // const eBook4Name = products[eBook4Index].name
  // const eBook4Price = products[eBook4Index].price
  // const eBook4Link = products[eBook4Index].link

  const redirectToEBook1 = (e) => {
    e.preventDefault()
    history.push(eBook1Link)
  }

  // const redirectToEBook2 = (e) => {
  //   e.preventDefault()
  //   history.push(eBook2Link)
  // }

  // const redirectToEBook3 = (e) => {
  //   e.preventDefault()
  //   history.push(eBook3Link)
  // }

  // const redirectToEBook4 = (e) => {
  //   e.preventDefault()
  //   history.push(eBook4Link)
  // }

  const redirectToProgram1 = (e) => {
    e.preventDefault()
    history.push(program1Link)
  }

  // const redirectToProgram2 = (e) => {
  //   e.preventDefault()
  //   history.push(program2Link)
  // }

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
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>{eBook1Name}</h4>
            <h5>{eBook1Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          {/* <div className="book book-2" onClick={redirectToEBook2}>
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>{eBook2Name}</h4>
            <h5>{eBook2Price} kr</h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="book book-3" onClick={redirectToEBook3}>
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>{eBook3Name}</h4>
            <h5>{eBook3Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="book book-4" onClick={redirectToEBook4}>
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>{eBook4Name}</h4>
            <h5>{eBook4Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div> */}

        </div>
      </div>
      <div className="programs-container">
        <h2>Färdiga Kost- och Träningsprogram <i className="fas fa-dumbbell"></i> </h2>
        <div className="programs">
          <div className="program program-1" onClick={redirectToProgram1}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>{program1Name}</h4>
            <h5>{program1Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

          {/* <div className="program program-2" onClick={redirectToProgram2}>
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Läs mer"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>{program2Name}</h4>
            <h5>{program2Price} kr <i className="fas fa-tags"></i> </h5>
            <button className="add-to-cart-btn">Läs mer <i className="fas fa-arrow-right"></i> </button>
          </div>

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
