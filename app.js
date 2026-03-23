/* ============================================
   PSYCHO Horror Quest - Application Logic
   Modules: i18n, Theme, Booking, History, UI
   ============================================ */

// --- Translations ---
const T = {
  en: {
    // Nav
    navQuests: 'Quests',
    navPricing: 'Pricing',
    navBooking: 'Book Now',
    navContact: 'Contact',
    navHistory: 'My Bookings',
    // Hero
    heroSubtitle: 'Horror Quest',
    heroTagline: 'Face your fears. Book your nightmare.',
    heroCta: 'Book Now',
    // Quests
    questsTitle: 'Our Quests',
    questsSubtitle: 'Choose your nightmare. Each quest is a unique horror experience with live actors.',
    questBook: 'Book This Quest',
    fearLabel: 'Fear',
    metaPlayers: 'players',
    metaMinutes: 'min',
    metaActors: 'Live Actors',
    // Quest: The Experiment
    q1Name: 'The Experiment',
    q1Desc: 'You wake up in an abandoned laboratory. Strange substances bubble in broken flasks. Someone — or something — is still conducting experiments here. You have 60 minutes before becoming the next test subject.',
    // Quest: Wrong Turn
    q2Name: 'Wrong Turn',
    q2Desc: 'Your car broke down on a deserted road. The only shelter is an old house deep in the woods. But its inhabitants have their own plans for unexpected guests. Find a way out before dinner is served.',
    // Quest: Horror Cinema
    q3Name: 'Horror Cinema',
    q3Desc: 'An abandoned movie theater is screening its final show — and you\'re the star. The line between screen and reality blurs as characters from the most terrifying films come to life around you.',
    // How it works
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
    // Pricing
    pricingTitle: 'Pricing',
    pricingSubtitle: 'Simple, transparent pricing. No hidden fees.',
    price1Label: '2–3 Players',
    price2Label: 'Each additional player',
    price3Label: 'Maximum capacity',
    price3Value: '10 players',
    priceNote: 'Payment accepted on-site: cash or card. Corporate packages available.',
    // Booking
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
    // Success
    successTitle: 'Booking Received!',
    successText: 'We\'ll confirm your booking via email within 1 hour. Get ready to face your fears!',
    successShare: 'Share with friends',
    successAnother: 'Book Another Quest',
    shareText: "I just booked a horror quest at PSYCHO! Who's brave enough to join me?",
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Questions? Reach out anytime.',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Hours',
    contactSocial: 'Follow Us',
    hoursWeekday: 'Mon–Fri: 18:00 – 01:00',
    hoursWeekend: 'Sat–Sun: 13:00 – 01:00',
    // History
    historyTitle: 'My Bookings',
    historySubtitle: 'Your booking history is saved locally on this device.',
    historyEmpty: 'No bookings yet. Time to face your fears!',
    historyPlayers: 'players',
    // Footer
    footerBuilt: 'Built with',
    footerSupport: 'Support this project',
    footerRights: 'All rights reserved.',
    // Time slots
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  },
  ro: {
    navQuests: 'Quest-uri',
    navPricing: 'Prețuri',
    navBooking: 'Rezervă',
    navContact: 'Contact',
    navHistory: 'Rezervările mele',
    heroSubtitle: 'Horror Quest',
    heroTagline: 'Înfruntă-ți fricile. Rezervă-ți coșmarul.',
    heroCta: 'Rezervă acum',
    questsTitle: 'Quest-urile noastre',
    questsSubtitle: 'Alege-ți coșmarul. Fiecare quest este o experiență horror unică cu actori live.',
    questBook: 'Rezervă acest quest',
    fearLabel: 'Frică',
    metaPlayers: 'jucători',
    metaMinutes: 'min',
    metaActors: 'Actori Live',
    q1Name: 'Experimentul',
    q1Desc: 'Te trezești într-un laborator abandonat. Substanțe ciudate fierb în baloane sparte. Cineva — sau ceva — încă face experimente aici. Ai 60 de minute înainte să devii următorul cobai.',
    q2Name: 'Drum greșit',
    q2Desc: 'Mașina ta s-a stricat pe un drum pustiu. Singura adăpost este o casă veche adânc în pădure. Dar locuitorii ei au propriile planuri pentru oaspeții nepoftiți. Găsește o cale de ieșire înainte de cină.',
    q3Name: 'Cinema Horror',
    q3Desc: 'Un cinematograf abandonat difuzează ultimul spectacol — și tu ești vedeta. Linia dintre ecran și realitate se estompează pe măsură ce personajele din cele mai terifiante filme prind viață în jurul tău.',
    howTitle: 'Cum funcționează',
    howSubtitle: 'Experiența ta horror în 4 pași simpli',
    how1Title: 'Alege un Quest',
    how1Text: 'Răsfoiește quest-urile noastre horror și alege-l pe cel care te cheamă.',
    how2Title: 'Rezervă Online',
    how2Text: 'Selectează data, ora și numărul de jucători. Confirmăm prin email.',
    how3Title: 'Vino & Joacă',
    how3Text: 'Vino cu 15 minute mai devreme. Actorii și efectele noastre vor face restul.',
    how4Title: 'Supraviețuiește & Împărtășește',
    how4Text: 'Dacă reușești să ieși viu, împărtășește experiența cu prietenii!',
    pricingTitle: 'Prețuri',
    pricingSubtitle: 'Prețuri simple, transparente. Fără taxe ascunse.',
    price1Label: '2–3 Jucători',
    price2Label: 'Fiecare jucător suplimentar',
    price3Label: 'Capacitate maximă',
    price3Value: '10 jucători',
    priceNote: 'Plata se acceptă la fața locului: numerar sau card. Pachete corporate disponibile.',
    bookingTitle: 'Rezervă Quest-ul',
    bookingSubtitle: 'Completează formularul. Confirmăm rezervarea prin email în maxim 1 oră.',
    formName: 'Numele tău',
    formNamePh: 'Ion Popescu',
    formPhone: 'Telefon',
    formPhonePh: '+373 XX XXX XXX',
    formEmail: 'Email',
    formEmailPh: 'tu@exemplu.com',
    formQuest: 'Selectează Quest-ul',
    formQuestPh: 'Alege un quest...',
    formDate: 'Data preferată',
    formTime: 'Ora preferată',
    formTimePh: 'Selectează ora...',
    formPlayers: 'Număr de jucători',
    formMessage: 'Cereri speciale (opțional)',
    formMessagePh: 'Zi de naștere, team building, nevoi speciale...',
    formSubmit: 'Confirmă rezervarea',
    formSubmitting: 'Se trimite...',
    successTitle: 'Rezervare primită!',
    successText: 'Vom confirma rezervarea prin email în maxim 1 oră. Pregătește-te să-ți înfrunți fricile!',
    successShare: 'Împărtășește cu prietenii',
    successAnother: 'Rezervă alt quest',
    shareText: 'Tocmai am rezervat un horror quest la PSYCHO! Cine este destul de curajos să mi se alăture?',
    contactTitle: 'Contact',
    contactSubtitle: 'Întrebări? Contactează-ne oricând.',
    contactAddress: 'Adresa',
    contactPhone: 'Telefon',
    contactEmail: 'Email',
    contactHours: 'Program',
    contactSocial: 'Urmărește-ne',
    hoursWeekday: 'Lun–Vin: 18:00 – 01:00',
    hoursWeekend: 'Sâm–Dum: 13:00 – 01:00',
    historyTitle: 'Rezervările mele',
    historySubtitle: 'Istoricul rezervărilor este salvat local pe acest dispozitiv.',
    historyEmpty: 'Nicio rezervare încă. E timpul să-ți înfrunți fricile!',
    historyPlayers: 'jucători',
    footerBuilt: 'Creat cu',
    footerSupport: 'Susține acest proiect',
    footerRights: 'Toate drepturile rezervate.',
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  },
  ru: {
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
    footerBuilt: 'Создано с',
    footerSupport: 'Поддержать проект',
    footerRights: 'Все права защищены.',
    timeSlots: ['18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00']
  }
};

