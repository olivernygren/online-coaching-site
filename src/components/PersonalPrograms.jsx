import React, { useState, useEffect } from 'react'
import LogoIcon from '../images/ONfitness-icon.svg'
import Program1 from '../images/covers/kostschema.png'
import Program2 from '../images/covers/kostochtraning.png'
import Program3 from '../images/covers/traningsprogram.png'
import '../css/main.css'
import '../css/personalPrograms.css'
import { Link } from 'react-router-dom'

function PersonalPrograms() {

  const [showInitial, setShowInitial] = useState(true)
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)
  const [showLast, setShowLast] = useState(false)

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="personal-programs-container personal-programs-page" id="plans">
      <h2 className="main-h2">Personliga Upplägg</h2>
      <div className="background personal-programs-bg">
        <h2>Vilket paket passar dig bäst?</h2>
        <div className="personal-programs">

          <div className="personal-program personal-program-1">
            <div className="personal-program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-down" title="Kom igång"></i>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={Program1} alt="Kostschema" />
            <h4>8 veckors Kostschema</h4>
            <h5>899 kr</h5>
            <a href="#get-started-form" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>
          
          <div className="personal-program personal-program-2">
            <div className="personal-program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-down" title="Kom igång"></i>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={Program2} alt="Kost- och Träningsprogram" />
            <h4>10 veckors Komplett Kost- och Träningsprogram</h4>
            <h5>1 199 kr <small className="line-through">1 870 kr</small> </h5>
            <a href="#get-started-form" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>

          <div className="personal-program personal-program-3">
            <div className="personal-program-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-down" title="Kom igång"></i>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={Program3} alt="Träningsprogram" />
            <h4>8 veckors Träningsprogram</h4>
            <h5>599 kr</h5>
            <a href="#get-started-form" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>
        </div>
      </div>

      <div className="whats-included whats-included-programs">
        <div className="content">
          <h2>Vad ingår i Personligt Upplägg?</h2>
          <p>
            Direkt efter beställning av valfritt uppläggs-paket får du skickat till dig ett motsvarande svarsformulär. Här svarar du på
            de frågor som finns och fyller i den information jag frågar efter. När jag fått tillbaka ifyllt formulär med
            den information jag behöver så börjar jag bygga ditt träningsprogram, kostschema eller båda, beroende på
            vilket paket du köpt, utifrån dina preferenser. Detta bör ta ca 2-5 arbetsdagar beroende på en rad olika faktorer, framför allt vilket 
            paket du köpt. Denna tid krävs för att bygga ett så personligt anpassat program som möjligt. <br /> <br /> Betalningen sker i form av en 
            e-faktura som du betalar enkelt i mobilen. Du betalar alltså ingenting innan du får ditt personliga upplägg, helt riskfritt för dig som kund! <br /> <br />
            Nu är det upp till dig att följa programmet och nå maximala resultat!
          </p>
          <div className="training">
            <h3>Träningsprogram <i className="fas fa-dumbbell"></i> </h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett träningsprogram som passar just dig!</p>
            <ul>
              <li> <b>Träningstyp</b> bestäms utifrån din budget, tid, skador och andra preferenser. Detta kan vara alltifrån bodybuilding till hemmaträning utan redskap.</li>
              <li> <b>Träningsvolym</b> och antal sets och reps bestäms utifrån din nivå och erfarenhet, dina mål och preferenser.</li>
              <li> <b>Övningar</b> bestäms framför allt utifrån dina preferenser. Den bästa övningen är den du kommer att göra. Anpassas också såklart efter eventuella skador, dina mål och svagheter i din fysik.</li>
            </ul>
          </div>
          <div className="nutrition">
            <h3>Kostschema <i className="fas fa-utensils"></i> </h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett kostschema som passar just dig!</p>
            <ul>
              <li> <b>Antal måltider</b> bestäms utifrån dina svar i formuläret.</li>
              <li> <b>Mängden kalorier</b> baseras på dina mål. Jag kommer noggrant räkna ut dina kaloribehov, något som vi kan/kommer justera beroende på hur din vikt och din fysik utvecklas, eller om dina mål skulle förändras.</li>
              <li> <b>Makros - Protein, Fett och Kolhydrater</b> i ditt kostschema baseras på dina mål, preferenser samt timme efter timme av de senaste 4 åren av mitt liv av research bland branschens bästa och mest pålitliga resurser.</li>
              <li> <b>En grund med vitaminer och mineraler</b> kommer utgöra grunden av ditt kostschema i form av näringsrik och lättupptaglig mat. Beroende på dina preferenser byggs grunden av en handfull av dessa livsmedel. Här kommer jag lägga störst fokus för att se till att din hälsa sätts i första rummet, oavsett dina mål.</li>
              <li> <b>Kosttillskott</b> kommer baseras på dina mål, din budget och eventuella näringsbrister pga mat-preferenser.</li>
              <li> <b>Matsmältningen</b> blir också en prioritet som baseras på svaren i formuläret. Vi mår som magen mår. Därför är det viktigt att den mat och närning vi stoppar i oss kan absorberas och inte ger oss gas eller diarrésymptom.</li>
              <li> <b>Olika dieter och allergier</b> kommer anpassas efter! Vegan, vegeterian, pescaterian, laktosintollerans, glutenintollerans, nötallergi eller liknande behöver inte stå i vägen för dina mål! Liknande kommer du få specificera i formuläret så att jag kan anpassa ditt schema efter dessa.</li>
              <li> <b>Vad du gillar och inte gillar</b> kommer avgöra hur du kan hålla dig till schemat. Att konstant behöva äta något man inte tycker om, eller alltid behöva utesluta ens favoritmat är inte hållbart i längden. Därför kommer jag noggrant anpassa ditt schema utefter dina preferenser.</li>
            </ul>
          </div>
          <div className="communication">
            <h3>Kommunikation med mig <i className="fas fa-comments"></i> </h3>
            <p>
              Till skillnad från online-coaching får du med endast personligt upplägg ingen möjlighet till direktkontakt med på Messenger. Däremot finns jag självklart tillgänglig på
              Instagram DM eller mail för att svara på frågor angående ditt träningsprogram eller schema! Vänlig notera att kommunikation med online-coaching-klienter går i första
              hand och svar kan därför dröja lite längre.
            </p>
          </div>
          <div className="sustainability">
            <h3>Alltid fokus på hållbarhet i längden! <i className="fas fa-check"></i> </h3>
            <p>
              Oavsett vilket paket du väljer kommer fokus ligga på att du ska få hållbara resultat, något som håller i längden. Jag jobbar inte kortsiktigt.
              Kortsiktiga mål ger kortsiktiga resultat. Nästan alla som går "på en diet" lyckas gå ner i vikt. Men endast 5% lyckas hålla vikten nere. I princip alla ökar 
              alltså i vikt direkt efter deras så kallade "diet". När du jobbar med mig hoppar du inte på någon diet! Det där är fullkommligt skitsnack. Vi kommer jobba med
              att skapa hållbara rutiner och en livsstil som du kan ha med dig livet ut.
            </p>
          </div>
          <a className="cta-link" href="#get-started-form">Kom igång nu <i className="fas fa-arrow-down"></i> </a>
        </div>
      </div>

      <div className="information-section">
        <div className="content">
          <h2>Hur kan jag hjälpa dig beroende på din nivå?</h2>
          <div className="levels">
            <div className="beginner">
              <div className="number">1</div>
              <h3>För nybörjare</h3>
              <h5>Oerfaren eller precis kommit igång</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
            <div className="intermediate">
              <div className="number">2</div>
              <h3>För dig med en del efrarenhet</h3>
              <h5>Tränat i ett par år</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
            <div className="advanced">
              <div className="number">3</div>
              <h3>För den avancerade</h3>
              <h5>Tränat i många år</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
          </div>
        </div>
      </div>

      <div className="last-cta-section last-cta-section-2">
        <div className="content">
          <h2>KOM IGÅNG MED DITT UPPLÄGG HÄR</h2>
          <p>Låt oss arbeta tillsammans och se hur du kan överträffa dina mål med träning, kost och livsstil med ett av Sveriges mest prisvärda och personligt anpassade kost- och träningsupplägg!</p>
          <h3>Svara på frågorna i formuläret nedan för att komma igång. Svårare än så är det inte</h3>
          <p>Efter du har skickat iväg ett ifyllt formulär så kontaktar jag dig så fort jag kan för vidare planering av ditt upplägg.</p>
        </div>
      </div>

      <form className="hero-form oc-form" method="POST" action="https://formspree.io/f/mgerypyz" id="get-started-form">
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
            <input type="text" name="name" required />
            <label htmlFor="mobile">Mobilnummer</label>
            <input type="mobile" name="mobile" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <button onClick={handleShowFifth} className="form-back-btn" type="button" id="back-btn-6"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
          <button onClick={handleShowFirst} className="form-submit-btn" type="submit" id="submit-btn">Slutför och Skicka <i className="fas fa-paper-plane"></i> </button>
        </div>
      </form>

      <div className="online-coaching-contact">
        <div className="content">
          <h2>Har du frågor kring personliga upplägg?</h2>
          <p>Det finns en chans att din fråga redan finns besvarad på min <Link to="/faq">FAQ-sida</Link> </p>
          <p>Annars svarar jag gladerligen på dina frågor. Se hur du kan kontakta mig <Link to="/contact">här</Link> </p>
        </div>
      </div>

    </div>
  )
}

export default PersonalPrograms
