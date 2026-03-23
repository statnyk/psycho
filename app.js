/* ============================================
   PSYCHO Horror Quest - Application Logic
   Modules: i18n, Slider, Booking, History, UI
   ============================================ */

// --- Supabase Client ---
let _sbClient = null;
function getSupabase() {
  if (!_sbClient && window.supabase && typeof CONFIG !== 'undefined' && CONFIG) {
    _sbClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
  }
  return _sbClient;
}

// --- Translations ---
const T = {
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navQuests: 'Quests',
    navPricing: 'Pricing',
    navBooking: 'Book Now',
    navContact: 'Contact',
    navHistory: 'My Bookings',
    heroSubtitle: 'Horror Quest',
    heroTagline: 'Face your fears. Book your nightmare.',
    heroCta: 'Book Now',
    questsTitle: 'Our Quests',
    questsSubtitle: 'Choose your nightmare. Each quest is a unique horror experience with live actors.',
    questBook: 'Book This Quest',
    questDetails: 'Details',
    fearLabel: 'Fear',
    metaPlayers: 'players',
    metaMinutes: 'min',
    metaActors: 'Live Actors',
    q1Name: 'The Experiment',
    q1Desc: 'You wake up in an abandoned laboratory. Strange substances bubble in broken flasks. Someone — or something — is still conducting experiments here. You have 60 minutes before becoming the next test subject.',
    q2Name: 'Wrong Turn',
    q2Desc: 'Your car broke down on a deserted road. The only shelter is an old house deep in the woods. But its inhabitants have their own plans for unexpected guests. Find a way out before dinner is served.',
    q3Name: 'Horror Cinema',
    q3Desc: 'An abandoned movie theater is screening its final show — and you\'re the star. The line between screen and reality blurs as characters from the most terrifying films come to life around you.',
    howTitle: 'How It Works',
    howSubtitle: 'Your horror experience in 4 simple steps',
    how1Title: 'Choose a Quest',
    how1Text: 'Browse our horror quests and pick the one that calls to you.',
    how2Title: 'Book Online',
    how2Text: 'Select your date, time, and number of players. We\'ll confirm via email.',
    how3Title: 'Arrive & Play',
    how3Text: 'Come 15 minutes early. Our actors and effects will do the rest.',
    how4Title: 'Survive & Share',
    how4Text: 'If you make it out alive, share your experience with friends!',
    pricingTitle: 'Pricing',
    pricingSubtitle: 'Simple, transparent pricing. No hidden fees.',
    price1Label: '2–3 Players',
    price2Label: 'Each additional player',
    price3Label: 'Maximum capacity',
    price3Value: '10 players',
    priceNote: 'Payment accepted on-site: cash or card. Corporate packages available.',
    bookingTitle: 'Book Your Quest',
    bookingSubtitle: 'Fill in the form below. We\'ll confirm your booking via email within 1 hour.',
    formName: 'Your Name',
    formNamePh: 'John Doe',
    formPhone: 'Phone Number',
    formPhonePh: '+373 XX XXX XXX',
    formEmail: 'Email',
    formEmailPh: 'you@example.com',
    formQuest: 'Select Quest',
    formQuestPh: 'Choose a quest...',
    formDate: 'Preferred Date',
    formTime: 'Preferred Time',
    formTimePh: 'Select time...',
    formPlayers: 'Number of Players',
    formMessage: 'Special Requests (optional)',
    formMessagePh: 'Birthday, team building, special needs...',
    formSubmit: 'Confirm Booking',
    formSubmitting: 'Sending...',
    successTitle: 'Booking Received!',
    successText: 'We\'ll confirm your booking via email within 1 hour. Get ready to face your fears!',
    successShare: 'Share with friends',
    successAnother: 'Book Another Quest',
    shareText: "I just booked a horror quest at PSYCHO! Who's brave enough to join me?",
    contactTitle: 'Contact Us',
    contactSubtitle: 'Questions? Reach out anytime.',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Hours',
    contactSocial: 'Follow Us',
    hoursWeekday: 'Mon–Fri: 18:00 – 01:00',
    hoursWeekend: 'Sat–Sun: 13:00 – 01:00',
    historyTitle: 'My Bookings',
    historySubtitle: 'Your booking history is saved locally on this device.',
    historyEmpty: 'No bookings yet. Time to face your fears!',
    historyPlayers: 'players',
    footerAddress: 'Address:',
    footerSchedule: 'Working hours:',
    footerLinks: 'Extra links',
    footerTerms: 'TERMS OF USE',
    footerPrivacy: 'PRIVACY POLICY',
    footerRights: 'All rights reserved.',
    dayMon: 'Monday:', dayTue: 'Tuesday:', dayWed: 'Wednesday:', dayThu: 'Thursday:',
    dayFri: 'Friday:', daySat: 'Saturday:', daySun: 'Sunday:',
    sliderCta: 'Book Now',
    pageTitle: 'PSYCHO — Horror Quest',
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: "Psycho Quest's & Horror Cinema",
    aboutDesc: "Psycho Quest's & Horror Cinema was founded in 2021. We are a team of professionals in creating horror quests, where every detail is thought through to give you chills. We transform ordinary events into unforgettable adventures, giving our guests thrilling sensations, an atmosphere of fear, and vivid emotions.",
    aboutAtmosphere: 'Feel the Atmosphere of Fear',
    aboutAtmosphereDesc: 'Special effects, darkness, unexpected appearances, and actors who intensify the tension. Immerse yourself in an environment where every sound and shadow keeps you on edge.',
    aboutEvents: 'Event Organization',
    aboutEventsDesc: 'We organize a variety of events: from team-building activities to birthday celebrations, parties, and corporate functions. We transform any occasion into an atmospheric adventure.',
    aboutProfessional: 'Professional Team',
    aboutProfessionalDesc: 'Our actors, set designers, and technicians work together to create an experience you won\'t forget. Every quest is built with meticulous attention to detail.',
    faqTitle: 'FAQ',
    faq1q: 'What is a horror quest?', faq1a: 'An exciting horror-genre game where participants enter specially designed locations with a frightening atmosphere, solve puzzles, interact with props and actors, overcome their fears, and try to escape within the set time.',
    faq2q: 'Will we be locked in a room?', faq2a: 'Yes, you will be locked in. The only way out is to keep moving forward and solving the puzzles.',
    faq3q: 'How long does the game last?', faq3a: 'Exactly 60 minutes.',
    faq4q: 'What clothing is recommended?', faq4a: 'Comfortable clothes and shoes that allow easy movement.',
    faq5q: 'What is the minimum age?', faq5a: 'Participants must be 13 years or older.',
    // Terms
    termsTitle: 'Terms of Use',
    terms1title: '1. General Provisions', terms1text: 'These Terms of Use govern the use of the website psychoquest.md. By visiting the site, you agree to these terms. If you do not agree, please discontinue use of the site.',
    terms2title: '2. Service Description', terms2text: 'The site provides access to information about horror quests, events, and entertainment programs with booking capabilities. All materials are informational in nature.',
    terms3title: '3. Registration and Use', terms3text: 'Some services require providing personal information. Users must provide accurate and up-to-date information. Failure to comply may result in service denial.',
    terms4title: '4. Intellectual Property', terms4text: 'All text, images, logos, and other materials on this site belong to Psycho Quest Moldova or are used lawfully. Copying and distribution require written permission.',
    terms5title: '5. Liability Limitation', terms5text: 'The site administration assumes no responsibility for any losses arising from the use of information or participation in events. Participation is voluntary and at the user\'s own initiative.',
    terms6title: '6. Confidentiality', terms6text: 'Personal data provided during booking is used exclusively for event organization and is not shared with third parties without consent, except as required by law.',
    terms7title: '7. Changes to Terms', terms7text: 'The administration reserves the right to modify these terms at any time. Updates are published on this page and take effect immediately.',
    terms8title: '8. Contact Information',
    // Privacy Policy
    privacyTitle: 'Privacy Policy',
    privacyIntro: 'LV RECLAM SRL (Psycho Quest & Cinema) makes every effort to respect the confidentiality of your personal data in accordance with Regulation 2016/679/EU, also known as GDPR.',
    privacyCollectTitle: 'What personal data do we collect through the site?',
    privacyCollectText: 'To book our games, the client must provide the following personal data: first name, last name, email address, and phone number.',
    privacyPurposeTitle: 'What is the data used for?',
    privacyPurposeIntro: 'The data is used or may be used for the following purposes:',
    privacyPurpose1: 'confirming the booking and identifying the client upon reservation;',
    privacyPurpose2: 'contacting the client to confirm the booking;',
    privacyPurpose3: 'informing the client about changes that may arise and affect booking details (technical issues, rescheduling, etc.);',
    privacyPurpose4: 'providing the client with the ability to modify or cancel the booking;',
    privacyPurpose5: 'informing the client about LV RECLAM SRL news, new quest rooms, and special events;',
    privacyPurpose6: 'informing about temporary promotions and offers;',
    privacyPurpose7: 'encouraging clients to write reviews about their experience in our games;',
    privacyPurpose8: 'marketing using Facebook Ads;',
    privacyPurpose9: 'identifying clients who violated the terms (did not show up for a booked game, broke quest rules, etc.) and preventing such situations in future bookings;',
    privacyPurpose10: 'sending photos taken at LV RECLAM (Psycho Quest & Cinema) SRL to the client\'s email upon request.',
    privacyAccessTitle: 'Who has access to this data?',
    privacyAccessText: 'Data processed for the above purposes is accessible only to the legal representatives and founders of LV RECLAM (Psycho Quest & Cinema) SRL, as well as company employees during the term of their employment contract. After the end of the employment relationship, employee access to the booking system is blocked.',
    privacyStorageTitle: 'Where is the data stored?',
    privacyStorageText: 'The data you enter when booking is displayed in our booking system, which is accessed using a username and password. Access is available to the administrator, founders, and company employees during their employment contract with LV RECLAM SRL. After the contract ends, access is blocked.',
    privacyRetentionTitle: 'How long is the data stored?',
    privacyRetentionText: 'We will store your data to inform you about news/promotions/events until you withdraw your consent. After that, your personal data will be deleted.',
    privacyRightsTitle: 'What rights do you have regarding personal data?',
    privacyRight1: 'Right to access information: you have the right to be informed about what personal data is being processed, for what purpose, and how.',
    privacyRight2: 'Right to rectification: you can correct your personal data by contacting us by phone +37379603666 or by email: psycho.quest.md@gmail.com',
    privacyRight3: 'Right to erasure: you can request the deletion of your personal data from the database if it is no longer needed for the original purposes of collection.',
    privacyRight4: 'Right to restriction: you can request restriction of data processing, in which case we will store it only for booking confirmation and change notifications.',
    privacyRight5: 'Right to object: you can object to further processing of your data in accordance with the law.',
    privacyRight6: 'Right to portability: you can request the transfer of your data in electronic form as provided by law.',
    privacyRight7: 'Right to object to direct marketing: you can opt out of direct marketing by following the instructions in each marketing email.',
    privacyRight8: 'Right to lodge a complaint: you can file a complaint with the data protection authority.',
    privacyUpdatesTitle: 'Privacy Policy Updates',
    privacyUpdatesText: 'From time to time we may need to update the Privacy Policy. The current version is always available on our website. We will inform you of significant changes, for example, if the purposes of processing your data, the identity of the operator, or your rights change.',
    privacyContactTitle: 'Contact Information',
    timeHint: 'Select a quest and date first',
    timeTaken: 'Booked',
    timePast: 'Past',
    formDetails: 'Your Details',
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
    timeSlotsWeekend: ['13:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  },
  ro: {
    navHome: 'Acasa',
    navAbout: 'Despre noi',
    navQuests: 'Quest-uri',
    navPricing: 'Preturi',
    navBooking: 'Rezerva',
    navContact: 'Contact',
    navHistory: 'Rezervarile mele',
    heroSubtitle: 'Horror Quest',
    heroTagline: 'Infrunta-ti fricile. Rezerva-ti cosmarul.',
    heroCta: 'Rezerva acum',
    questsTitle: 'Quest-urile noastre',
    questsSubtitle: 'Alege-ti cosmarul. Fiecare quest este o experienta horror unica cu actori live.',
    questBook: 'Rezerva acest quest',
    questDetails: 'Detalii',
    fearLabel: 'Frica',
    metaPlayers: 'jucatori',
    metaMinutes: 'min',
    metaActors: 'Actori Live',
    q1Name: 'Experimentul',
    q1Desc: 'Te trezesti intr-un laborator abandonat. Substante ciudate fierb in baloane sparte. Cineva — sau ceva — inca face experimente aici. Ai 60 de minute inainte sa devii urmatorul cobai.',
    q2Name: 'Drum gresit',
    q2Desc: 'Masina ta s-a stricat pe un drum pustiu. Singura adapost este o casa veche adanc in padure. Dar locuitorii ei au propriile planuri pentru oaspetii nepoftiti. Gaseste o cale de iesire inainte de cina.',
    q3Name: 'Cinema Horror',
    q3Desc: 'Un cinematograf abandonat difuzeaza ultimul spectacol — si tu esti vedeta. Linia dintre ecran si realitate se estompeaza pe masura ce personajele din cele mai terifiante filme prind viata in jurul tau.',
    howTitle: 'Cum functioneaza',
    howSubtitle: 'Experienta ta horror in 4 pasi simpli',
    how1Title: 'Alege un Quest',
    how1Text: 'Rasfoieste quest-urile noastre horror si alege-l pe cel care te cheama.',
    how2Title: 'Rezerva Online',
    how2Text: 'Selecteaza data, ora si numarul de jucatori. Confirmam prin email.',
    how3Title: 'Vino & Joaca',
    how3Text: 'Vino cu 15 minute mai devreme. Actorii si efectele noastre vor face restul.',
    how4Title: 'Supravietuieste & Impartaseste',
    how4Text: 'Daca reusesti sa iesi viu, impartaseste experienta cu prietenii!',
    pricingTitle: 'Preturi',
    pricingSubtitle: 'Preturi simple, transparente. Fara taxe ascunse.',
    price1Label: '2–3 Jucatori',
    price2Label: 'Fiecare jucator suplimentar',
    price3Label: 'Capacitate maxima',
    price3Value: '10 jucatori',
    priceNote: 'Plata se accepta la fata locului: numerar sau card. Pachete corporate disponibile.',
    bookingTitle: 'Rezerva Quest-ul',
    bookingSubtitle: 'Completeaza formularul. Confirmam rezervarea prin email in maxim 1 ora.',
    formName: 'Numele tau',
    formNamePh: 'Ion Popescu',
    formPhone: 'Telefon',
    formPhonePh: '+373 XX XXX XXX',
    formEmail: 'Email',
    formEmailPh: 'tu@exemplu.com',
    formQuest: 'Selecteaza Quest-ul',
    formQuestPh: 'Alege un quest...',
    formDate: 'Data preferata',
    formTime: 'Ora preferata',
    formTimePh: 'Selecteaza ora...',
    formPlayers: 'Numar de jucatori',
    formMessage: 'Cereri speciale (optional)',
    formMessagePh: 'Zi de nastere, team building, nevoi speciale...',
    formSubmit: 'Confirma rezervarea',
    formSubmitting: 'Se trimite...',
    successTitle: 'Rezervare primita!',
    successText: 'Vom confirma rezervarea prin email in maxim 1 ora. Pregateste-te sa-ti infrunti fricile!',
    successShare: 'Impartaseste cu prietenii',
    successAnother: 'Rezerva alt quest',
    shareText: 'Tocmai am rezervat un horror quest la PSYCHO! Cine este destul de curajos sa mi se alature?',
    contactTitle: 'Contact',
    contactSubtitle: 'Intrebari? Contacteaza-ne oricand.',
    contactAddress: 'Adresa',
    contactPhone: 'Telefon',
    contactEmail: 'Email',
    contactHours: 'Program',
    contactSocial: 'Urmareste-ne',
    hoursWeekday: 'Lun–Vin: 18:00 – 01:00',
    hoursWeekend: 'Sam–Dum: 13:00 – 01:00',
    historyTitle: 'Rezervarile mele',
    historySubtitle: 'Istoricul rezervarilor este salvat local pe acest dispozitiv.',
    historyEmpty: 'Nicio rezervare inca. E timpul sa-ti infrunti fricile!',
    historyPlayers: 'jucatori',
    footerAddress: 'Adresa:',
    footerSchedule: 'Program de lucru:',
    footerLinks: 'Link-uri suplimentare',
    footerTerms: 'CONDITII DE UTILIZARE',
    footerPrivacy: 'POLITICA DE CONFIDENTIALITATE',
    footerRights: 'Toate drepturile rezervate.',
    dayMon: 'Luni:', dayTue: 'Marti:', dayWed: 'Miercuri:', dayThu: 'Joi:',
    dayFri: 'Vineri:', daySat: 'Sambata:', daySun: 'Duminica:',
    sliderCta: 'Rezerva acum',
    pageTitle: 'PSYCHO — Horror Quest',
    aboutTitle: 'Despre noi', aboutSubtitle: "Psycho Quest's & Horror Cinema",
    aboutDesc: "Psycho Quest's & Horror Cinema a fost fondata in 2021. Suntem o echipa de profesionisti in crearea de quest-uri horror, unde fiecare detaliu este gandit pana la fiori. Transformam evenimentele obisnuite in aventuri de neuitat, oferind oaspetilor nostri senzatii puternice, o atmosfera de frica si emotii vii.",
    aboutAtmosphere: 'Simte atmosfera fricii', aboutAtmosphereDesc: 'Efecte speciale, intuneric, aparitii neasteptate si actori care intensifica tensiunea. Cufunda-te intr-un mediu in care fiecare sunet si umbra te tine in suspans.',
    aboutEvents: 'Organizarea evenimentelor', aboutEventsDesc: 'Organizam diverse evenimente: de la activitati de team building la petreceri de ziua de nastere, petreceri si functii corporative. Transformam orice ocazie intr-o aventura atmosferica.',
    aboutProfessional: 'Echipa profesionista', aboutProfessionalDesc: 'Actorii, designerii de decoruri si tehnicienii nostri lucreaza impreuna pentru a crea o experienta de neuitat.',
    faqTitle: 'Intrebari frecvente',
    faq1q: 'Ce este un horror quest?', faq1a: 'Un joc captivant de gen horror in care participantii intra in locatii special amenajate cu o atmosfera infricosatoare, rezolva puzzle-uri, interactioneaza cu recuzita si actorii, isi depasesc fricile si incearca sa scape in timpul stabilit.',
    faq2q: 'Vom fi incuiati intr-o camera?', faq2a: 'Da, veti fi incuiati. Singura cale de iesire este sa mergeti mai departe si sa rezolvati puzzle-urile.',
    faq3q: 'Cat dureaza jocul?', faq3a: 'Exact 60 de minute.',
    faq4q: 'Ce imbracaminte este recomandata?', faq4a: 'Haine si incaltaminte confortabile care permit miscarea usoara.',
    faq5q: 'Care este varsta minima?', faq5a: 'Participantii trebuie sa aiba 13 ani sau mai mult.',
    termsTitle: 'Conditii de utilizare',
    terms1title: '1. Dispozitii generale', terms1text: 'Aceste Conditii de utilizare reglementeaza utilizarea site-ului psychoquest.md. Prin vizitarea site-ului, sunteti de acord cu aceste conditii.',
    terms2title: '2. Descrierea serviciilor', terms2text: 'Site-ul ofera acces la informatii despre quest-uri horror, evenimente si programe de divertisment cu posibilitati de rezervare.',
    terms3title: '3. Inregistrare si utilizare', terms3text: 'Unele servicii necesita furnizarea de informatii personale. Utilizatorii trebuie sa furnizeze informatii corecte si actualizate.',
    terms4title: '4. Proprietate intelectuala', terms4text: 'Toate textele, imaginile, logo-urile si alte materiale de pe acest site apartin Psycho Quest Moldova.',
    terms5title: '5. Limitarea responsabilitatii', terms5text: 'Administratia site-ului nu isi asuma responsabilitatea pentru pierderile rezultate din utilizarea informatiilor sau participarea la evenimente.',
    terms6title: '6. Confidentialitate', terms6text: 'Datele personale furnizate in timpul rezervarii sunt utilizate exclusiv pentru organizarea evenimentelor.',
    terms7title: '7. Modificarea conditiilor', terms7text: 'Administratia isi rezerva dreptul de a modifica aceste conditii in orice moment.',
    terms8title: '8. Informatii de contact',
    // Privacy Policy
    privacyTitle: 'Politica de confidentialitate',
    privacyIntro: 'LV RECLAM SRL (Psycho Quest & Cinema) depune toate eforturile pentru a respecta confidentialitatea datelor dumneavoastra personale in conformitate cu prevederile Regulamentului 2016/679/UE, cunoscut si sub denumirea de GDPR.',
    privacyCollectTitle: 'Ce date personale colectam prin intermediul site-ului?',
    privacyCollectText: 'Pentru a rezerva jocurile noastre, clientul trebuie sa furnizeze urmatoarele date personale: numele, prenumele, adresa de email si numarul de telefon.',
    privacyPurposeTitle: 'In ce scop sunt utilizate datele?',
    privacyPurposeIntro: 'Datele sunt utilizate sau pot fi utilizate in urmatoarele scopuri:',
    privacyPurpose1: 'confirmarea rezervarii si identificarea clientului la momentul rezervarii;',
    privacyPurpose2: 'contactarea clientului pentru confirmarea rezervarii;',
    privacyPurpose3: 'informarea clientului despre modificarile care pot aparea si afecta detaliile rezervarii (probleme tehnice, reprogramari etc.);',
    privacyPurpose4: 'oferirea clientului posibilitatii de a modifica sau anula rezervarea;',
    privacyPurpose5: 'informarea clientului despre noutatile LV RECLAM SRL, camere noi de quest si evenimente speciale;',
    privacyPurpose6: 'informarea despre promotii si oferte temporare;',
    privacyPurpose7: 'incurajarea clientilor sa scrie recenzii despre experienta lor in jocurile noastre;',
    privacyPurpose8: 'marketing prin intermediul Facebook Ads;',
    privacyPurpose9: 'identificarea clientilor care au incalcat conditiile (nu s-au prezentat la jocul rezervat, au incalcat regulile quest-ului etc.) si prevenirea unor astfel de situatii la rezervarile ulterioare;',
    privacyPurpose10: 'trimiterea fotografiilor realizate la LV RECLAM (Psycho Quest & Cinema) SRL pe email-ul clientului, la cerere.',
    privacyAccessTitle: 'Cine are acces la aceste date?',
    privacyAccessText: 'Datele prelucrate in scopurile mentionate mai sus sunt accesibile doar reprezentantilor legali si fondatorilor LV RECLAM (Psycho Quest & Cinema) SRL, precum si angajatilor companiei pe durata contractului de munca. Dupa incetarea relatiei de munca, accesul angajatilor la sistemul de rezervari este blocat.',
    privacyStorageTitle: 'Unde sunt stocate datele?',
    privacyStorageText: 'Datele introduse de dumneavoastra la rezervare sunt afisate in sistemul nostru de rezervari, accesat prin nume de utilizator si parola. Accesul il au administratorul, fondatorii si angajatii companiei pe durata contractului de munca cu LV RECLAM SRL. Dupa expirarea contractului, accesul este blocat.',
    privacyRetentionTitle: 'Cat timp sunt stocate datele?',
    privacyRetentionText: 'Vom stoca datele dumneavoastra pentru a va informa despre noutati/promotii/evenimente pana cand va retrageti consimtamantul. Dupa aceea, datele dumneavoastra personale vor fi sterse.',
    privacyRightsTitle: 'Ce drepturi aveti in legatura cu datele personale?',
    privacyRight1: 'Dreptul de acces la informatii: aveti dreptul de a fi informat despre ce date personale sunt prelucrate, in ce scop si in ce mod.',
    privacyRight2: 'Dreptul la rectificare: puteti corecta datele personale contactandu-ne la telefon +37379603666 sau pe email: psycho.quest.md@gmail.com',
    privacyRight3: 'Dreptul la stergere: puteti solicita stergerea datelor personale din baza de date daca nu mai sunt necesare pentru scopurile initiale de colectare.',
    privacyRight4: 'Dreptul la restrictionare: puteti solicita restrictionarea prelucrarii datelor, caz in care le vom stoca doar pentru confirmarea rezervarii si notificarea modificarilor.',
    privacyRight5: 'Dreptul la opozitie: puteti sa va opuneti prelucrarii ulterioare a datelor in conformitate cu legea.',
    privacyRight6: 'Dreptul la portabilitate: puteti solicita transferul datelor in format electronic, conform legii.',
    privacyRight7: 'Dreptul de a va opune marketingului direct: puteti renunta la marketingul direct urmand instructiunile din fiecare email de marketing.',
    privacyRight8: 'Dreptul de a depune o plangere: puteti depune o plangere la autoritatea de protectie a datelor.',
    privacyUpdatesTitle: 'Actualizari ale Politicii de confidentialitate',
    privacyUpdatesText: 'Din cand in cand poate fi necesar sa actualizam Politica de confidentialitate. Versiunea actuala este intotdeauna disponibila pe site-ul nostru. Va vom informa despre modificarile semnificative, de exemplu, daca se schimba scopurile prelucrarii datelor, identitatea operatorului sau drepturile dumneavoastra.',
    privacyContactTitle: 'Informatii de contact',
    timeHint: 'Selecteaza un quest si o data mai intai',
    timeTaken: 'Rezervat',
    timePast: 'Trecut',
    formDetails: 'Datele tale',
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
    timeSlotsWeekend: ['13:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  },
  ru: {
    navHome: 'Главная',
    navAbout: 'О нас',
    navQuests: 'Квесты',
    navPricing: 'Цены',
    navBooking: 'Бронировать',
    navContact: 'Контакты',
    navHistory: 'Мои брони',
    heroSubtitle: 'Хоррор Квест',
    heroTagline: 'Встреться со своими страхами. Забронируй свой кошмар.',
    heroCta: 'Забронировать',
    questsTitle: 'Наши квесты',
    questsSubtitle: 'Выбери свой кошмар. Каждый квест — уникальный хоррор с живыми актёрами.',
    questBook: 'Забронировать квест',
    questDetails: 'Подробнее',
    fearLabel: 'Страх',
    metaPlayers: 'игроков',
    metaMinutes: 'мин',
    metaActors: 'Живые актёры',
    q1Name: 'Эксперимент',
    q1Desc: 'Вы просыпаетесь в заброшенной лаборатории. Странные вещества пузырятся в разбитых колбах. Кто-то — или что-то — всё ещё проводит эксперименты. У вас 60 минут, прежде чем вы станете следующим подопытным.',
    q2Name: 'Неверный поворот',
    q2Desc: 'Ваша машина сломалась на пустынной дороге. Единственное укрытие — старый дом глубоко в лесу. Но его обитатели имеют свои планы на незваных гостей. Найдите выход до ужина.',
    q3Name: 'Хоррор Кино',
    q3Desc: 'Заброшенный кинотеатр показывает последний сеанс — и вы в главной роли. Грань между экраном и реальностью стирается, когда персонажи самых страшных фильмов оживают вокруг вас.',
    howTitle: 'Как это работает',
    howSubtitle: 'Ваш хоррор-опыт за 4 простых шага',
    how1Title: 'Выберите квест',
    how1Text: 'Просмотрите наши хоррор-квесты и выберите тот, который зовёт вас.',
    how2Title: 'Бронируйте онлайн',
    how2Text: 'Выберите дату, время и количество игроков. Подтвердим по email.',
    how3Title: 'Приходите и играйте',
    how3Text: 'Приходите за 15 минут. Наши актёры и эффекты сделают остальное.',
    how4Title: 'Выживите и расскажите',
    how4Text: 'Если выберетесь живыми, поделитесь опытом с друзьями!',
    pricingTitle: 'Цены',
    pricingSubtitle: 'Простые, прозрачные цены. Никаких скрытых платежей.',
    price1Label: '2–3 Игрока',
    price2Label: 'Каждый дополнительный игрок',
    price3Label: 'Максимальная вместимость',
    price3Value: '10 игроков',
    priceNote: 'Оплата на месте: наличные или карта. Корпоративные пакеты доступны.',
    bookingTitle: 'Забронировать квест',
    bookingSubtitle: 'Заполните форму. Подтвердим бронь по email в течение 1 часа.',
    formName: 'Ваше имя',
    formNamePh: 'Иван Иванов',
    formPhone: 'Телефон',
    formPhonePh: '+373 XX XXX XXX',
    formEmail: 'Email',
    formEmailPh: 'you@example.com',
    formQuest: 'Выберите квест',
    formQuestPh: 'Выберите квест...',
    formDate: 'Предпочитаемая дата',
    formTime: 'Предпочитаемое время',
    formTimePh: 'Выберите время...',
    formPlayers: 'Количество игроков',
    formMessage: 'Особые пожелания (опционально)',
    formMessagePh: 'День рождения, тимбилдинг, особые потребности...',
    formSubmit: 'Подтвердить бронь',
    formSubmitting: 'Отправка...',
    successTitle: 'Бронь получена!',
    successText: 'Подтвердим бронь по email в течение 1 часа. Готовьтесь к встрече со своими страхами!',
    successShare: 'Поделиться с друзьями',
    successAnother: 'Забронировать ещё',
    shareText: 'Я только что забронировал хоррор-квест в PSYCHO! Кто достаточно смел, чтобы присоединиться?',
    contactTitle: 'Контакты',
    contactSubtitle: 'Вопросы? Свяжитесь с нами в любое время.',
    contactAddress: 'Адрес',
    contactPhone: 'Телефон',
    contactEmail: 'Email',
    contactHours: 'Режим работы',
    contactSocial: 'Мы в соцсетях',
    hoursWeekday: 'Пн–Пт: 18:00 – 01:00',
    hoursWeekend: 'Сб–Вс: 13:00 – 01:00',
    historyTitle: 'Мои бронирования',
    historySubtitle: 'История бронирований сохранена локально на этом устройстве.',
    historyEmpty: 'Пока нет бронирований. Пора встретиться со своими страхами!',
    historyPlayers: 'игроков',
    footerAddress: 'Адрес:',
    footerSchedule: 'График работы:',
    footerLinks: 'Доп. ссылки',
    footerTerms: 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ',
    footerPrivacy: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
    footerRights: 'Все права защищены.',
    dayMon: 'Понедельник:', dayTue: 'Вторник:', dayWed: 'Среда:', dayThu: 'Четверг:',
    dayFri: 'Пятница:', daySat: 'Суббота:', daySun: 'Воскресенье:',
    sliderCta: 'Забронировать',
    pageTitle: 'PSYCHO — Хоррор Квест',
    aboutTitle: 'О нас', aboutSubtitle: "Psycho Quest's & Horror Cinema",
    aboutDesc: 'Компания Psycho Quest\'s & Horror Cinema была основана в 2021 году. Мы команда профессионалов в создании хоррор-квестов, где каждая деталь продумана до мурашек. Мы превращаем обычные события в незабываемые приключения, даря гостям острые ощущения, атмосферу страха и яркие эмоции.',
    aboutAtmosphere: 'Почувствуйте атмосферу страха', aboutAtmosphereDesc: 'Вас ждут спецэффекты, тьма, неожиданные появления и актёры, которые усиливают напряжение. Погрузитесь в среду, где каждый звук и тень держат вас в напряжении.',
    aboutEvents: 'Организация мероприятий', aboutEventsDesc: 'Мы организуем разнообразные мероприятия: от тимбилдингов до празднования дней рождения, вечеринок и корпоративов. Превращаем любой повод в атмосферное приключение.',
    aboutProfessional: 'Профессиональная команда', aboutProfessionalDesc: 'Наши актёры, декораторы и техники работают вместе, чтобы создать опыт, который вы не забудете. Каждый квест создан с вниманием к деталям.',
    faqTitle: 'Частые вопросы',
    faq1q: 'Что такое хоррор-квест?', faq1a: 'Захватывающая игра в жанре хоррор, где участники попадают в специально оборудованные локации с пугающей атмосферой, решают головоломки, взаимодействуют с реквизитом и актёрами, преодолевают страх и пытаются выбраться за отведённое время.',
    faq2q: 'Нас запрут в комнате?', faq2a: 'Да, вы будете заперты. Единственный выход — идти дальше, разгадывая загадки.',
    faq3q: 'Сколько длится игра?', faq3a: 'Ровно 60 минут.',
    faq4q: 'Какую одежду рекомендуется надеть?', faq4a: 'Удобную одежду и обувь, позволяющую свободно двигаться.',
    faq5q: 'Какой минимальный возраст?', faq5a: 'Участникам должно быть 13 лет или старше.',
    termsTitle: 'Условия использования',
    terms1title: '1. Общие положения', terms1text: 'Настоящие Условия пользования регулируют использование сайта psychoquest.md. Посещая сайт, вы соглашаетесь с данными условиями.',
    terms2title: '2. Описание услуг', terms2text: 'Сайт предоставляет доступ к информации о хоррор-квестах, мероприятиях и развлекательных программах с возможностью бронирования.',
    terms3title: '3. Регистрация и использование', terms3text: 'Некоторые услуги требуют предоставления личной информации. Пользователи обязаны предоставлять достоверные и актуальные данные.',
    terms4title: '4. Интеллектуальная собственность', terms4text: 'Все тексты, изображения, логотипы и другие материалы на сайте принадлежат Psycho Quest Moldova.',
    terms5title: '5. Ограничение ответственности', terms5text: 'Администрация сайта не несёт ответственности за убытки, возникшие в результате использования информации или участия в мероприятиях.',
    terms6title: '6. Конфиденциальность', terms6text: 'Персональные данные, предоставленные при бронировании, используются исключительно для организации мероприятий.',
    terms7title: '7. Изменение условий', terms7text: 'Администрация вправе изменять данные условия в любое время. Обновления публикуются на этой странице и вступают в силу немедленно.',
    terms8title: '8. Контактная информация',
    // Privacy Policy
    privacyTitle: 'Политика конфиденциальности',
    privacyIntro: 'LV RECLAM SRL (Psycho Quest & Cinema) прилагает все усилия для соблюдения конфиденциальности ваших персональных данных в соответствии с положениями Регламента 2016/679/EU, также известного как GDPR.',
    privacyCollectTitle: 'Какие персональные данные мы собираем через сайт?',
    privacyCollectText: 'Для бронирования наших игр клиент должен указать следующие персональные данные: имя, фамилию, адрес электронной почты и номер телефона.',
    privacyPurposeTitle: 'Для чего используются данные?',
    privacyPurposeIntro: 'Данные используются или могут использоваться для следующих целей:',
    privacyPurpose1: 'подтверждения бронирования и идентификации клиента при бронировании;',
    privacyPurpose2: 'связи с клиентом для подтверждения бронирования;',
    privacyPurpose3: 'информирования клиента об изменениях, которые могут возникнуть и повлиять на данные бронирования (технические проблемы, переносы и т.д.);',
    privacyPurpose4: 'предоставления клиенту возможности изменить или отменить бронирование;',
    privacyPurpose5: 'информирования клиента о новостях LV RECLAM SRL, новых квестовых комнатах и специальных мероприятиях;',
    privacyPurpose6: 'информирования о временных акциях и предложениях;',
    privacyPurpose7: 'поощрения клиентов к написанию отзывов о своем опыте участия в наших играх;',
    privacyPurpose8: 'маркетинга с использованием Facebook Ads;',
    privacyPurpose9: 'идентификации клиентов, которые нарушили условия (не пришли на забронирённую игру, нарушили правила квеста и т.д.) и предотвращения повторения таких ситуаций при последующих бронированиях;',
    privacyPurpose10: 'отправки фотографий, сделанных в LV RECLAM (Psycho Quest & Cinema) SRL, на электронную почту по запросу клиента.',
    privacyAccessTitle: 'Кто имеет доступ к этим данным?',
    privacyAccessText: 'Данные, обрабатываемые для вышеуказанных целей, доступны только законным представителям и учредителям LV RECLAM (Psycho Quest & Cinema) SRL, а также сотрудникам компании в период действия трудового договора. После завершения трудовых отношений доступ сотрудников к системе бронирования блокируется.',
    privacyStorageTitle: 'Где хранятся данные?',
    privacyStorageText: 'Данные, введённые вами при бронировании, отображаются в нашей системе бронирования, доступ к которой осуществляется с помощью имени пользователя и пароля. Доступ имеют администратор, учредители и сотрудники компании в течение срока их трудового договора с LV RECLAM SRL. После окончания договора доступ блокируется.',
    privacyRetentionTitle: 'Как долго хранятся данные?',
    privacyRetentionText: 'Мы будем хранить ваши данные, чтобы информировать вас о новостях/акциях/мероприятиях, до тех пор, пока вы не отзовете своё согласие. После этого ваши персональные данные будут удалены.',
    privacyRightsTitle: 'Какие у вас есть права в отношении персональных данных?',
    privacyRight1: 'Право на доступ к информации: вы имеете право быть информированы о том, какие персональные данные обрабатываются, с какой целью и каким образом.',
    privacyRight2: 'Право на исправление: вы можете исправить свои персональные данные, связавшись с нами по телефону +37379603666 или по email: psycho.quest.md@gmail.com',
    privacyRight3: 'Право на удаление: вы можете потребовать удалить свои персональные данные из базы данных, если они больше не нужны для первоначальных целей сбора.',
    privacyRight4: 'Право на ограничение: вы можете запросить ограничение обработки данных, при этом мы будем хранить их только для подтверждения бронирования и уведомления об изменениях.',
    privacyRight5: 'Право на возражение: вы можете возразить против дальнейшей обработки ваших данных в соответствии с законом.',
    privacyRight6: 'Право на переносимость: вы можете запросить передачу ваших данных в электронном виде в установленном законом порядке.',
    privacyRight7: 'Право возражать против прямого маркетинга: вы можете отказаться от прямого маркетинга, следуя инструкциям в каждом маркетинговом письме.',
    privacyRight8: 'Право подать жалобу: вы можете подать жалобу в орган по защите данных.',
    privacyUpdatesTitle: 'Обновления политики конфиденциальности',
    privacyUpdatesText: 'Иногда нам может потребоваться обновить Политику конфиденциальности. Актуальная версия всегда доступна на нашем сайте. Мы сообщим вам о значительных изменениях, например, если изменятся цели обработки ваших данных, идентичность оператора или ваши права.',
    privacyContactTitle: 'Контактная информация',
    timeHint: 'Сначала выберите квест и дату',
    timeTaken: 'Занято',
    timePast: 'Прошло',
    formDetails: 'Ваши данные',
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
    timeSlotsWeekend: ['13:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  }
};

// --- Quest Data ---
const QUESTS = [
  { id: 'experiment', nameKey: 'q1Name', descKey: 'q1Desc', image: 'images/experiment.jpg', players: '2-10', duration: 60, fear: 4, hasActors: true },
  { id: 'wrong-turn', nameKey: 'q2Name', descKey: 'q2Desc', image: 'images/wrong-turn.png', players: '2-10', duration: 60, fear: 5, hasActors: true },
  { id: 'horror-cinema', nameKey: 'q3Name', descKey: 'q3Desc', image: 'images/horror-cinema.jpg', players: '2-10', duration: 90, fear: 5, hasActors: true }
];

// --- State ---
let currentLang = localStorage.getItem('psycho-lang') || 'ru';
let flatpickrInstance = null;
let sliderInterval = null;
let currentSlide = 0;

// --- i18n Module ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('psycho-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[lang] && T[lang][key]) el.placeholder = T[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (document.getElementById('bwRooms')) initBookingWizard();
  renderQuests();
  renderHistory();
  renderSlider();
}

// --- Hero Slider ---
function renderSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;
  const t = T[currentLang];

  slider.innerHTML = QUESTS.map((q, i) => `
    <div class="slide ${i === currentSlide ? 'active' : ''}" style="background-image: url('${q.image}')">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <h2 class="slide-title">${t[q.nameKey]}</h2>
        <p class="slide-desc">${t[q.descKey]}</p>
        <div class="slide-meta">
          <span><img src="images/Dracula.svg" alt="" class="meta-horror-icon"> ${q.players} ${t.metaPlayers}</span>
          <span><img src="images/Friday_13.svg" alt="" class="meta-horror-icon"> ${q.duration} ${t.metaMinutes}</span>
          ${q.hasActors ? `<span><img src="images/Ghostface.svg" alt="" class="meta-horror-icon"> ${t.metaActors}</span>` : ''}
        </div>
        <a href="booking.html?quest=${q.id}" class="hero-cta">${t.sliderCta}</a>
        <div class="slide-link"><a href="quests.html" class="slide-view-rooms" data-i18n="navQuests">${t.navQuests}</a></div>
      </div>
    </div>
  `).join('') + `
    <div class="slider-indicators">
      ${QUESTS.map((_, i) => `<button class="slider-ind ${i === currentSlide ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"><span class="slider-ind-fill"></span></button>`).join('')}
    </div>
  `;
}

function goToSlide(n) {
  currentSlide = n;
  document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === n));
  document.querySelectorAll('.slider-ind').forEach((d, i) => d.classList.toggle('active', i === n));
  resetSliderTimer();
}

function nextSlide() { goToSlide((currentSlide + 1) % QUESTS.length); }
function prevSlide() { goToSlide((currentSlide - 1 + QUESTS.length) % QUESTS.length); }

function startSlider() {
  sliderInterval = setInterval(() => nextSlide(), 6000);
}

function resetSliderTimer() {
  if (sliderInterval) clearInterval(sliderInterval);
  startSlider();
}

// --- Quest Rendering ---
function renderQuests() {
  const grid = document.getElementById('questsGrid');
  if (!grid) return;
  const t = T[currentLang];

  grid.innerHTML = QUESTS.map(q => {
    const fearDots = Array.from({length: 5}, (_, i) =>
      `<span class="fear-dot ${i < q.fear ? 'active' : ''}" aria-hidden="true"></span>`
    ).join('');

    return `
      <article class="quest-card fade-in" data-quest="${q.id}">
        <div class="quest-image">
          <img src="${q.image}" alt="${t[q.nameKey]}" loading="lazy">
        </div>
        <div class="quest-body">
          <h3 class="quest-name">${t[q.nameKey]}</h3>
          <p class="quest-description">${t[q.descKey]}</p>
          <div class="quest-meta">
            <span class="quest-meta-item"><img src="images/Dracula.svg" alt="" class="meta-horror-icon"> ${q.players} ${t.metaPlayers}</span>
            <span class="quest-meta-item"><img src="images/Friday_13.svg" alt="" class="meta-horror-icon"> ${q.duration} ${t.metaMinutes}</span>
            ${q.hasActors ? `<span class="quest-meta-item"><img src="images/Ghostface.svg" alt="" class="meta-horror-icon"> ${t.metaActors}</span>` : ''}
          </div>
          <div class="fear-level">
            <span class="fear-label">${t.fearLabel}:</span>
            <div class="fear-dots" role="img" aria-label="Fear level ${q.fear} out of 5">${fearDots}</div>
          </div>
          <a href="booking.html?quest=${q.id}" class="quest-book-btn">${t.questBook}</a>
        </div>
      </article>
    `;
  }).join('');

  observeFadeIns();
}

// --- Booking Wizard ---
const bw = { quest: null, date: null, time: null };
let wizardInitialized = false;

function initBookingWizard() {
  const roomsEl = document.getElementById('bwRooms');
  if (!roomsEl) return;

  const t = T[currentLang];
  const checkSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
  const prevQuest = bw.quest;

  // Render room cards (re-render updates translations)
  roomsEl.innerHTML = QUESTS.map(q => `
    <div class="bw-room${bw.quest === q.id ? ' active' : ''}" data-quest="${q.id}">
      <div class="bw-room-check">${checkSvg}</div>
      <img class="bw-room-img" src="${q.image}" alt="${t[q.nameKey]}">
      <div class="bw-room-name">${t[q.nameKey]}</div>
    </div>
  `).join('');

  roomsEl.querySelectorAll('.bw-room').forEach(card => {
    card.addEventListener('click', () => {
      roomsEl.querySelectorAll('.bw-room').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      bw.quest = card.dataset.quest;
      bw.time = null;
      showSection('bwDateSection');
      initInlineDatePicker();
      updateSummary();
    });
  });

  // One-time setup (submit handler + URL preselect)
  if (!wizardInitialized) {
    wizardInitialized = true;
    const params = new URLSearchParams(window.location.search);
    const preQuest = params.get('quest');
    if (preQuest) {
      const card = roomsEl.querySelector(`[data-quest="${preQuest}"]`);
      if (card) card.click();
    }
    const submitBtn = document.getElementById('bwSubmit');
    if (submitBtn) submitBtn.addEventListener('click', handleWizardSubmit);

    // Keep +373 prefix in phone input
    const phoneInput = document.getElementById('bwPhone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function() {
        if (!this.value.startsWith('+373 ')) this.value = '+373 ';
      });
      phoneInput.addEventListener('focus', function() {
        if (this.selectionStart < 5) this.setSelectionRange(5, 5);
      });
    }
  }

  updateSummary();
}