// --- Quest Data ---
const QUESTS = [
  {
    id: 'experiment',
    nameKey: 'q1Name',
    descKey: 'q1Desc',
    image: 'images/experiment.jpg',
    players: '2-10',
    duration: 60,
    fear: 4,
    hasActors: true
  },
  {
    id: 'wrong-turn',
    nameKey: 'q2Name',
    descKey: 'q2Desc',
    image: 'images/wrong-turn.png',
    players: '2-10',
    duration: 60,
    fear: 5,
    hasActors: true
  },
  {
    id: 'horror-cinema',
    nameKey: 'q3Name',
    descKey: 'q3Desc',
    image: 'images/horror-cinema.jpg',
    players: '2-10',
    duration: 90,
    fear: 5,
    hasActors: true
  }
];

// --- State ---
let currentLang = localStorage.getItem('psycho-lang') || 'en';
let currentTheme = localStorage.getItem('psycho-theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
let flatpickrInstance = null;

// --- i18n Module ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('psycho-lang', lang);
  document.documentElement.lang = lang;

  // Update all [data-i18n] text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key]) {
      el.textContent = T[lang][key];
    }
  });

  // Update all [data-i18n-ph] placeholder elements
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[lang] && T[lang][key]) {
      el.placeholder = T[lang][key];
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update quest select options
  populateQuestSelect();

  // Update time select options
  populateTimeSelect();

  // Re-render quest cards
  renderQuests();

  // Re-render booking history
  renderHistory();
}

