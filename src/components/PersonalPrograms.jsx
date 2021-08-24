import React, { useState, useEffect } from 'react'
import LogoIcon from '../images/ONfitness-icon.svg'
// import Program1 from '../images/covers/kostschema.png'
// import Program2 from '../images/covers/kostochtraning.png'
// import Program3 from '../images/covers/traningsprogram.png'
import '../css/main.css'
import '../css/personalPrograms.css'
import { Link } from 'react-router-dom'
// import ModifiedForm from './ModifiedForm'
import { products } from '../database/products'

function PersonalPrograms() {

  const [showToTopBtn, setShowToTopBtn] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    document.title = 'ONfitness | Personliga Upplägg'
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 600) {
        setShowToTopBtn(true)
      } else if (window.pageYOffset < 600) {
        setShowToTopBtn(false)
      }
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const program1 = products.findIndex((product) => product.id === 3001)
  const program1Name = products[program1].name
  const program1Price = products[program1].price
  const program1PaymentLink = products[program1].paymentLink
  const program1CoverImage = products[program1].coverImage

  const program2 = products.findIndex((product) => product.id === 3002)
  const program2Name = products[program2].name
  const program2Price = products[program2].price
  const program2PaymentLink = products[program2].paymentLink
  const program2CoverImage = products[program2].coverImage

  const program3 = products.findIndex((product) => product.id === 3003)
  const program3Name = products[program3].name
  const program3Price = products[program3].price
  const program3DefaultPrice = products[program3].defaultPrice
  const program3PaymentLink = products[program3].paymentLink
  const program3CoverImage = products[program3].coverImage

  return (
    <div className="personal-programs-container personal-programs-page" id="plans">
      <h2 className="main-h2">Personliga Upplägg</h2>
      <div className="background personal-programs-bg">
        <h2>Vilket paket passar dig bäst?</h2>
        <div className="personal-programs">

          <div className="personal-program personal-program-1">
            <div className="personal-program-header-btns">
              <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
              <img src={LogoIcon} alt="Logo" />
              <a className="oc-card-small-link" href="#order-program" title="Kom igång"><i className="fas fa-arrow-down"/></a>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={program1CoverImage} alt="Kostschema" />
            <h4>{program1Name}</h4>
            <h5>{program1Price} kr <i className="fas fa-tags"></i> </h5>
            <a href="#order-program" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>
          
          <div className="personal-program personal-program-2">
            <div className="personal-program-header-btns">
              <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
              <img src={LogoIcon} alt="Logo" />
              <a className="oc-card-small-link" href="#order-program" title="Kom igång"><i className="fas fa-arrow-down"/></a>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={program3CoverImage} alt="Kost- och Träningsprogram" />
            <h4>{program3Name}</h4>
            <h5>{program3Price} kr <i className="fas fa-tags"></i> <small className="line-through">{program3DefaultPrice} kr</small> </h5>
            <a href="#order-program" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>

          <div className="personal-program personal-program-3">
            <div className="personal-program-header-btns">
              <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
              <img src={LogoIcon} alt="Logo" />
              <a className="oc-card-small-link" href="#order-program" title="Kom igång"><i className="fas fa-arrow-down"/></a>
            </div>
            <div className="img-bg"></div>
            <img className="personal-program-cover-img" src={program2CoverImage} alt="Träningsprogram" />
            <h4>{program2Name}</h4>
            <h5>{program2Price} kr <i className="fas fa-tags"></i> </h5>
            <a href="#order-program" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>
        </div>
      </div>

      <div className="whats-included whats-included-programs">
        <div className="content">
          <h2 id="read-more">Vad ingår i Personligt Upplägg?</h2>
          <p>
            Direkt efter beställning och köp av valfritt uppläggs-paket får du inom 24h ett motsvarande svarsformulär. Här svarar du på
            de frågor som finns och fyller i den information jag frågar efter. När jag fått tillbaka ifyllt formulär med
            den information jag behöver så börjar jag bygga ditt träningsprogram, kostschema eller båda, beroende på
            vilket paket du köpt, utifrån dina preferenser. Detta bör ta ca 2-5 arbetsdagar beroende på en rad olika faktorer, framför allt vilket 
            paket du köpt. Denna tid krävs för att bygga ett så personligt anpassat program som möjligt. <br /> <br />
            Nu är det upp till dig att följa programmet och nå maximala resultat! <br /> <br />
            <small>OBS! Ej tävlingsupplägg!</small>
          </p>
          <div className="training">
            <h3>Träningsprogram <i className="fas fa-dumbbell"></i> </h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett träningsprogram som passar just dig!</p>
            <p>Observera att träningsprogram ej ingår vid köp av endast kostschema!</p>
            <ul>
              <li> <b>Träningstyp</b> bestäms utifrån din budget, tid, skador och andra preferenser. Detta kan vara alltifrån bodybuilding till hemmaträning utan redskap.</li>
              <li> <b>Träningsvolym</b> och antal sets och reps bestäms utifrån din nivå och erfarenhet, dina mål och preferenser.</li>
              <li> <b>Övningar</b> bestäms framför allt utifrån dina preferenser. Den bästa övningen är den du kommer att göra. Anpassas också såklart efter eventuella skador, dina mål och svagheter i din fysik.</li>
            </ul>
          </div>
          <div className="nutrition">
            <h3>Kostschema <i className="fas fa-utensils"></i> </h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett kostschema som passar just dig!</p>
            <p>Observera att kostschema ej ingår vid köp av endast träningsprogram!</p>
            <ul>
              <li> <b>Antal måltider</b> bestäms utifrån dina svar i formuläret.</li>
              <li> <b>Mängden kalorier</b> baseras på dina mål. Jag kommer noggrant räkna ut dina kaloribehov och ge dig kunskap och verktyg för att förändra mängden kalorier när kroppen anpassat sig.</li>
              <li> <b>Makros - Protein, Fett och Kolhydrater</b> i ditt kostschema baseras på dina mål, preferenser samt timme efter timme av de senaste 4 åren av mitt liv av research bland branschens bästa och mest pålitliga resurser.</li>
              <li> <b>En grund med vitaminer och mineraler</b> kommer utgöra grunden av ditt kostschema i form av näringsrik och lättupptaglig mat. Beroende på dina preferenser byggs grunden av en handfull av dessa livsmedel. Här kommer jag lägga störst fokus för att se till att din hälsa sätts i första rummet, oavsett dina mål.</li>
              <li> <b>Kosttillskott</b> kommer baseras på dina mål, din budget och eventuella näringsbrister pga mat-preferenser.</li>
              <li> <b>Matsmältningen</b> blir också en prioritet som baseras på svaren i formuläret. Vi mår som magen mår. Därför är det viktigt att den mat och näring vi stoppar i oss kan absorberas och inte ger oss gas eller diarrésymptom.</li>
              <li> <b>Olika dieter och allergier</b> kommer anpassas efter! Vegan, vegaterian, pescatarian, laktosintollerans, glutenintollerans, nötallergi eller liknande behöver inte stå i vägen för dina mål! Liknande kommer du få specificera i formuläret så att jag kan anpassa ditt schema efter dessa.</li>
              <li> <b>Vad du gillar och inte gillar</b> kommer avgöra hur du kan hålla dig till schemat. Att konstant behöva äta något man inte tycker om, eller alltid behöva utesluta ens favoritmat är inte hållbart i längden. Därför kommer jag noggrant anpassa ditt schema utefter dina preferenser.</li>
            </ul>
          </div>
          <div className="communication">
            <h3>Kommunikation med mig <i className="fas fa-comments"></i> </h3>
            <p>
              Till skillnad från online-coaching får du med endast personligt upplägg ingen möjlighet till direktkontakt med på Instagram DM. Däremot finns jag självklart tillgänglig på
              DM emellanåt eller på mail för att svara på frågor angående ditt träningsprogram eller schema! Vänligen notera att kommunikation med online-coaching-klienter går i första
              hand och svar kan därför dröja lite längre.
            </p>
          </div>
          <div className="facebook-group">
            <h3>Privat facebook-grupp <i className="fab fa-facebook"></i><i className="fas fa-lock"></i> </h3>
            <p>
              Direkt efter ditt köp kommer du få inbjudan till en privat facebook-grupp, endast för klienter och kunder. Här kan du chatta med mig och alla andra
              om vad som helst.
            </p>
          </div>
          <div className="sustainability">
            <h3>Alltid fokus på hållbarhet i längden! <i className="fas fa-check"></i> </h3>
            <p>
              Min prio #1 är alltid långsiktighet! Jag jobbar inte kortsiktigt.
              Kortsiktiga mål ger kortsiktiga resultat. Nästan alla som går "på en diet" lyckas gå ner i vikt. Men endast 5% lyckas hålla vikten nere. I princip alla ökar 
              alltså i vikt direkt efter deras så kallade "diet". När du jobbar med mig hoppar du inte på någon diet! Det där är fullkomligt skitsnack. Vi kommer jobba med
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
              <p>
                De flesta nybörjare anser att de har för lite kunskap i början för att komma igång på riktigt. Detta blir ett hinder för många som antingen slutar att gå 
                till gymmet eller inte når närheten av sin fulla potential. De första 3 åren på gymmet är de absolut viktigaste, din potential för att bygga muskler är så 
                mycket större per år än vad den är senare. <br /> <br /> Att själv bygga ett bra träningsprogram är en nybörjares största utmaning. Jag ser ofta hur de fokuserar för mycket 
                på vissa muskelgrupper och vilar för lite eller för mycket. Att lägga upp ett träningsprogram med rätt split och övningar kräver noga planering utifrån ett
                flertal olika faktorer.<br /> <br /> Jag hjälper dig att bygga ett noga genomtänkt träningsprogram som ska passa ditt dagliga liv och hjälpa dig nå dina mål.
                Jag hjälper dig också bygga upp ett kostschema av näringsrika livsmedel som möter ditt personliga intag för att nå dina mål.
              </p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
            <div className="intermediate">
              <div className="number">2</div>
              <h3>För dig med en del efrarenhet</h3>
              <h5>Tränat i ett par år</h5>
              <p>
                För dig som tränat i ett par år finns det stor risk att du känner att du kunde nått högre med din träning, att du inte nått din fulla potential under dessa år.
                Många jag känner har kört gym och kost lite på halvfart utan att få några resultat. Vill du bygga seriös muskelmassa är det självklart inte för sent! <br /> <br /> Jag kan 
                hjälpa dig att maximera resultaten på gymmet med ett personlig anpassat träningsprogram utifrån dina behov och mål, ett program som har fokus på långsiktighet 
                så att du inte fortsätter hoppa av och på. <br /> <br /> Jag hjälper dig också bygga ett kostschema fullt av mat som DU gillar, som kommer hjälpa dig nå dina mål och optimera
                prestation i gymmet. <br /> <br /> Jag kommer också hjälpa dig med återhämtningen, sömn och att skapa dagliga rutiner för att nå dina mål. Om detta låter intressant är det bara
                att komma igång!          
              </p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
            <div className="advanced">
              <div className="number">3</div>
              <h3>För den avancerade</h3>
              <h5>Tränat i många år</h5>
              <p>
                Du som tränat i många år och anser dig vara "avancerad" undrar säkert hur du kan ta hjälp av mig, en ung kille med "endast" 5 års erfarenhet. Det jag kan erbjuda dig 
                är någon att hålla dig själv ansvarig för. <br /> <br /> Jag kommer hjälpa dig maximera din prestation i gymmet genom att bygga upp ett genomtänkt kostschema fullt av de näringsämnen
                som kommer ta din gymprestation till nya höjder. Planen jag bygger har alltid långsiktighet som första fokus som gör att du alltid kan hålla dig planen, vilket hinder
                som än må stå i din väg.  <br /> <br /> Som avancerad har du med största sannolikhet format egna rutiner och ditt eget sätt att göra saker och ting. Ett nytt perspektiv inom både träningen,
                kosten och återhämtningen kan vara exakt vad du behöver för att bryta dig ur din nuvarande platå!
              </p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-up"></i> </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="last-cta-section last-cta-section-2" id="get-started-form">
        <div className="content">
          <h2>KOM IGÅNG MED DITT UPPLÄGG HÄR</h2>
          <p>Låt oss arbeta tillsammans och se hur du kan överträffa dina mål med träning, kost och livsstil med ett av Sveriges mest prisvärda och personligt anpassade kost- och träningsupplägg!</p>
          <h3>Svara på frågorna i formuläret nedan för att komma igång. Svårare än så är det inte</h3>
          <p>Efter du har skickat iväg ett ifyllt formulär så kontaktar jag dig så fort jag kan för vidare planering av ditt upplägg.</p>
        </div>
      </div>

      <form className="hero-form oc-form" action="https://formspree.io/f/mgerypyz" method="POST">
        <ModifiedForm/>
      </form> */}

      <h2 className="main-h2 order-main-h2" id="order-program">BESTÄLL DITT UPPLÄGG HÄR</h2>
      <div className="personal-programs order-programs-container">
        <div className="personal-program personal-program-1 secondary-program">
          <div className="personal-program-header-btns">
            <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
            <img src={LogoIcon} alt="Logo" />
            <a className="oc-card-small-link" href={program1PaymentLink} title="Till betalning"><i className="fas fa-external-link-alt"></i></a>
          </div>
          <div className="img-bg"></div>
          <img className="personal-program-cover-img" src={program1CoverImage} alt="Kostschema" />
          <h4>{program1Name}</h4>
          <h5>{program1Price} kr <i className="fas fa-tags"></i> </h5>
          <a href={program1PaymentLink} className="get-started-btn-2">Beställ ditt upplägg <i className="fas fa-external-link-alt"></i> </a>
        </div>

        <div className="personal-program personal-program-2 main-program">
          <div className="personal-program-header-btns">
            <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
            <img src={LogoIcon} alt="Logo" />
            <a className="oc-card-small-link" href={program3PaymentLink} title="Till betalning"><i className="fas fa-external-link-alt"></i></a>
          </div>
          <div className="img-bg"></div>
          <img className="personal-program-cover-img" src={program3CoverImage} alt="Kost- och Träningsprogram" />
          <h4>{program3Name}</h4>
          <h5>{program3Price} kr <i className="fas fa-tags"></i> <small className="line-through">1 999 kr</small> </h5>
          <a href={program3PaymentLink} className="get-started-btn-2">Beställ ditt upplägg <i className="fas fa-external-link-alt"></i> </a>
        </div>

        <div className="personal-program personal-program-3 secondary-program">
          <div className="personal-program-header-btns">
            <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
            <img src={LogoIcon} alt="Logo" />
            <a className="oc-card-small-link" href={program2PaymentLink} title="Till betalning"><i className="fas fa-external-link-alt"></i></a>
          </div>
          <div className="img-bg"></div>
          <img className="personal-program-cover-img" src={program2CoverImage} alt="Träningsprogram" />
          <h4>{program2Name}</h4>
          <h5>{program2Price} kr <i className="fas fa-tags"></i> </h5>
          <a href={program2PaymentLink} className="get-started-btn-2">Beställ ditt upplägg <i className="fas fa-external-link-alt"></i> </a>
        </div>
      </div>

      <div className="online-coaching-contact">
        <div className="content">
          <h2>Har du frågor kring personliga upplägg?</h2>
          <p>Det finns en chans att din fråga redan finns besvarad på min <Link to="/faq">FAQ-sida</Link> </p>
          <p>Annars svarar jag gladerligen på dina frågor. Se hur du kan kontakta mig <Link to="/contact">här</Link> </p>
        </div>
      </div>

      <div className="to-top-btn" style={{ opacity: showToTopBtn ? '1' : '0', pointerEvents: showToTopBtn ? 'all' : 'none' }}>
        <button onClick={scrollToTop}><i className="fas fa-arrow-up"></i></button>
      </div>

    </div>
  )
}

export default PersonalPrograms
