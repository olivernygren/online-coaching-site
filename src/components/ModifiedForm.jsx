import React, { useState } from 'react'
import { useEffect, useCallback } from 'react'


function ModifiedForm() {

  const [showInitial, setShowInitial] = useState(true)
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)
  const [showLast, setShowLast] = useState(false)

  // för onchange
  const [name, setName] = useState('false')
  const [email, setEmail] = useState('')
  const [phoneNr, setPhoneNr] = useState('')

  // alla ska va uppfyllda för submit knappen att visas
  const [isNameOK, setIsNameOK] = useState(false)
  const [isPhoneNrOK, setIsPhoneNrOK] = useState(false)
  const [isEmailOK, setIsEmailOK] = useState(false)

  // error meddelanden på skärmen
  const [nameError, setNameError] = useState('')
  const [phoneNrError, setPhoneNrError] = useState('')
  const [emailError, setEmailError] = useState('')

  // bestämmer om submit knapp visas baserat på om alla individuella är ok
  const [isFormDataOK, setIsFormDataOK] = useState(false)

  // om anv godkänner uppgifter och int policy
  const [hasConsent, setHasConsent] = useState(false)

  const handleShowInitial = () => {
    setShowLast(false)
    setShowFirst(false)
    setShowInitial(true)
  }

  const handleShowFirst = () => {
    setShowSecond(false)
    setShowInitial(false)
    setShowFirst(true)
  }
  
  const handleShowSecond = () => {
    setShowFirst(false)
    setShowThird(false)
    setShowSecond(true)
  }

  const handleShowThird = () => {
    setShowSecond(false)
    setShowFourth(false)
    setShowThird(true)
  }
  
  const handleShowFourth = () => {
    setShowThird(false)
    setShowFifth(false)
    setShowFourth(true)
  }
  
  const handleShowFifth = () => {
    setShowFourth(false)
    setShowLast(false)
    setShowFifth(true)
  }
  
  const handleShowLast = () => {
    setShowFifth(false)
    setShowLast(true)
  }

  const handleDisableSubmitButton = useCallback(() => {
    if (isNameOK && isPhoneNrOK && isEmailOK && hasConsent === false) {
      setIsFormDataOK(true)
    } else {
      setIsFormDataOK(false)
    }
  }, [hasConsent, isEmailOK, isNameOK, isPhoneNrOK])

  const updateConsent = () => {
    setHasConsent(!hasConsent)
  }

  const handleSubmit =() => {
    if (isNameOK) {
      setNameError('')
    } else {
      setNameError('Ange ett giltigt namn')
    }
    if (isPhoneNrOK) {
      setPhoneNrError('')
    } else {
      setPhoneNrError('Ange ett giltigt mobilnummer')
    }
    if (isEmailOK) {
      setEmailError('')
    } else {
      setPhoneNrError('Ange en giltig email-adress')
    }
  }

  const checkName = useCallback((e) => {
    console.log('checkar namn', name)
    setName(e.target.value)
    if (name.length > 1) {
      setIsNameOK(true)
    } else {
      setIsNameOK(false)
    }

    handleDisableSubmitButton()

  }, [handleDisableSubmitButton, name])

  const checkPhoneNr = useCallback((e) => {
    console.log('checkar nummer', phoneNr)
    setPhoneNr(e.target.value)
    if (phoneNr.length > 1) {
      setIsPhoneNrOK(true)
    } else {
      setIsPhoneNrOK(false)
    }

    handleDisableSubmitButton()

  }, [handleDisableSubmitButton, phoneNr])

  const checkEmail = useCallback((e) => {
    console.log('checkar email', email)
    setEmail(e.target.value)
    if (email.includes('@') && email.includes('.')) {
      setIsEmailOK(true)
    } else {
      setIsEmailOK(false)
    }

    handleDisableSubmitButton()

  }, [email, handleDisableSubmitButton])

  useEffect(() => {
    document.getElementById('name-input').addEventListener('change', checkName)
    document.getElementById('phone-nr-input').addEventListener('change', checkPhoneNr)
    document.getElementById('email-input').addEventListener('change', checkEmail)
  }, [checkEmail, checkName, checkPhoneNr])

  return (
    <>
      <div className={showInitial ? "form-page form-page-initial" : "hide"}>
        <h3>Vilket paket passar dig bäst?</h3>
        <span>Välj endast ett alternativ</span>
        <div className="option first-option">
          <label htmlFor="complete-package-10-week">Komplett Kost- och Träningsupplägg (10 veckor)</label>
          <input type="checkbox" name="complete-package-10-week" />
        </div>
        <div className="option second-option">
          <label htmlFor="food-package">Endast Kostschema (8-veckor)</label>
          <input type="checkbox" name="food-package" />
        </div>
        <div className="option third-option">
          <label htmlFor="training-program-package">Endast Träningsprogram (8-veckor)</label>
          <input type="checkbox" name="training-program-package" />
        </div>
        <button onClick={handleShowFirst} className="form-next-btn" type="button" id="next-btn-1">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showFirst ? "form-page form-page-1" : "hide"}>
        <h3>Vad är ditt främsta mål?</h3>
        <span>Välj endast ett alternativ</span>
        <div className="option first-option">
          <label htmlFor="goal-build-muscle">Bygga muskelmassa</label>
          <input type="checkbox" name="goal-build-muscle" />
        </div>
        <div className="option second-option">
          <label htmlFor="goal-burn-fat">Bränna fett</label>
          <input type="checkbox" name="goal-burn-fat" />
        </div>
        <div className="option third-option">
          <label htmlFor="goal-lose-weight">Gå ner i vikt</label>
          <input type="checkbox" name="goal-lose-weight" />
        </div>
        <div className="option fourth-option">
          <label htmlFor="goal-tone">Tona kroppen och få mer muskeldefinition</label>
          <input type="checkbox" name="goal-tone" />
        </div>
        <button onClick={handleShowInitial} className="form-back-btn" type="button" id="back-btn-2"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleShowSecond} className="form-next-btn" type="button" id="next-btn-1">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showSecond ? "form-page form-page-2" : "hide"}>
        <h3>Hur gammal är du?</h3>
        <span>Välj endast ett alternativ</span>
        <div className="option first-option">
          <label htmlFor="age-14-18">14-18 år</label>
          <input type="checkbox" name="age-14-18" />
        </div>
        <div className="option second-option">
          <label htmlFor="age-19-25">19-25 år</label>
          <input type="checkbox" name="age-19-25" />
        </div>
        <div className="option third-option">
          <label htmlFor="age-25-40">25-40 år</label>
          <input type="checkbox" name="age-25-40" />
        </div>
        <div className="option fourth-option">
          <label htmlFor="age-40-plus">40+</label>
          <input type="checkbox" name="age-40-plus" />
        </div>
        <button onClick={handleShowFirst} className="form-back-btn" type="button" id="back-btn-2"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleShowThird} className="form-next-btn" type="button" id="next-btn-2">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showThird ? "form-page form-page-3" : "hide"}>
        <h3>Ditt kön</h3>
        <span>Välj endast ett alternativ</span>
        <div className="option first-option">
          <label htmlFor="man">Man</label>
          <input type="checkbox" name="man" />
        </div>
        <div className="option second-option">
          <label htmlFor="woman">Kvinna</label>
          <input type="checkbox" name="woman" />
        </div>
        <button onClick={handleShowSecond} className="form-back-btn" type="button" id="back-btn-3"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleShowFourth} className="form-next-btn" type="button" id="next-btn-3">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showFourth ? "form-page form-page-4" : "hide"}>
        <h3>Berätta kort om dig själv</h3>
        <span>Tex. träningserfarenhet, mål osv</span>
        <div className="option first-option">
          <textarea name="short-desc" cols="30" rows="10"></textarea>
        </div>
        <button onClick={handleShowThird} className="form-back-btn" type="button" id="back-btn-4"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleShowFifth} className="form-next-btn" type="button" id="next-btn-4">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showFifth ? "form-page form-page-5" : "hide"}>
        <h3>När vill du helst bli kontaktad?</h3>
        <span>Välj endast ett alternativ</span>
        <div className="option first-option">
          <label htmlFor="morning">kl. 08-10</label>
          <input type="checkbox" name="morning-08-10" />
        </div>
        <div className="option second-option">
          <label htmlFor="lunch-time">kl. 13-16</label>
          <input type="checkbox" name="lunch-time-13-16" />
        </div>
        <div className="option third-option">
          <label htmlFor="evening">kl. 19-21</label>
          <input type="checkbox" name="evening-19-21" />
        </div>
        <button onClick={handleShowFourth} className="form-back-btn" type="button" id="back-btn-5"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleShowLast} className="form-next-btn" type="button" id="next-btn-5">Nästa <i className="fas fa-arrow-right"></i> </button>
      </div>
      <div className={showLast ? "form-page form-page-6" : "hide"}>
        <h3>Fyll i din kontaktinformation så hör jag av mig!</h3>
        <div className="option first-option text-input-option">
          <label htmlFor="name">För- och efternamn</label>
          <input id="name-input" type="text" name="name" onChange={checkName} required />
          <span className="error-text">{nameError}</span>
          <label htmlFor="mobile">Mobilnummer</label>
          <input id="phone-nr-input" type="mobile" name="mobile" onChange={checkPhoneNr} required />
          <span className="error-text">{phoneNrError}</span>
          <label htmlFor="email">Email</label>
          <input id="email-input" type="email" name="email" onChange={checkEmail} required />
          <span className="error-text">{emailError}</span>
          <div className="consent-input">
            <input name="consent" type="checkbox" onClick={updateConsent} onChange={handleDisableSubmitButton} />
            <label htmlFor="consent">Jag godkänner <a target="blank" href="/integrity-policy">integritetspolicyn</a> och att informationen är korrekt</label>
          </div>
        </div>
        <button onClick={handleShowFifth} className="form-back-btn" type="button" id="back-btn-6"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
        <button onClick={handleSubmit} className={ isFormDataOK ? 'form-submit-btn' : 'disabled-submit-btn'} type="submit" id="submit-btn" disabled={ isFormDataOK ? false : true}>Slutför och Skicka <i className="fas fa-paper-plane"></i> </button>
      </div>
    </>
  )
}

export default ModifiedForm