function showSection(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('bw-hidden');
}

function initInlineDatePicker() {
  const container = document.getElementById('bwDatePicker');
  if (!container || typeof flatpickr === 'undefined') return;
  container.innerHTML = '';
  flatpickr(container, {
    inline: true,
    minDate: 'today',
    maxDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    dateFormat: 'Y-m-d',
    theme: 'dark',
    locale: { firstDayOfWeek: 1 },
    onChange: function(selectedDates, dateStr) {
      bw.date = dateStr;
      bw.time = null;
      renderTimeGrid();
      showSection('bwTimeSection');
      updateSummary();
    }
  });
}

function isWeekend(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.getDay() === 0 || d.getDay() === 6;
}

async function renderTimeGrid() {
  const grid = document.getElementById('bwTimeGrid');
  if (!grid || !bw.quest || !bw.date) return;
  const t = T[currentLang];
  const weekend = isWeekend(bw.date);
  const slots = weekend ? (t.timeSlotsWeekend || T.en.timeSlotsWeekend) : (t.timeSlots || T.en.timeSlots);

  grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:12px;color:var(--text-muted)">...</div>';

  let bookedSlots = [];
  try { bookedSlots = await getBookedSlots(bw.date, bw.quest); } catch(e) {}

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const currentMin = now.getHours() * 60 + now.getMinutes();
  const isToday = bw.date === today;

  grid.innerHTML = slots.map(slot => {
    const [h, m] = slot.split(':').map(Number);
    const slotMin = (h === 0 ? 24 : h) * 60 + m;
    const isPast = isToday && slotMin <= currentMin;
    const isTaken = bookedSlots.includes(slot);

    let cls = 'bw-time';
    let sub = '';
    if (isPast) { cls += ' past'; sub = `<span class="bw-time-sub">${t.timePast || 'Past'}</span>`; }
    else if (isTaken) { cls += ' taken'; sub = `<span class="bw-time-sub">${t.timeTaken || 'Booked'}</span>`; }

    return `<div class="${cls}" data-time="${slot}">${slot}${sub}</div>`;
  }).join('');

  grid.querySelectorAll('.bw-time:not(.taken):not(.past)').forEach(cell => {
    cell.addEventListener('click', () => {
      grid.querySelectorAll('.bw-time').forEach(c => c.classList.remove('active'));
      cell.classList.add('active');
      bw.time = cell.dataset.time;
      showSection('bwPhoneSection');
      document.getElementById('bwPhone')?.focus();
      updateSummary();
    });
  });
}

