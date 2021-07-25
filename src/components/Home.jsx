import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
import Blob from '../images/blob.svg'
// import Blob2 from '../images/blob-2.svg'
import PlaceholderCover from '../images/covers/placeholder.png'
import LogoIcon from '../images/ONfitness-icon.svg'
import { Link } from 'react-router-dom'
import { products } from '../database/products'
import Me from '../images/me-cropped-with-icon.png'
import MeAlt from '../images/me-cropped-2.jpg'
import Logo from '../images/ONfitness-light.svg'
import { useHistory } from 'react-router'

function Home() {

  const history = useHistory()

  const [showToTopBtn, setShowToTopBtn] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    document.title = 'ONfitness | Startsida'
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

  const program1Index = 0
  const program1Name = products[program1Index].name
  const program1Price = products[program1Index].price
  const program1Link = products[program1Index].link
  const program1Desc = products[program1Index].desc

  // const program2Index = 1
  // const program2Name = products[program2Index].name
  // const program2Price = products[program2Index].price
  // const program2Link = products[program2Index].link
  // const program2Desc = products[program2Index].desc

  const eBook1Index = 4
  const eBook1Name = products[eBook1Index].name
  const eBook1Price = products[eBook1Index].price
  const eBook1Link = products[eBook1Index].link
  const eBook1Desc = products[eBook1Index].desc

  // const eBook2Index = 5
  // const eBook2Name = products[eBook2Index].name
  // const eBook2Price = products[eBook2Index].price
  // const eBook2Link = products[eBook2Index].link
  // const eBook2Desc = products[eBook2Index].desc

  const redirectToPersonalPrograms = (e) => {
    e.preventDefault()
    history.push('/personal-programs')
  }

  const redirectToOnlineCoaching = (e) => {
    e.preventDefault()
    history.push('/online-coaching')
  }

  return (
    <>
      <Hero/>
      <div className="about-me-container home-about-me-container">
        <h2 className="main-h2">Vem är jag?</h2>
        <div className="content">

          <div className="text">
            <h4> <b>Oliver Nygren </b>, Grundare, <img src={Logo} alt="ONfitness Logo" /> </h4>
            <div className="mobile-h4">
              <b>Oliver Nygren</b>
              <p>Grundare</p>
              <img src={Logo} alt="ONfitness Logo" />
            </div>
            <p>
              Mitt namn är Oliver Nygren och det är jag som är grundare av ONfitness. Jag är idag 20 år gammal och har tränat sedan 15 års ålder. Under dessa
              fem år har jag levt totalt inkapslad i fitness-bubblan. Jag har spenderat timme efter timme, dag efter dag sedan dess på att lära mig allt som går 
              inom kost och träning. Jag har spenderat ofattbart många timmar på att skriva både träningsprogram och kostscheman till mig själv sedan dess för att 
              optimera mina resultat på gymmet. Efter all denna tid av planering och strukturering skulle jag säga att jag lärt mig vad som funkar och vad som inte funkar.
              Och nu  vill jag hjälpa DIG! <br /> <br /> En dag i juni 2021 bestämde jag mig för att denna passion jag har för fitness är något större än bara en hobby. 
              Jag vill kunna leva på att hjälpa människor inom kost och träning genom att lära ut allt jag lärt mig genom åren. Jag gick utanför min comfort-zone 
              helt och hållet och startade upp ONfitness, en plattform där jag kan jag göra just detta. Jag driver företaget helt själv med allt vad det innebär.
            </p>
            <h3>Varför ska du välja mig?</h3>
            <p>
              Varför ska du då välja mig, en 20-åring utan PT-utbildning? Jag ser alldeles för ofta hur coacher säljer allt för generiska program för enorma summor.
              Dessa program är ofta ett så kallat "kopiera och klistra in" program. Oavsett klientens förutsättningar och preferenser skickar de iväg sitt generiska
              program och samlar in pengarna. i hopp om att klienten inte vet bättre. Jag brinner för att hjälpa folk utefter deras förutsättningar och preferenser.
              Jag påstår inte att jag är expert eller bättre än någon annan. Men, jag tar inga genvägar. Jag kommer göra allt jag kan för att du som klient ska få 
              långsiktigt hållbara resultat genom att gå in på en nivå av detaljer som är ovanlig i denna bransch. Med 5 års erfarenhet och timme efter timme av 
              research kring ämnet, anser jag att du bör välja mig om du vill maximera dina resultat.
            </p>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Me} alt="Bild på mig" />
              </div>
              <div className="flip-card-back">
                <h3>Oliver Nygren</h3>
                <h4>Självutbildad Online Coach <br /> med en passion för träning</h4>
                <ul>
                  <li> <b>Träningserfarenhet:</b> Sedan 2016</li>
                  <li> <b>Bosatt:</b> Kungsbacka</li>
                  <li> <b>Gym:</b> Iron Works, Kungsbacka</li>
                  <li> <b>Favoritmuskelgrupp:</b> Axlar</li>
                  <li> <b>Längd:</b> 192 cm</li>
                  <li> <b>Vikt:</b> mellan 90-95 kg</li>
                  <li> <b>Favoritkäk:</b> Monster Mash (ni som vet, ni vet)</li>
                </ul>
              </div>
            </div>
          </div>

          <img className="me-mobile-img" src={MeAlt} alt="Bild på mig" />

        </div>
      </div>

      <div className="home-online-coaching">
        <h2>Online Coaching</h2>
        <div className="content">
          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="Läs mer" onClick={redirectToOnlineCoaching}></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig" onClick={redirectToOnlineCoaching}></i>
            </div>
            <img className="home-online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
            <h4>Komplett Kost- och Träningsupplägg + Coaching</h4>
            <h5>1 099 kr / mån <small className="line-through">1 799 kr / mån</small> </h5>
            <button className="get-started-btn" onClick={redirectToOnlineCoaching}>Kom igång <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text">
            <h3>Vad ingår?</h3>
            <p>Direkt efter beställning kommer du få besvara ett antal frågor i ett formulär. Utefter svaren på dessa frågor bygger jag ditt upplägg HELT från grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Både kost- och träningsupplägg kan enkelt öppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Betalning sker smidigt och enkelt med e-faktura efter du får ditt upplägg, inga förskottsbetalningar!</li>
              <li> <b>+</b> Tillgång till en privat facebook-grupp med alla andra klienter.</li>
              <li> <b>+</b> Direktkontakt med mig via Messenger för motivation, frågor eller ändringar av upplägget.</li>
              <li> <b>+</b> (Valfritt) kortare online-möte med mig innan skapandet av programmet.</li>
              <li> <b>+</b> Ändringar görs löpande efter behov</li>
              <li> <b>+</b> Kontinuerlig uppföljning och avstämningar veckovis</li>
              <li> <b>+</b> Kan avslutas när du vill!</li>
            </ul>
            <Link className="read-more-btn" to='/online-coaching'>Läs mer <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
      </div>

      <div className="home-online-coaching home-personal-programs">
        <h2>Personliga Upplägg</h2>

        <div className="program-list">
          <Link to="/personal-programs">
            <b>1</b> Komplett Kost- och Träningsupplägg
          </Link>
          <Link to="/personal-programs">
            <b>2</b> Endast Kostschema
          </Link>
          <Link to="/personal-programs">
            <b>3</b> Endast Träningsprogram
          </Link>
        </div>
        
        <div className="content">

          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="Läs mer" onClick={redirectToPersonalPrograms}></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig" onClick={redirectToPersonalPrograms}></i>
            </div>
            <img className="home-online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
            <h4>10 veckors Komplett Kost- och Träningsupplägg</h4>
            <h5>999 kr <small className="line-through">1 599 kr</small> </h5>
            <button className="get-started-btn" onClick={redirectToPersonalPrograms}>Kom igång <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text">
            <h3>Vad ingår?</h3>
            <p>Direkt efter beställning kommer du få besvara ett antal frågor i ett formulär. Utefter svaren på dessa frågor bygger jag ditt upplägg HELT från grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Både kost- och träningsupplägg kan enkelt öppnas i mobilen eller datorn.</li>
              <li className="minus-top"> <b>-</b> <span className="line-through">Tillgång till en privat facebook-grupp med alla andra klienter.</span> </li>
              <li> <b>-</b> <span className="line-through">Direktkontakt med mig via Messenger för motivation, frågor eller ändringar av upplägget.</span> </li>
              <li> <b>-</b> <span className="line-through">(Valfritt) kortare online-möte med mig innan skapandet av programmet.</span> </li>
              <li> <b>-</b> <span className="line-through">Ändringar görs löpande efter behov</span> </li>
              <li> <b>-</b> <span className="line-through">Kontinuerlig uppföljning och avstämningar veckovis</span> </li>
            </ul>
            <Link className="read-more-btn" to='/personal-programs'>Läs mer <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
        <div className="alternate-programs">
          <h3>- ELLER -</h3>
          <h4>Behöver du endast ett kostchema eller träningsprogram?</h4>
          <Link to="/personal-programs" className="read-more-btn-2">Läs mer här <i className="fas fa-arrow-right"></i> </Link>
        </div>
      </div>


      <div className="home-book-consultation">
        <p>Är du osäker på hur du kan ta din träning eller kost till optimal nivå?</p>
        <Link to="/consultation"> <h2>Boka  gratis konsultation <i className="fas fa-arrow-right"></i> </h2> </Link>
        <p>för att se hur vi kan nå dina mål</p>
      </div>

      <div className="home-ebooks-and-programs">
        <h2>E-böcker och Program</h2>
        <div className="content">
          <div className="text">
            <h3>{program1Name} <i className="fas fa-book"></i> </h3>
            <p>{program1Desc}</p>
            <span>{program1Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={program1Link} className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
        </div>

        {/* ================Träningsprogram================ 2 */}
        {/* <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
          <div className="text">
            <h3>{program2Name} <i className="fas fa-book"></i> </h3>
            <p>{program2Desc}</p>
            <span>{program2Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={program2Link} className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div> */}

        {/* Byt sedan tbx till class=content och byt plats på image och text */}
        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
          <div className="text">
            <h3>{eBook1Name} <i className="fas fa-book"></i> </h3>
            <p>{eBook1Desc}</p>
            <span>{eBook1Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={eBook1Link} className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>

        {/* E-bok 2================================ */}
        {/* <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
          <div className="text">
          <h3>{eBook2Name} <i className="fas fa-book"></i> </h3>
            <p>{eBook2Desc}</p>
            <span>{eBook2Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={eBook2Link} className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div> */}

        <Link className="home-see-all-programs-link" to="/e-books-and-programs">Se alla e-böcker och program här <i className="fas fa-arrow-right"></i> </Link>

      </div>

      <div className="three-blocks">
        <div className="box box-1">
          <h3>Träning <i className="fas fa-dumbbell"></i> </h3>
          <p>
            Att träna innebär olika saker för alla. För vissa är det att gå till gymmet, för andra är det att gå en promenad. Oavsett så måste träningen vara rolig för att vi ska kunna hålla oss till planen och nå våra långsiktiga mål.
          </p>
        </div>
        <div className="box box-2">
          <h3>Kost <i className="fas fa-utensils"></i> </h3>
          <p>
            Många så kallade coacher nöjer sig med att rekommendera ett visst split av protein, kolhydrater och fett. Alla kan lära sig om dessa tre. Jag kommer gå in på yttersta detalj kring vitaminer och mineraler för att sätta din hälsa i första rummet!
          </p>
        </div>
        <div className="box box-3">
          <h3>Långsiktighet <i className="fas fa-chart-line"></i> </h3>
          <p>
            Hållbarhet och långsiktighet är alltid nr. 1 när det kommer till fitness. Det finns så många som hoppar av och på en "diet", som går ner och sedan upp i vikt igen. Jag utgår alltid från dina preferenser och förutsättningar när jag bygger ditt upplägg.
          </p>
        </div>
      </div>

      <div className="to-top-btn" style={{ opacity: showToTopBtn ? '1' : '0', pointerEvents: showToTopBtn ? 'all' : 'none' }}>
        <button onClick={scrollToTop}><i className="fas fa-arrow-up"></i></button>
      </div>

    </>
  )
}

export default Home
