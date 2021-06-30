import React, { useEffect } from 'react'
import '../css/terms.css'

function TermsAndConditions() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-container">
      <div className="content">

        <div className="heading">
          <h2>Köpvillkor</h2>
          <span>Senast uppdaterad: 30 juni 2021</span>
        </div>

        <h3>Priser och betalningar</h3>
        <p>Alla priser på hemsidan visas i SEK och inklusive moms. Ingen extra momskostnad adderas alltså på det visade priset. På betalningssidan visas alltid den totala kostnaden.</p>
        <p className="stripe-link-p">Betalningen sköts genom <a href="https://stripe.com/en-se"> <i className="fab fa-stripe"></i> </a></p>

        <h3>Ångerrätt och återbetalningar</h3>
        <p>Det finns ingen ångerrätt för nedladdningsbara produkter som e-böcker eller färdiga träningsprogram</p>
        <p>Ångerrätt på personliga upplägg och online coaching gäller fram tills att jag börjar jobba på upplägget. Efter jobbet med uppläggen har påbörjats finns alltså ingen ångerrätt då ett jobb har utförts. Kontakta mig via email snarast om du skulle ångra ditt köp av dessa två tjänster!</p>

        <h3>Garantier och service</h3>
        <p>Du är garanterad att få dina nedladdningsbara e-böcker eller färdiga program inom 12 timmar. Skulle du mot förmodan inte fått något inom denna tidsram, kontakta mig via email snarast!</p>
        <p>Tidsramen för online coaching upplägg och endast personliga upplägg specifieras på respektive sida. Skulle jag behöva mer tid med ditt upplägg än vad som angetts så kontaktar jag dig omgående.</p>
      
        <h3>Integritetspolicy</h3>
        <p>I vår integritetspolicy står allt du behöver veta om hur vi behandlar personuppgifter. Du kan läsa vår fullständiga policy <a href="/integrity-policy">här</a>.</p>
      
        <h3>Leverans</h3>
        <p>Då vi endast har försäljning av nedladdningsbara produkter tillkommer ingen extra leveranskostnad eller leveranstid. Observera att förseningar/problem med leveransen kan uppstå om du av misstag angivit fel uppgifter vid betalning.</p>
      
      </div>
    </div>
  )
}

export default TermsAndConditions