function updateSummary() {
  const el = document.getElementById('bwSummary');
  if (!el) return;
  const t = T[currentLang];
  const parts = [];
  if (bw.quest) {
    const q = QUESTS.find(x => x.id === bw.quest);
    if (q) parts.push('<strong>' + t[q.nameKey] + '</strong>');
  }
  if (bw.date) parts.push(bw.date);
  if (bw.time) parts.push(bw.time);

  if (parts.length > 0) {
    el.innerHTML = parts.join(' &mdash; ');
    el.classList.remove('bw-hidden');
  } else {
    el.classList.add('bw-hidden');
  }
}

async function handleWizardSubmit() {
  const phone = document.getElementById('bwPhone')?.value.trim();
  const submitBtn = document.getElementById('bwSubmit');
  const t = T[currentLang];

  if (!bw.quest || !bw.date || !bw.time || !phone) {
    document.getElementById('bwPhone')?.focus();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t.formSubmitting || 'Sending...';

  try {
    const sb = getSupabase();
    if (sb) {
      const { data: room } = await sb.from('rooms').select('id').eq('slug', bw.quest).single();
      if (room) {
        const { error } = await sb.from('bookings').insert({
          room_id: room.id,
          booking_date: bw.date,
          time_slot: bw.time,
          customer_name: null,
          phone: phone,
          email: null,
          players: 2,
          lang: currentLang
        });
        if (error) {
          console.error('Booking error:', error);
          alert(t.bookingError || 'Booking failed. Please call us.');
          submitBtn.disabled = false;
          submitBtn.textContent = t.formSubmit || 'Confirm';
          return;
        }
      }
    }
  } catch(e) {
    console.warn('Supabase unavailable:', e);
  }

  // Save locally
  saveBookingLocal({ quest: bw.quest, date: bw.date, time: bw.time, phone, name: '', email: '', players: 2, message: '' });

  // Show success
  document.getElementById('bookingWizard').style.display = 'none';
  const successEl = document.getElementById('bookingSuccess');
  if (successEl) {
    successEl.classList.add('show');
    successEl.querySelector('.booking-success-quest').textContent = getQuestName(bw.quest);
    successEl.querySelector('.booking-success-date').textContent = `${bw.date} @ ${bw.time}`;
  }

  submitBtn.disabled = false;
  submitBtn.textContent = t.formSubmit || 'Confirm';
}

// Max simultaneous rooms (cinema + 1 quest = 2 max at any slot)
const MAX_SIMULTANEOUS = 2;

async function getBookedSlots(date, questSlug) {
  const sb = getSupabase();
  if (!sb) return [];

  // Get room id for selected quest
  const { data: room } = await sb.from('rooms').select('id').eq('slug', questSlug).single();
  if (!room) return [];

  // Get all non-cancelled bookings for this date
  const { data: allBookings } = await sb
    .from('bookings')
    .select('room_id, time_slot')
    .eq('booking_date', date)
    .neq('status', 'cancelled');

  if (!allBookings) return [];

  const takenSlots = [];
  const weekend = isWeekend(date);
  const slots = weekend ? (T[currentLang]?.timeSlotsWeekend || T.en.timeSlotsWeekend) : (T[currentLang]?.timeSlots || T.en.timeSlots);

  for (const slot of slots) {
    const bookingsAtSlot = allBookings.filter(b => b.time_slot === slot);
    // Slot taken if: this room already booked, OR max simultaneous reached
    const roomBooked = bookingsAtSlot.some(b => b.room_id === room.id);
    const atCapacity = bookingsAtSlot.length >= MAX_SIMULTANEOUS;
    if (roomBooked || atCapacity) takenSlots.push(slot);
  }

  return takenSlots;
}


function getQuestName(questId) {
  const quest = QUESTS.find(q => q.id === questId);
  return quest ? T[currentLang][quest.nameKey] : questId;
}

function resetBookingForm() {
  const wizard = document.getElementById('bookingWizard');
  const successEl = document.getElementById('bookingSuccess');
  if (wizard) {
    wizard.style.display = 'block';
    bw.quest = null; bw.date = null; bw.time = null;
    document.querySelectorAll('.bw-room').forEach(c => c.classList.remove('active'));
    ['bwDateSection','bwTimeSection','bwPhoneSection','bwSummary'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('bw-hidden');
    });
    const phone = document.getElementById('bwPhone');
    if (phone) phone.value = '';
  }
  if (successEl) successEl.classList.remove('show');
}

