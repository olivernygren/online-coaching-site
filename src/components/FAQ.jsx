import React, { useEffect } from 'react'
import Collapsible from 'react-collapsible';
import '../css/main.css'
import '../css/faq.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

function FAQ() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | FAQ'
  }, [])

  return (
    <div className="faq-container">
      <h2 className="main-h2 faq-h2">FAQ</h2>
      <h4>(Vanligt förekommande frågor)</h4>

      <div className="content">
        <Collapsible trigger={["Erbjuder du tävlingscoaching eller upplägg?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Nej, det gör jag inte. Anledningen är att jag själv aldrig tävlat och på så sätt känner jag att jag inte kan erbjuda tävlingscoaching på tillräckligt hög nivå.</p>
        </Collapsible>
        <Collapsible trigger={["Hur vet jag att du är tillräckligt kunnig för att hjälpa mig?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            En PT-utbildning och certifikat känns självklart säkert för dig som konsument. Men i min åsikt kan man (som jag gjort) utbilda sig till en lika hög nivå själv om man verkligen brinner för något.
            Genom att spendera många, många timmar att lyssna på branschens mest pålitliga och erfarna personer kan man definitivt lägga på sig tillräckligt med kunskap. Detta, blandat med 5 års
            erfarenhet av att själv bygga program och kostscheman för att testa på mig själv gör att jag definitivt anser mig som tillräckligt kunnig för att hjälpa de flesta. Är du osäker på om
            jag verkligen kan hjälpa dig kan du självklart alltid boka en gratis konsultation <a href="/consultation">här</a>.
          </p>
        </Collapsible>
        <Collapsible trigger={["Hur vet jag att jag får mitt program efter betalning?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            I nuläget är företaget nystartat och jag driver det helt själv, med allt vad det innebär. Det innebär bland annat att jag skapat hela hemsidan och systemet runt leverans av produkter själv.
            Just nu sker leverans av digitala produkter manuellt av mig själv. Därför kan det dröja upp till 24 h innan du får ditt köpta program eller e-bok, vilket också står tydligt och klart
            i <a href="/terms-and-conditions">köpvillkoren</a> som du godkänner vid köp av en produkt. Vid eventuell försening av leverans, kontakta mig omgående via email! Du hittar mina kontaktuppgifter <a href="/contact">här</a>.
          </p>
        </Collapsible>
        <Collapsible trigger={["Är betalningen säker?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Betlaningen sköts genom stripe, ett av världens största betalsystem. Har du frågor kring stripe eller vill läsa mer kring systemet så kan du göra det på <a href="https://stripe.com/en-se">deras hemsida</a>.</p>
        </Collapsible>
        <Collapsible trigger={["Hur vet jag vilket upplägg som passar mig?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            På varje enskild sida står det vad som ingår i upplägg respektive coaching. Det finns även en lista på vad som ingår i de färdiga programmen och e-böckerna på respektive produktsida.
            Är du fortfarande osäker på vilket paket som passar dig är du välkommen att boka in en gratis konsultation <a href="/consultation">här</a> eller höra av dig på email eller DM. Du hittar mina kontaktuppgifter <a href="/contact">här</a>.
          </p>
        </Collapsible>
        <Collapsible trigger={["Ska jag välja coaching eller personligt upplägg?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            Coaching är för dig som vill utvecklas under en längre tid med en mer personlig touch. Eftersom coachingen löper på tills vidare med konsekventa uppdateringar i upplägget ökar chansen
            att nå dina mål. Personliga upplägg ligger självklart på samma nivå kvalitetsmässigt, men utan konsekvent uppföljning. Här finns också större chans att specificera för dig som till exempel
            känner att du har koll på din träning, att endast köpa ett kostupplägg. Personliga upplägg är också billigare för dig med en mindre budget.
          </p>
        </Collapsible>
        <Collapsible trigger={["Kan man boka personlig träning på gym med dig?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            Det är ingen tjänst jag erbjuder i nuläget. Men skulle det dyka upp en efterfrågan så ska jag se vad jag kan göra. In-person träning är så klart väldigt geografiskt beroende. För klienter
            som vill testa på detta finns självklart rum för diskussion. 
          </p>
        </Collapsible>
        <Collapsible trigger={["Hur kontaktar jag dig?", <ExpandMoreIcon/>]} transitionTime="350">
          <p>
            På min <a href="/contact">kontaktsida</a> finner du kontaktuppgifter till mig. Här står även vilka frågor som passar som email och vilka som passar som DM. Jag svarar oftast samma dag.
          </p>
        </Collapsible>

        <div className="contact-cta">
          <h4>Hittar du inte svaret på den fråga du har?</h4>
          <p>Tveka inte på att kontakta mig så svarar jag på din fråga!</p>
          <Link to="/contact">Kontakta mig här <i className="fas fa-arrow-right"></i> </Link>
        </div>
      </div>

    </div>
  )
}

export default FAQ
