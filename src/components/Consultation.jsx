import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/consultation.css'
import Form from './Form'

function Consultation() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | Boka Gratis Konsultation'
  }, [])

  return (
    <div className="consultation-root">
      <div className="consultation-container">
        <div className="content">
          <h2>Boka gratis konsultation<i className="fas fa-video"></i> </h2>
          <div className="text-body">
            <p>Är du osäker på hur du ska nå dina mål? En gratis konsultation är ett perfekt första steg på vägen dit. Helt gratis och utan risk för dig.</p>
            <p>
              Att veta hur du ska ta nästa steg är ofta svårt. Om det hade varit lätt hade du redan gjort det, eller hur? Ofta behövs någon som kan se på dig
              med andra ögon än dina egna. Att se saker från ett nytt perspektiv ökar dina chanser att utvecklas. <br /> <br />
              Jag erbjuder konsultationer helt gratis. Här hjälper jag dig ta nästa steg i din utveckling, utan kostnad. Jag brinner för att hjälpa människor
              med deras fitness-äventyr oavsett om de vill bli kroppsbyggare eller vill leva ett mer hälsosamt liv. Tveka inte om att fylla i formuläret nedan 
              så hör jag av mig så snabbt jag kan för att boka in ett möte. Som sagt, helt kostnadsfritt och riskfritt för dig!
            </p>
          </div>
          <h3>Innan du bokar konsultationen behöver jag lite basic info om dig. Vänligen fyll i och skicka formuläret nedan</h3>
          <p>När jag fått forumläret hör jag av mig så snabbt som möjligt för att boka in en tid!</p>
        </div>

      <form className="hero-form oc-form" method="POST" action="https://formspree.io/f/xeqvkpzg" id="consultation-form">
        <Form />
      </form>

      </div>
      
    </div>
  )
}

export default Consultation