// --- Share ---
function shareBooking() {
  const t = T[currentLang];
  const shareData = { title: 'PSYCHO Horror Quest', text: t.shareText, url: window.location.origin };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`).then(() => {
      const btn = document.querySelector('.share-btn');
      if (btn) { const o = btn.textContent; btn.textContent = '\u2705 Copied!'; setTimeout(() => { btn.textContent = o; }, 2000); }
    }).catch(() => {});
  }
}

// --- Booking History ---
function saveBookingLocal(data) {
  const bookings = JSON.parse(localStorage.getItem('psycho-bookings') || '[]');
  bookings.unshift({ ...data, questName: getQuestName(data.quest), bookedAt: new Date().toISOString() });
  if (bookings.length > 20) bookings.pop();
  localStorage.setItem('psycho-bookings', JSON.stringify(bookings));
}

function renderHistory() {
  const container = document.getElementById('historyList');
  if (!container) return;
  const t = T[currentLang];
  const bookings = JSON.parse(localStorage.getItem('psycho-bookings') || '[]');

  if (bookings.length === 0) {
    container.innerHTML = `<p class="history-empty">${t.historyEmpty}</p>`;
    return;
  }
  container.innerHTML = bookings.map(b => `
    <div class="history-item">
      <span class="history-quest">${b.questName || getQuestName(b.quest)}</span>
      <span class="history-date">${b.date} @ ${b.time}</span>
      <span class="history-details">${b.name} \u2022 ${b.players} ${t.historyPlayers} \u2022 ${b.phone}</span>
    </div>
  `).join('');
}

// --- Intersection Observer ---
let observer = null;
function observeFadeIns() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in:not(.visible), .footer-col:not(.visible)').forEach(el => observer.observe(el));
}

// --- Mobile Nav ---
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.toggle('open');
}

function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');
}

// --- Active Nav Highlight ---
function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('nav-active');
    }
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  observeFadeIns();
  highlightActiveNav();

  // Slider
  if (document.getElementById('heroSlider')) {
    renderSlider();
    startSlider();
  }

  // Booking wizard
  if (document.getElementById('bookingWizard')) {
    initBookingWizard();
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) menuBtn.addEventListener('click', toggleMobileNav);

  // Mobile nav close on link click
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
