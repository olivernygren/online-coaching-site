import React from 'react'
import '../css/main.css'
import '../css/eBooksAndPrograms.css'
import LogoIcon from '../images/ONfitness-icon.svg'
import Program1 from '../images/covers/kostschema.png'
import Program2 from '../images/covers/kostochtraning.png'
import Program3 from '../images/covers/traningsprogram.png'
import PlaceholderCover from '../images/covers/placeholder.png'

function EBooksAndPrograms() {
  return (
    <div className="e-books-and-programs">
      <h2 className="main-h2">E-böcker och Program</h2>


      <div className="personal-programs-container">
        <div className="background">
          <h2>Personligt Anpassade Kost- och Träningsprogram <i className="fas fa-address-book"></i> </h2>
          <div className="personal-programs">

            <div className="personal-program personal-program-1">
              <div className="personal-program-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="personal-program-cover-img" src={Program1} alt="Kostschema" />
              <h4>Kostschema</h4>
              <h5>1 199 kr</h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>
            
            <div className="personal-program personal-program-2">
              <div className="personal-program-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="personal-program-cover-img" src={Program2} alt="Kost- och Träningsprogram" />
              <h4>Kost- och Träningsprogram</h4>
              <h5>1 899 kr</h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>

            <div className="personal-program personal-program-3">
              <div className="personal-program-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="personal-program-cover-img" src={Program3} alt="Träningsprogram" />
              <h4>Träningsprogram</h4>
              <h5>999 kr</h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>
          </div>
        </div>
      </div>


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
