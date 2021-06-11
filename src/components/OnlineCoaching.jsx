import React from 'react'
import '../css/onlineCoaching.css'
import '../css/main.css'
import LogoIcon from '../images/ONfitness-icon.svg'
import PlaceholderCover from '../images/covers/placeholder.png'

function OnlineCoaching() {
  return (
    <>
      <h2 className="main-h2">Online Coaching</h2>
      <div className="online-coaching-container" id="plans">
        <div className="background">
          <h2>Vilket paket passar dig bäst? <i className="fas fa-address-book"></i> </h2>
          <div className="online-coaching">

            <div className="online-coaching-pkg online-coaching-pkg-1">
              <div className="online-coaching-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Kostschema" />
              <h4>Kost</h4>
              <h5>1 299 kr / mån</h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>
            
            <div className="online-coaching-pkg online-coaching-pkg-2">
              <div className="online-coaching-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
              <h4>Kost- och Träningsprogram</h4>
              <h5>1 899 kr / mån <small className="line-through">2 299 kr / mån</small> </h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>

            <div className="online-coaching-pkg online-coaching-pkg-3">
              <div className="online-coaching-header-btns">
                <i className="fas fa-eye" title="Läs mer"></i>
                <img src={LogoIcon} alt="Logo" />
                <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
              </div>
              <div className="img-bg"></div>
              <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Träningsprogram" />
              <h4>Träningsprogram</h4>
              <h5>999 kr / mån</h5>
              <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
            </div>
          </div>
        </div>
      </div>

      <div className="whats-included">
        <div className="content">
          <h2>Vad ingår i online coaching?</h2>
          <p>
            Redan direkt efter ditt köp får du kontaktuppgifter till mig. Då är jag redo att svara på alla frågor du kan tänka dig.
            Dessutom får du efter köp av valfritt online-coaching-paket ett motsvarande svarsformulär. Här svarar du på
            de frågor som finns och fyller i den information jag frågar efter. När jag fått tillbaka ifyllt formulär med
            den information jag behöver så börjar jag bygga ditt träningsprogram, kostschema eller båda, beroende på
            vilket paket du köpt, utifrån dina preferenser. Detta bör ta ca 3-7 arbetsdagar beroende på en rad olika faktorer, framför allt vilket 
            paket du köpt. Denna tid krävs för att bygga ett så personligt anpassat program som möjligt. Betalningen börjar den dag
            då du får ditt färdigbyggda, personligt anpassade program. Hädanefter kommer vi ha möten online var 7e eller 14e dag,
            beroende på vad du vill, kan och behöver. Efter varje vecka kommer du i ett PM gradera hur det gått med träningpass, kost, 
            motivation, energi, sömn och en valfri kommentar. På så sätt kan vi enkelt upptäcka mönster som kräver förändring i programmet. 
            Nu är det upp till dig att nå maximala resultat!
          </p>
          <div className="training">
            <h3>Träningsprogram</h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett träningsprogram som passar just dig!</p>
            <ul>
              <li> <b>Träningstyp</b> bestäms utifrån din budget, tid, skador och andra preferenser. Detta kan vara alltifrån bodybuilding till hemmaträning utan redskap.</li>
              <li> <b>Träningsvolym</b> och antal sets och reps bestäms utifrån din nivå och erfarenhet, dina mål och preferenser.</li>
              <li> <b>Övningar</b> bestäms framför allt utifrån dina preferenser. Den bästa övningen är den du kommer att göra. Anpassas också såklart efter eventuella skador, dina mål och svagheter i din fysik.</li>
            </ul>
          </div>
          <div className="nutrition">
            <h3>Kostschema</h3>
            <p>Baserat på dina svar på frågorna i formuläret bygger jag ett kostschema som passar just dig!</p>
            <ul>
              <li> <b>Antal måltider</b> bestäms utifrån dina svar i formuläret.</li>
              <li> <b>Mängden kalorier</b> baseras på dina mål. Jag kommer noggrant räkna ut dina kaloribehov, något som vi kan/kommer justera beroende på hur din vikt och din fysik utvecklas, eller om dina mål skulle förändras.</li>
              <li> <b>Makros - Protein, Fett och Kolhydrater</b> i ditt kostschema baseras på dina mål, preferenser samt timme efter timme av de senaste 4 åren av mitt liv av research bland branschens bästa och mest pålitliga resurser.</li>
              <li> <b>En grund med vitaminer och mineraler</b> kommer utgöra grunden av ditt kostschema i form av näringsrik och lättupptaglig mat. Beroende på dina preferenser byggs grunden av en handfull av dessa livsmedel. Här kommer jag lägga störst fokus för att se till att din hälsa sätts i första rummet.</li>
              <li> <b>Kosttillskott</b> kommer baseras på dina mål, din budget och eventuella näringsbrister pga mat-preferenser</li>
              <li> <b>Matsmältningen</b> blir också en prioritet som baseras på svaren i formuläret. Vi mår som magen mår. Därför är det viktigt att den mat och närning vi stoppar i oss kan absorberas och inte ger oss gas eller diarrésymptom.</li>
              <li> <b>Olika dieter och allergier</b> kommer anpassas efter! Vegan, vegeterian, pescaterian, laktosintollerans, glutenintollerans, nötallergi eller liknande behöver inte stå i vägen för dina mål!</li>
            </ul>
          </div>
          <div className="communication">
            <h3>Kommunikation med mig</h3>
            <p>
              Efter köp av online-coaching-paket kommer jag finnas tillänglig för att svara på frågor på diverse sociala medier eller på email. Som jag nämnt ovan
              kommer även online-möten bokas in av dig på lämplig tid, ca var 7e eller 14e dag, beroende på vad som passar dig bäst. Varje söndag kommer du också
              i ett PM gradera hur det gått med träningpass, kost, motivation, energi, sömn under veckan, plus en valfri kommentar.
            </p>
          </div>
          <div className="facebook-group">
            <h3>Privat facebook-grupp</h3>
            <p>
              Direkt efter ditt köp kommer du få inbjudan till en privat facebook-grupp, endast för online-coaching klienter. Här kan du chatta med mig och alla andra
              coaching klienter om vad som helst.
            </p>
          </div>
          <div className="sustainability">
            <h3>Alltid fokus på hållbarhet i längden!</h3>
            <p>
              Oavsett vilket online-coaching-paket du väljer kommer fokus ligga på att du ska få hållbara resultat, något som håller i längden. Jag jobbar inte kortsiktigt.
              Kortsiktiga mål ger kortsiktiga resultat. Nästan alla som går "på en diet" lyckas gå ner i vikt. Men endast 5% lyckas hålla vikten nere. I princip alla ökar 
              alltså i vikt direkt efter deras så kallade "diet". När du jobbar med mig hoppar du inte på någon diet! Det där är fullkommligt skitsnack. Vi kommer jobba med
              att skapa hållbara rutiner och en livsstil som du kan ha med dig livet ut, oavsett hur länge vi jobbar tillsammans.
            </p>
          </div>
        </div>
      </div>

      <div className="information-section">
        <div className="content">
          <h2>Hur kan jag hjälpa dig beroende på din nivå?</h2>
          <div className="levels">
            <div className="beginner">
              <div className="number">1</div>
              <h3>För Nybörjare</h3>
              <h5>Oerfaren eller precis kommit igång</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-right"></i> </a>
            </div>
            <div className="intermediate">
              <div className="number">2</div>
              <h3>För dig med en del efrarenhet</h3>
              <h5>Tränat i ett par år</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-right"></i> </a>
            </div>
            <div className="advanced">
              <div className="number">3</div>
              <h3>För den avancerade</h3>
              <h5>Tränat i många år</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo non officia in reiciendis dolorum nobis minus ratione aut dolore quis itaque cupiditate, modi ullam. Vitae voluptas commodi cupiditate ducimus?</p>
              <a href="#plans" className="choose-plan-btn">Välj plan <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnlineCoaching
