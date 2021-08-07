import program1Cover from '../images/covers/träningsprogram-nybörjare.png' //fel
import program2Cover from '../images/covers/bodybuilding-101.png'

import eBook1Cover from '../images/covers/kostguide-bulk-vit.png'
import eBook2Cover from '../images/covers/kostguide-deff-orange.png'
import eBook3Cover from '../images/covers/träningsguide-blank.png' //fel
import eBook4Cover from '../images/covers/hälsoguide.png'
import eBook5Cover from '../images/covers/nybörjares-guide-till-kost-och-träning.png'

import personalProgramCompleteCover from '../images/covers/upplägg-komplett.png' //fel
import personalProgramDietCover from '../images/covers/upplägg-kost.png' //fel
import personalProgramTrainingCover from '../images/covers/upplägg-träning.png' //fel


export const products = [
  {
    name: 'Ultimata Nybörjarprogrammet',
    price: 179,
    desc: 'Det ultimata träningsprogrammet för dig som är ny på gymmet eller har svårt att veta hur du ska komma igång! Du får ett genomtänkt träningsprogram baserat på vad de flesta nybörjare behöver. Du får även en introduktion till hur du ska träna, äta och återhämta dig för maximal tillväxt.',
    id: 1001,
    link: '/e-books-and-programs/ultimata-nyborjarprogrammet',
    paymentLink: 'https://buy.stripe.com/3cs28N4Iec5peSA4gg',
    coverImage: program1Cover
  },
  {
    name: 'Bodybuilding 101',
    price: 139,
    desc: 'Detta är programmet för dig som vill ta din träning till en helt ny nivå. Bodybuilding 101 är det första programmet i serien som grundar sig i de träningsprinciper som bodybuilders världen över använder för att bygga muskelmassa.',
    id: 1002,
    link: '/e-books-and-programs/bodybuilding-101',
    paymentLink: 'https://buy.stripe.com/eVa9BfgqWfhBaCkeUZ',
    coverImage: program2Cover
  },
  {
    name: 'Träningsprogram 3',
    price: 249,
    desc: 'Detta träningsprogrammet har en beskrivning som visas här. Jag tycker du ska köpa detta programmet då det är väldigt bra och kommer ge dig bra reusltat',
    id: 1003,
    link: '/e-books-and-programs/program-3'
  },
  {
    name: 'Träningsprogram 4',
    price: 349,
    desc: 'Detta träningsprogrammet har en beskrivning som visas här. Jag tycker du ska köpa detta programmet då det är väldigt bra och kommer ge dig bra reusltat',
    id: 1004,
    link: '/e-books-and-programs/program-4'
  },
  {
    name: 'Komplett Kostguide för Bulk (E-bok)',
    price: 479,
    desc: 'Den KOMPLETTA guiden för dig som vill bygga muskelmassa. Vi tar en djupdykning i ALLT som angår kost och tillskott för att maximera dina resultat.',
    id: 2001,
    link: '/e-books-and-programs/komplett-kostguide-for-bulk_e-bok',
    paymentLink: 'https://buy.stripe.com/dR6eVzgqWd9t5i07sy',
    coverImage: eBook1Cover
  },
  {
    name: 'Komplett Kostguide för Deff (E-bok)',
    price: 479,
    desc: 'Denna e-boken har en beskrivning som visas här. Jag tycker du ska köpa denna e-boken då den är väldigt bra och kommer ge dig bra reusltat',
    id: 2002,
    link: '/e-books-and-programs/komplett-kostguide-for-deff_e-bok',
    paymentLink: '',
    coverImage: eBook2Cover
  },
  {
    name: 'Komplett Träningsguide För Att Bygga Muskler (E-bok)',
    price: 399,
    desc: 'Denna e-boken har en beskrivning som visas här. Jag tycker du ska köpa denna e-boken då den är väldigt bra och kommer ge dig bra reusltat',
    id: 2003,
    link: '/e-books-and-programs/komplett-traningsguide-for-att-bygga-muskler_e-bok',
    paymentLink: '',
    coverImage: eBook3Cover
  },
  {
    name: 'Komplett Kostguide För Bättre Hälsa (E-Bok)',
    price: 289,
    desc: 'Denna e-boken har en beskrivning som visas här. Jag tycker du ska köpa denna e-boken då den är väldigt bra och kommer ge dig bra reusltat',
    id: 2004,
    link: '/e-books-and-programs/komplett-kostguide-for-battre-halsa_e-bok',
    paymentLink: '',
    coverImage: eBook4Cover
  },
  {
    name: 'En Nybörjares Guide Till Kost & Träning (E-Bok)',
    price: 399,
    desc: 'Denna e-boken har en beskrivning som visas här. Jag tycker du ska köpa denna e-boken då den är väldigt bra och kommer ge dig bra reusltat',
    id: 2005,
    link: '/e-books-and-programs/en-nyborjares-guide-till-kost-och-traning',
    paymentLink: '',
    coverImage: eBook5Cover
  },
  {
    name: 'Kostschema, 8 veckor',
    price: 899,
    id: 3001,
    paymentLink: 'https://buy.stripe.com/28o5kZgqW8Td6m4aEL',
    coverImage: personalProgramDietCover
  },
  {
    name: 'Träningsprogram, 8 veckor',
    price: 599,
    id: 3002,
    paymentLink: 'https://buy.stripe.com/aEUaFjeiO6L5cKs28h',
    coverImage: personalProgramTrainingCover
  },
  {
    name: 'Komplett Kost- & Träningsupplägg, 10 veckor',
    price: "1 199",
    id: 3003,
    paymentLink: 'https://buy.stripe.com/dR6eVzgqWc5ph0I008',
    coverImage: personalProgramCompleteCover
  }
]