import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/aboutMe.css'

function AboutMe() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-me-container">
      <h2 className="main-h2">Om mig</h2>
      <div className="content">
        <div className="image">

        </div>
        <div className="text">
          <h2>Vem är jag?</h2>
          <h4> <b>Oliver Nygren</b>, Grundare, ONfitness</h4>
          <p>
            Mitt namn är Oliver Nygren och det är jag som är grundare av ONfitness. Jag är idag 20 år gammal och har tränat sedan 15 års ålder. Under dessa
            fem år har jag levt totalt inkapslad i fitness-bubblan. Jag har spenderat timme efter timme, dag efter dag sedan dess på att lära mig allt som går 
            inom kost och träning. Jag har spenderat ofattbart många timmar på att skriva både träningsprogram och kostscheman till mig själv sedan dess för att 
            optimera mina resultat på gymmet. Efter all denna tid av planering och strukturering skulle jag säga att jag lärt mig vad som funkar och vad som inte funkar.
            Och nu  vill jag hjälpa DIG! <br /> <br /> En dag i juni 2021 bestämde jag mig för att denna passion jag har för fitness är något större än bara en hobby. 
            Jag vill kunna leva på att hjälpa människor inom kost och träning genom att lära ut allt jag lärt mig genom åren. Jag gick utanför min comfort-zone 
            helt och hållet och startade upp ONfitness, en plattform där jag kan jag göra just detta. Jag driver företaget helt själv med allt vad det innebär.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
