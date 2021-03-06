import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
import Blob from '../images/blob.svg'
// import Blob2 from '../images/blob-2.svg'
// import PlaceholderCover from '../images/covers/placeholder.png'
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

  const program1 = products.findIndex((product) => product.id === 1001)
  const program1Name = products[program1].name
  const program1Price = products[program1].price
  const program1Link = products[program1].link
  const program1Desc = products[program1].desc
  const program1PaymentLink = products[program1].paymentLink
  const program1CoverImage = products[program1].coverImage

  // const program2 = products.findIndex((product) => product.id === 1002)
  // const program2Name = products[program2].name
  // const program2Price = products[program2].price
  // const program2Link = products[program2].link
  // const program2Desc = products[program2].desc
  // const program2PaymentLink = products[program2].paymentLink
  // const program2CoverImage = products[program2].coverImage

  const eBook1 = products.findIndex((product) => product.id === 2001)
  const eBook1Name = products[eBook1].name
  const eBook1Price = products[eBook1].price
  const eBook1Link = products[eBook1].link
  const eBook1Desc = products[eBook1].desc
  const eBook1PaymentLink = products[eBook1].paymentLink
  const eBook1CoverImage = products[eBook1].coverImage
  
  const eBook2 = products.findIndex((product) => product.id === 2003)
  const eBook2Name = products[eBook2].name
  const eBook2Price = products[eBook2].price
  const eBook2Link = products[eBook2].link
  const eBook2Desc = products[eBook2].desc
  const eBook2PaymentLink = products[eBook2].paymentLink
  const eBook2CoverImage = products[eBook2].coverImage

  const personalProgramComplete = products.findIndex((product) => product.id === 3003)
  const personalProgramPrice = products[personalProgramComplete].price
  const personalProgramPricePerDay = products[personalProgramComplete].pricePerDay
  const personalProgramCompleteCover = products[personalProgramComplete].coverImage

  const onlineCoaching = products.findIndex((product) => product.id === 4001)
  const onlineCoachingPrice = products[onlineCoaching].price
  const onlineCoachingPricePerDay = products[onlineCoaching].pricePerDay
  const onlineCoachingCover = products[onlineCoaching].coverImage

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
        <h2 className="main-h2">Vem ??r jag?</h2>
        <div className="content">

          <div className="text">
            <h4> <b>Oliver Nygren </b>, Grundare, <img src={Logo} alt="ONfitness Logo" /> </h4>
            <div className="mobile-h4">
              <b>Oliver Nygren</b>
              <p>Grundare</p>
              <img src={Logo} alt="ONfitness Logo" />
            </div>
            <p>
              Mitt namn ??r Oliver Nygren och det ??r jag som ??r grundare av ONfitness. Jag ??r idag 20 ??r gammal och har tr??nat sedan 15 ??rs ??lder. Under dessa
              fem ??r har jag levt totalt inkapslad i fitness-bubblan. Jag har spenderat timme efter timme, dag efter dag sedan dess p?? att l??ra mig allt som g??r 
              inom kost och tr??ning. Jag har lagt ned ofantligt m??nga timmar p?? att skriva b??de tr??ningsprogram och kostscheman till mig sj??lv sedan dess f??r att 
              optimera mina resultat p?? gymmet. Efter all denna tid av planering och strukturering skulle jag s??ga att jag l??rt mig vad som funkar och vad som inte funkar.
              Och nu  vill jag hj??lpa DIG! <br /> <br /> En dag i juni 2021 best??mde jag mig f??r att denna passion jag har f??r fitness ??r n??got st??rre ??n bara en hobby. 
              Jag vill kunna leva p?? att hj??lpa m??nniskor inom kost och tr??ning genom att l??ra ut allt jag l??rt mig genom ??ren. Jag gick utanf??r min comfort-zone 
              helt och h??llet och startade upp ONfitness, en plattform d??r jag kan jag g??ra just detta. Jag driver f??retaget helt sj??lv med allt vad det inneb??r.
            </p>
            <h3>Varf??r ska du v??lja mig?</h3>
            <p>
              Varf??r ska du d?? v??lja mig, en 20-??ring utan PT-utbildning? Jag ser alldeles f??r ofta hur coacher s??ljer allt f??r generiska program f??r enorma summor.
              Dessa program ??r ofta ett s?? kallat "kopiera och klistra in" program. Oavsett klientens f??ruts??ttningar och preferenser skickar de iv??g sitt generiska
              program och samlar in pengarna i hopp om att klienten inte vet b??ttre. Jag brinner f??r att hj??lpa folk utefter deras f??ruts??ttningar och preferenser.
              Jag p??st??r inte att jag ??r expert eller b??ttre ??n n??gon annan. Men, jag tar inga genv??gar. Jag kommer g??ra allt jag kan f??r att du som klient ska f?? 
              l??ngsiktigt h??llbara resultat genom att g?? in p?? en niv?? av detaljer som ??r ovanlig i denna bransch. Med 5 ??rs erfarenhet och timme efter timme av 
              research kring ??mnet, anser jag att du b??r v??lja mig om du vill maximera dina resultat.
            </p>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Me} alt="Bild p?? mig" />
              </div>
              <div className="flip-card-back">
                <h3>Oliver Nygren</h3>
                <h4>Sj??lvutbildad Online Coach <br /> med en passion f??r tr??ning</h4>
                <ul>
                  <li> <b>Tr??ningserfarenhet:</b> Sedan 2016</li>
                  <li> <b>Bosatt:</b> Kungsbacka</li>
                  <li> <b>Gym:</b> Iron Works, Kungsbacka</li>
                  <li> <b>Favoritmuskelgrupp:</b> Axlar</li>
                  <li> <b>L??ngd:</b> 192 cm</li>
                  <li> <b>Vikt:</b> mellan 90-95 kg</li>
                  <li> <b>Favoritk??k:</b> Monster Mash (ni som vet, ni vet)</li>
                </ul>
              </div>
            </div>
          </div>

          <img className="me-mobile-img" src={MeAlt} alt="Bild p?? mig" />

        </div>
      </div>

      <div className="home-online-coaching">
        <h2>Online Coaching</h2>
        <div className="content">
          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="L??s mer" onClick={redirectToOnlineCoaching}></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig" onClick={redirectToOnlineCoaching}></i>
            </div>
            <img className="home-online-coaching-cover-img" src={onlineCoachingCover} alt="Kost- och Tr??ningsprogram" />
            <h4>Komplett Kost- och Tr??ningsuppl??gg + Coaching</h4>
            <h5>{onlineCoachingPrice} kr / m??n <small className="day-price">{onlineCoachingPricePerDay} kr / dag</small> </h5>
            <button className="get-started-btn" onClick={redirectToOnlineCoaching}>Kom ig??ng <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text">
            <h3>Vad ing??r?</h3>
            <p>Direkt efter ans??kan kommer du f?? ett formul??r skickat till den e-post du angivit som du d?? ska besvara. Utefter svaren p?? dessa fr??gor bygger jag ditt uppl??gg HELT fr??n grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat tr??ningsprogram inkl. ??vningar, sets, reps, vila och noteringar kring utf??rande.</li>
              <li> <b>+</b> B??de kost- och tr??ningsuppl??gg kan enkelt ??ppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Tillg??ng till en privat facebook-grupp med alla andra klienter och kunder.</li>
              <li> <b>+</b> Direktkontakt med mig via Instagram DM f??r motivation, fr??gor eller ??ndringar av uppl??gget.</li>
              <li> <b>+</b> (Valfritt) kortare online-m??te med mig innan skapandet av programmet.</li>
              <li> <b>+</b> ??ndringar g??rs l??pande efter behov.</li>
              <li> <b>+</b> Kontinuerlig uppf??ljning och avst??mningar veckovis.</li>
              <li> <b>+</b> Kan avslutas n??r du vill! Ingen bindningstid.</li>
            </ul>
            <p>Jag b??rjar skapandet av ditt uppl??gg efter f??rsta betalning. Sedan skickas e-faktura f??r betalning varje m??nad tills du s??ger upp coachingen. Ingen upps??gningstid!</p>
            <Link className="read-more-btn" to='/online-coaching'>L??s mer <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
      </div>

      <div className="home-online-coaching home-personal-programs">
        <h2>Personliga Uppl??gg</h2>

        <div className="program-list">
          <Link to="/personal-programs">
            <b>1</b> Komplett Kost- och Tr??ningsuppl??gg
          </Link>
          <Link to="/personal-programs">
            <b>2</b> Endast Kostschema
          </Link>
          <Link to="/personal-programs">
            <b>3</b> Endast Tr??ningsprogram
          </Link>
        </div>
        
        <div className="content">

          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="L??s mer" onClick={redirectToPersonalPrograms}></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig" onClick={redirectToPersonalPrograms}></i>
            </div>
            <img className="home-online-coaching-cover-img" src={personalProgramCompleteCover} alt="Kost- och Tr??ningsprogram" />
            <h4>10 veckors Komplett Kost- och Tr??ningsuppl??gg</h4>
            <h5>{personalProgramPrice} kr <small className="line-through">1 249 kr</small> </h5>
            <button className="get-started-btn" onClick={redirectToPersonalPrograms}>Kom ig??ng <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text info-text-2">
            <h3>Vad ing??r?</h3>
            <small>I Komplett*</small>
            <p>Direkt efter best??llning kommer du f?? ett formul??r skickat till den e-post du angav i best??llningen. Besvara fr??gorna i formul??ret. Utefter svaren p?? dessa fr??gor bygger jag ditt uppl??gg HELT fr??n grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat tr??ningsprogram inkl. ??vningar, sets, reps, vila och noteringar kring utf??rande.</li>
              <li> <b>+</b> B??de kost- och tr??ningsuppl??gg kan enkelt ??ppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Tillg??ng till en privat facebook-grupp med alla andra klienter.</li>
              <li> <b>+</b> Allt detta f??r endast {personalProgramPricePerDay} kr/dag!</li>
              {/* <li className="minus-top"> <b>-</b> <span className="line-through"></span> </li> */}
              <li> <b>-</b> <span className="line-through">Direktkontakt med mig via Instagram DM f??r motivation, fr??gor eller ??ndringar av uppl??gget.</span> </li>
              <li> <b>-</b> <span className="line-through">(Valfritt) kortare online-m??te med mig innan skapandet av programmet.</span> </li>
              <li> <b>-</b> <span className="line-through">??ndringar g??rs l??pande efter behov</span> </li>
              <li> <b>-</b> <span className="line-through">Kontinuerlig uppf??ljning och avst??mningar veckovis</span> </li>
            </ul>
            <Link className="read-more-btn" to='/personal-programs'>L??s mer <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
        <div className="alternate-programs">
          <h3>- ELLER -</h3>
          <h4>Beh??ver du endast ett kostchema eller tr??ningsprogram?</h4>
          <Link to="/personal-programs" className="read-more-btn-2">L??s mer h??r <i className="fas fa-arrow-right"></i> </Link>
        </div>
      </div>


      <div className="home-book-consultation">
        <p>??r du os??ker p?? hur du kan ta din tr??ning eller kost till optimal niv???</p>
        <Link to="/consultation"> <h2>Boka  gratis konsultation <i className="fas fa-arrow-right"></i> </h2> </Link>
        <p>f??r att se hur vi kan n?? dina m??l</p>
      </div>

      <div className="home-ebooks-and-programs">
        <h2>E-b??cker och Program</h2>

        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={eBook2CoverImage} alt="book" />
          </div>
          <div className="text">
            <h3>{eBook2Name} <i className="fas fa-book"></i> </h3>
            <p>{eBook2Desc}</p>
            <span>{eBook2Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={eBook2Link} className="home-oc-link">L??s mer <i className="fas fa-eye" title="L??s mer"></i> </Link>
              <a className="buy-now-link" href={eBook2PaymentLink} target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <h3>{program1Name} <i className="fas fa-book"></i> </h3>
            <p>{program1Desc}</p>
            <span>{program1Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={program1Link} className="home-oc-link">L??s mer <i className="fas fa-eye" title="L??s mer"></i> </Link>
              <a className="buy-now-link" href={program1PaymentLink} target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={program1CoverImage} alt="book" />
          </div>
        </div>


        {/* Byt sedan tbx till class=content och byt plats p?? image och text */}
        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={eBook1CoverImage} alt="book" />
          </div>
          <div className="text">
            <h3>{eBook1Name} <i className="fas fa-book"></i> </h3>
            <p>{eBook1Desc}</p>
            <span>{eBook1Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={eBook1Link} className="home-oc-link">L??s mer <i className="fas fa-eye" title="L??s mer"></i> </Link>
              <a className="buy-now-link" href={eBook1PaymentLink} target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>

        {/* ================Tr??ningsprogram 2================ */}
        {/* <div className="content">
          <div className="text">
            <h3>{program2Name} <i className="fas fa-book"></i> </h3>
            <p>{program2Desc}</p>
            <span>{program2Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={program2Link} className="home-oc-link">L??s mer <i className="fas fa-eye" title="L??s mer"></i> </Link>
              <a className="buy-now-link" href={program2PaymentLink} target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={program2CoverImage} alt="book" />
          </div>
        </div> */}
        
        {/* E-bok 2================================ */}
        {/* <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={eBook3Cover} alt="book" />
          </div>
          <div className="text">
          <h3>{eBook3Name} <i className="fas fa-book"></i> </h3>
            <p>{eBook3Desc}</p>
            <span>{eBook3Price} kr <i className="fas fa-tags"></i> </span>
            <div className="buttons">
              <Link to={eBook3Link} className="home-oc-link">L??s mer <i className="fas fa-eye" title="L??s mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">K??p nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div> */}

        <Link className="home-see-all-programs-link" to="/e-books-and-programs">Se alla e-b??cker och program h??r <i className="fas fa-arrow-right"></i> </Link>

      </div>

      <div className="three-blocks">
        <div className="box box-1">
          <h3>Tr??ning <i className="fas fa-dumbbell"></i> </h3>
          <p>
            Att tr??na inneb??r olika saker f??r alla. F??r vissa ??r det att g?? till gymmet, f??r andra ??r det att g?? en promenad. Oavsett s?? m??ste tr??ningen vara rolig f??r att vi ska kunna h??lla oss till planen och n?? v??ra l??ngsiktiga m??l.
          </p>
        </div>
        <div className="box box-2">
          <h3>Kost <i className="fas fa-utensils"></i> </h3>
          <p>
            M??nga s?? kallade coacher n??jer sig med att rekommendera ett visst split av protein, kolhydrater och fett. Alla kan l??ra sig om dessa tre. Jag kommer g?? in p?? yttersta detalj kring vitaminer och mineraler f??r att s??tta din h??lsa i f??rsta rummet!
          </p>
        </div>
        <div className="box box-3">
          <h3>L??ngsiktighet <i className="fas fa-chart-line"></i> </h3>
          <p>
            H??llbarhet och l??ngsiktighet ??r alltid nr. 1 n??r det kommer till fitness. Det finns s?? m??nga som hoppar av och p?? en "diet", som g??r ner och sedan upp i vikt igen. Jag utg??r alltid fr??n dina preferenser och f??ruts??ttningar n??r jag bygger ditt uppl??gg.
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