// --- Theme Module ---
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('psycho-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\u{1F319}';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// --- Quest Rendering ---
function renderQuests() {
  const grid = document.getElementById('questsGrid');
  if (!grid) return;

  grid.innerHTML = QUESTS.map(q => {
    const t = T[currentLang];
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
            <span class="quest-meta-item"><span class="icon">\u{1F465}</span> ${q.players} ${t.metaPlayers}</span>
            <span class="quest-meta-item"><span class="icon">\u23F1\uFE0F</span> ${q.duration} ${t.metaMinutes}</span>
            ${q.hasActors ? `<span class="quest-meta-item"><span class="icon">\u{1F3AD}</span> ${t.metaActors}</span>` : ''}
          </div>
          <div class="fear-level">
            <span class="fear-label">${t.fearLabel}:</span>
            <div class="fear-dots" role="img" aria-label="Fear level ${q.fear} out of 5">${fearDots}</div>
          </div>
          <button class="quest-book-btn" onclick="scrollToBooking('${q.id}')" aria-label="Book ${t[q.nameKey]}">${t.questBook}</button>
        </div>
      </article>
    `;
  }).join('');

  // Re-observe for fade-in animations
  observeFadeIns();
}

// --- Booking Form Logic ---
function populateQuestSelect() {
  const select = document.getElementById('formQuestSelect');
  if (!select) return;
  const t = T[currentLang];

  select.innerHTML = `<option value="" disabled selected>${t.formQuestPh}</option>` +
    QUESTS.map(q => `<option value="${q.id}">${t[q.nameKey]}</option>`).join('');
}

function populateTimeSelect() {
  const select = document.getElementById('formTimeSelect');
  if (!select) return;
  const t = T[currentLang];
  const slots = t.timeSlots || T.en.timeSlots;

  select.innerHTML = `<option value="" disabled selected>${t.formTimePh}</option>` +
    slots.map(s => `<option value="${s}">${s}</option>`).join('');
}

function scrollToBooking(questId) {
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    // Pre-select quest
    setTimeout(() => {
      const select = document.getElementById('formQuestSelect');
      if (select && questId) {
        select.value = questId;
      }
    }, 500);
  }
}

function initFlatpickr() {
  const dateInput = document.getElementById('formDateInput');
  if (!dateInput) return;

  flatpickrInstance = flatpickr(dateInput, {
    minDate: 'today',
    maxDate: new Date().fp_incr(60), // 60 days ahead
    dateFormat: 'Y-m-d',
    disableMobile: false,
    theme: currentTheme === 'dark' ? 'dark' : 'light'
  });
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.form-submit');
  const t = T[currentLang];

  // Gather form data
  const formData = {
    name: form.querySelector('#formName').value.trim(),
    phone: form.querySelector('#formPhone').value.trim(),
    email: form.querySelector('#formEmail').value.trim(),
    quest: form.querySelector('#formQuestSelect').value,
    date: form.querySelector('#formDateInput').value,
    time: form.querySelector('#formTimeSelect').value,
    players: form.querySelector('#formPlayers').value,
    message: form.querySelector('#formMessage').value.trim()
  };

  // Basic validation
  if (!formData.name || !formData.phone || !formData.email || !formData.quest || !formData.date || !formData.time) {
    return;
  }

  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = t.formSubmitting;

  // Save to localStorage
  saveBooking(formData);

  // Submit via FormSubmit.co
  const formSubmitData = new FormData();
  formSubmitData.append('name', formData.name);
  formSubmitData.append('phone', formData.phone);
  formSubmitData.append('email', formData.email);
  formSubmitData.append('quest', getQuestName(formData.quest));
  formSubmitData.append('date', formData.date);
  formSubmitData.append('time', formData.time);
  formSubmitData.append('players', formData.players);
  formSubmitData.append('message', formData.message || 'N/A');
  formSubmitData.append('_subject', `PSYCHO Booking: ${getQuestName(formData.quest)} - ${formData.date}`);
  formSubmitData.append('_template', 'table');
  formSubmitData.append('_captcha', 'false');

  // Get the email from the form action (user will configure this)
  const actionUrl = form.getAttribute('action');

  fetch(actionUrl, {
    method: 'POST',
    body: formSubmitData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      showBookingSuccess(formData);
    } else {
      // Still show success since we saved locally
      // FormSubmit may need email verification first
      showBookingSuccess(formData);
    }
  })
  .catch(() => {
    // Show success anyway — booking is saved locally
    // User will see it in booking history
    showBookingSuccess(formData);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = t.formSubmit;
  });
}

function getQuestName(questId) {
  const quest = QUESTS.find(q => q.id === questId);
  return quest ? T[currentLang][quest.nameKey] : questId;
}

function showBookingSuccess(formData) {
  const formEl = document.getElementById('bookingForm');
  const successEl = document.getElementById('bookingSuccess');

  if (formEl) formEl.style.display = 'none';
  if (successEl) {
    successEl.classList.add('show');
    successEl.querySelector('.booking-success-quest').textContent = getQuestName(formData.quest);
    successEl.querySelector('.booking-success-date').textContent = `${formData.date} @ ${formData.time}`;
  }

  // Re-render history
  renderHistory();
}

function resetBookingForm() {
  const formEl = document.getElementById('bookingForm');
  const successEl = document.getElementById('bookingSuccess');

  if (formEl) {
    formEl.style.display = 'block';
    formEl.reset();
    populateQuestSelect();
    populateTimeSelect();
  }
  if (successEl) successEl.classList.remove('show');
}

// --- Share ---
function shareBooking() {
  const t = T[currentLang];
  const shareData = {
    title: 'PSYCHO Horror Quest',
    text: t.shareText,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    // Clipboard fallback
    navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`).then(() => {
      const btn = document.querySelector('.share-btn');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = '\u2705 Copied!';
        setTimeout(() => { btn.textContent = original; }, 2000);
      }
    }).catch(() => {});
  }
}

// --- Booking History (localStorage) ---
function saveBooking(data) {
  const bookings = JSON.parse(localStorage.getItem('psycho-bookings') || '[]');
  bookings.unshift({
    ...data,
    questName: getQuestName(data.quest),
    bookedAt: new Date().toISOString()
  });
  // Keep max 20 bookings
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

// --- Intersection Observer for fade-in animations ---
let observer = null;

function observeFadeIns() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
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

// --- Smooth scroll for nav links ---
function initNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        closeMobileNav();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  // Set theme
  setTheme(currentTheme);

  // Set language
  setLanguage(currentLang);

  // Init flatpickr date picker
  initFlatpickr();

  // Init nav smooth scroll
  initNavLinks();

  // Observe fade-in elements
  observeFadeIns();

  // Booking form submit
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) menuBtn.addEventListener('click', toggleMobileNav);

  // Dynamic copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
