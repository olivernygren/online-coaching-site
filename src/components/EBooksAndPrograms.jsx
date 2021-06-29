import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/eBooksAndPrograms.css'
import LogoIcon from '../images/ONfitness-icon.svg'
import PlaceholderCover from '../images/covers/placeholder.png'

function EBooksAndPrograms() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="e-books-and-programs">
      <h2 className="main-h2">E-böcker och Program</h2>

      <div className="e-books-container">
        <h2>E-böcker <i className="fas fa-book"></i> </h2>
        <div className="e-books">

          <div className="book book-1">
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="book book-2">
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="book book-3">
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="book book-4">
            <div className="book-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="e-book-cover-img" src={PlaceholderCover} alt="E-bok" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

        </div>
      </div>
      <div className="programs-container">
        <h2>Färdiga Kost- och Träningsprogram <i className="fas fa-dumbbell"></i> </h2>
        <div className="programs">
          <div className="program program-1">
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="program program-2">
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="program program-3">
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>

          <div className="program program-4">
            <div className="program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
            </div>
            <div className="img-bg"></div>
            <img className="program-cover-img" src={PlaceholderCover} alt="Program" />
            <h4>Name</h4>
            <h5>199 kr</h5>
            <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EBooksAndPrograms
