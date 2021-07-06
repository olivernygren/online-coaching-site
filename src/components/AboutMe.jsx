import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/aboutMe.css'
import Me from '../images/me-cropped-with-icon.png'
import MeAlt from '../images/me-cropped-2.jpg'
import Logo from '../images/ONfitness-light.svg'

function AboutMe() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | Om Mig'
  }, [])

  return (
    <div className="about-me-container">
      <h2 className="main-h2">Om mig</h2>
      <div className="content">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Me} alt="Bild på mig" />
            </div>
            <div className="flip-card-back">
              <h3>Oliver Nygren</h3>
              <h4>Självutbildad Online Coach <br /> och Tränings-entusiast</h4>
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


        <div className="text">
          <img className="about-me-mobile-img" src={MeAlt} alt="Bild på mig" />
          <h2>Vem är jag?</h2>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, praesentium eveniet voluptates velit commodi iste, temporibus non nostrum similique, eum veritatis reiciendis obcaecati a alias rerum eius? Deserunt, doloremque alias.</p>
          <img className="about-me-mobile-img-2" src={MeAlt} alt="Bild på mig" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
