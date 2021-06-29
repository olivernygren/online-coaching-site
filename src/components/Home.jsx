import React from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
// import '../css/onlineCoaching.css'
import Blob from '../images/blob.svg'
import Blob2 from '../images/blob-2.svg'
import PlaceholderCover from '../images/covers/placeholder.png'
import LogoIcon from '../images/ONfitness-icon.svg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Hero/>
      <div className="home-online-coaching">
        <h2>Online Coaching</h2>
        <div className="content">
          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig"></i>
            </div>
            <img className="home-online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
            <h4>Komplett Kost- och Träningsupplägg + Coaching</h4>
            <h5>1 399 kr / mån <small className="line-through">1 999 kr / mån</small> </h5>
            <button className="get-started-btn">Kom igång <i className="fas fa-arrow-right"></i> </button>
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
              <li> <b>+</b> (Valfritt) online-möte med mig innan skapandet av programmet.</li>
              <li> <b>+</b> Ändringar görs löpande varje månad och/eller efter behov</li>
              <li> <b>+</b> Kontinuerlig uppföljning och avstämningar veckovis</li>
            </ul>
            <Link className="read-more-btn" to='/online-coaching'>Läs mer om online coaching <i className="fas fa-arrow-right"></i> </Link>
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
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig"></i>
            </div>
            <img className="home-online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
            <h4>10 veckors Komplett Kost- och Träningsupplägg</h4>
            <h5>999 kr <small className="line-through">1 599 kr</small> </h5>
            <button className="get-started-btn">Kom igång <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text">
            <h3>Vad ingår?</h3>
            <p>Direkt efter beställning kommer du få besvara ett antal frågor i ett formulär. Utefter svaren på dessa frågor bygger jag ditt upplägg HELT från grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Både kost- och träningsupplägg kan enkelt öppnas i mobilen eller datorn.</li>
              <li> <b>+</b> Betalning sker smidigt och enkelt med e-faktura efter du får ditt upplägg, inga förskottsbetalningar!</li>
              <li className="minus-top"> <b>-</b> <span className="line-through">Tillgång till en privat facebook-grupp med alla andra klienter.</span> </li>
              <li> <b>-</b> <span className="line-through">Direktkontakt med mig via Messenger för motivation, frågor eller ändringar av upplägget.</span> </li>
              <li> <b>-</b> <span className="line-through">(Valfritt) online-möte med mig innan skapandet av programmet.</span> </li>
              <li> <b>-</b> <span className="line-through">Ändringar görs löpande varje månad och/eller efter behov</span> </li>
              <li> <b>-</b> <span className="line-through">Kontinuerlig uppföljning och avstämningar veckovis</span> </li>
            </ul>
            <Link className="read-more-btn" to='/personal-programs'>Läs mer om personliga upplägg <i className="fas fa-arrow-right"></i> </Link>
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
        <h2>E-böcker och Färdiga Program</h2>
        <div className="content">
          <div className="text">
            <h3>Program 1 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/e-books-and-programs/program-1" className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
          <div className="text">
            <h3>Program 2 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/e-books-and-programs/program-2" className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <h3>E-bok 1 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/e-books-and-programs/e-book-1" className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
          <div className="image">
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
          <div className="text">
            <h3>E-bok 2 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-eye" title="Läs mer"></i> </Link>
              <a className="buy-now-link" href="https://buy.stripe.com/test_4gw8wQ8WT6sZ35KdQR" target="blank">Köp nu <i className="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>

      </div>

      <div className="three-blocks">
        <div className="box box-1">
          <h3>Träning <i className="fas fa-dumbbell"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
        <div className="box box-2">
          <h3>Kost <i className="fas fa-utensils"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
        <div className="box box-3">
          <h3>Hållbarhet <i className="fas fa-chart-line"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
      </div>


    </>
  )
}

export default Home
