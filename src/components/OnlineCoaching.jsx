import React, { useState, useEffect } from 'react'
import '../css/onlineCoaching.css'
import '../css/main.css'
import LogoIcon from '../images/ONfitness-icon.svg'
// import PlaceholderCover from '../images/covers/placeholder.png'
import { Link } from 'react-router-dom'
import Form from './Form'
import onlineCoachingCover from '../images/covers/online-coaching.png'


function OnlineCoaching() {

  const [showToTopBtn, setShowToTopBtn] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    document.title = 'ONfitness | Online Coaching'
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

  return (
    <>
      <h2 className="oc-main-h2">Online Coaching</h2>
      <div className="home-online-coaching online-coaching-page-top" id="plans">
        <div className="content">
          <div className="card">
            <div className="online-coaching-header-btns">
              <a className="oc-card-small-link" href="#read-more" title="Läs Mer"><i className="fas fa-eye"/></a>
              <img src={LogoIcon} alt="Logo" />
              <a className="oc-card-small-link" href="#get-started-form" title="Kom igång"><i className="fas fa-arrow-down"/></a>
              {/* <i href="#get-started-form" className="fas fa-arrow-down" title="Kom igång"></i> */}
            </div>
            <img className="home-online-coaching-cover-img" src={onlineCoachingCover} alt="Kost- och Träningsprogram" />
            <h4>Komplett Kost- och Träningsupplägg + Coaching</h4>
            <h5>999 kr / mån <small className="day-price">33,3 kr / dag</small> </h5>
            <a href="#get-started-form" className="get-started-btn-2">Kom igång <i className="fas fa-arrow-down"></i> </a>
          </div>

          <div className="info-text oc-info-text">
            <h3 id="read-more">Vad ingår?</h3>
            <p>
              Efter att du fyllt i och skickat iväg ansökningsformuläret nederst på sidan hör jag av mig till dig via mail. 
              Efter ansökan kommer du få ett formulär skickat till den e-post du angivit. Besvara alla frågor i formuläret. 
              I samma mail kommer du också få ett par tider att välja mellan för inbokning av en video-konsultation (kortare online-möte). Detta ingår självklart utan extra kostnad och är även helt valfritt!
              Utefter svaren på frågorna i formuläret och konsultationen bygger jag ditt upplägg HELT från grunden, vilket inkluderar:
            </p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Både kost- och träningsupplägg kan enkelt öppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Tillgång till en privat facebook-grupp med alla andra klienter.</li>
              <li> <b>+</b> Direktkontakt med mig via Instagram DM för motivation, frågor eller ändringar av upplägget.</li>
              <li> <b>+</b> (Valfritt) online-möte med mig innan skapandet av programmet.</li>
              <li> <b>+</b> Ändringar görs löpande varje månad och/eller efter behov</li>
              <li> <b>+</b> Kontinuerlig uppföljning och avstämningar veckovis</li>
            </ul>
            <p className="payment-notice">Jag börjar skapandet av ditt upplägg efter första betalning. Sedan skickas e-faktura för betalning varje månad tills du säger upp coachingen. Ingen uppsägningstid!</p>
            <a href="#get-started-form" className="read-more-btn">Kom igång nu <i className="fas fa-arrow-down"></i> </a>
          </div>
        </div>
      </div>

      <div className="whats-included">
        <div className="content">
          <h2 className="wi-h2">Hur funkar online coaching?</h2>
          <p>
            Redan direkt efter ditt köp får du kontaktuppgifter till mig. Då är jag redo att svara på alla frågor du kan tänka dig. <br /> <br />
            När jag fått tillbaka ifyllt formulär med
            den information jag behöver och den första betalningen har kommit in så börjar jag bygga ditt träningsprogram och kostschema, utifrån dina preferenser. 
            Detta bör ta ca 2-4 arbetsdagar beroende på en rad olika faktorer. Denna tid krävs för att bygga ett så personligt anpassat program som möjligt. <br /> <br /> Du betalar alltså för aktuell månad, vilket innebär att du enkelt kan säga upp 
            din coaching när du vill utan att behöva betala extra! Hädanefter kommer vi ha check-ins (uppdateringar) varje vecka för utvärdering av veckan
            och att eventuellt göra förändringar i upplägget. Detta sker genom att du i ett DM graderar hur det gått med träningspass, kost, 
            motivation, energi, sömn och en valfri kommentar, utifrån en enkel mall som du får. Förändringar kan också ske löpande. På så sätt kan vi enkelt upptäcka mönster som kräver förändring i programmet. <br /> <br />
            Nu är det upp till dig att följa programmet och nå maximala resultat! <br /> <br />
            <small>OBS! Ej tävlingscoaching!</small>
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
              <li> <b>Olika dieter och allergier</b> kommer anpassas efter! Vegan, vegetarian, pescatarian, laktosintollerans, glutenintollerans, nötallergi eller liknande behöver inte stå i vägen för dina mål! Liknande kommer du få specificera i formuläret så att jag kan anpassa ditt schema efter dessa.</li>
              <li> <b>Vad du gillar och inte gillar</b> kommer avgöra hur du kan hålla dig till schemat. Att konstant behöva äta något man inte tycker om, eller alltid behöva utesluta ens favoritmat är inte hållbart i längden. Därför kommer jag noggrant anpassa ditt schema utefter dina preferenser.</li>
            </ul>
          </div>
          <div className="communication">
            <h3>Kommunikation med mig <i className="fas fa-comments"></i> </h3>
            <p>
              Efter beställning av online-coaching-paket kommer jag finnas tillgänglig för att svara på frågor på privat Instagram DM eller på email. Önskar du online-möte för en mer djupgående
              diskussion kring upplägget eller veckoutvärderingen så går det säkert att lösa! Som nämnt ovan kommer det ske check-ins varje vecka för utvärdering av veckan.
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
              alltså i vikt direkt efter deras så kallade "diet". När du jobbar med mig hoppar du inte på någon diet! Det där är fullkommligt skitsnack. Vi kommer jobba med
              att skapa hållbara rutiner och en livsstil som du kan ha med dig livet ut, oavsett hur länge vi jobbar tillsammans.
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
              <a href="#get-started-form" className="choose-plan-btn">Kom igång <i className="fas fa-arrow-down"></i> </a>
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
              <a href="#get-started-form" className="choose-plan-btn">Kom igång <i className="fas fa-arrow-down"></i> </a>
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
              <a href="#get-started-form" className="choose-plan-btn">Kom igång <i className="fas fa-arrow-down"></i> </a>
            </div>
          </div>
        </div>
      </div>

      <div className="client-expectations">
        <div className="content">
          <h2>Vad förväntar jag mig av dig som klient?</h2>
          <span>Av dig som online-coaching-klient förväntar jag mig endast EN grej</span>
          <h3>Total ärlighet</h3>
          <p>
            Behöver du göra någon förändring i planen? <b>Meddela mig.</b> <br/> <br/>
            Är du sugen på att testa något nytt? <b>Meddela mig.</b> <br/> <br/>
            Får du inte de resultat du önskar? <b>Meddela mig.</b> <br/> <br/>
            Har du tröttnat på maten i ditt schema? <b>Meddela mig.</b> <br/> <br/>
            Har du tappat motivationen? <b>Meddela mig.</b> <br/> <br/>
            Stoppade du i dig en hel påse chips och en liter glass igår kväll? <b>Meddela mig.</b> <br/> <br/>

            Det enda jag förväntar mig och kräver av dig som klient är total ärlighet. Även om du begår misstag och inte håller dig till planen så är det inget som inte kan göras ogjort.
            För att vi ska kunna jobba tillsammans och justera din plan efter dina resultat krävs det total transparens, oavsett om du hållt dig till planen eller inte. Om inte de förväntade
            resultaten kommer så är det viktigt att jag vet exakt varför. Är det så att du följt planen till punkt och pricka och resultaten inte kommer, då är dags att ändra planen.
          </p>
        </div>
      </div>

      <div className="last-cta-section" id="get-started-form">
        <div className="content">
          <h2>KOM IGÅNG MED ONLINE COACHING HÄR</h2>
          <p>Låt oss arbeta tillsammans och se hur du kan överträffa dina mål med träning, kost och livsstil med ett av Sveriges mest prisvärda och personligt anpassade online-coaching planer!</p>
          <h3>Svara på frågorna i formuläret nedan för att komma igång. Svårare än så är det inte</h3>
          <p>Efter du har skickat iväg ett ifyllt formulär så kontaktar jag dig så fort jag kan för vidare planering av ditt upplägg.</p>
        </div>
      </div>

      <form className="hero-form oc-form" method="POST" action="https://formspree.io/f/xyyljnop">
        <Form/>
      </form>

      <div className="online-coaching-contact">
        <div className="content">
          <h2>Har du frågor kring online coaching?</h2>
          <p>Det finns en chans att din fråga redan finns besvarad på min <Link to="/faq">FAQ-sida</Link> </p>
          <p>Annars svarar jag gladerligen på dina frågor. Se hur du kan kontakta mig <Link to="/contact">här</Link> </p>
        </div>
      </div>

      <div className="to-top-btn" style={{ opacity: showToTopBtn ? '1' : '0', pointerEvents: showToTopBtn ? 'all' : 'none' }}>
        <button onClick={scrollToTop}><i className="fas fa-arrow-up"></i></button>
      </div>
    </>
  )
}

export default OnlineCoaching
