const febHolidays = [
    "Dear Detective ji 💖",
    "Let these words wrap around your heart ❤️ - This is a cycle of warmth and care—feel every moment deeply 🌟.",
    "You're not just a friend, you're a cherished soul ✨ - Whether it's one fleeting moment or a thousand, you're always on my mind 💭.",
    "In both challenging times and moments of joy 🤗, your presence is a constant source of comfort and inspiration 🌈.",
    "On this journey called life 🌍, you mean more to me than words can express 🌹.",
    "I hold you in deep affection ❤️; you have a special place in my heart that no one else could ever fill 💞.",
    "You brighten every part of my life 🌞, truly, you are my everything 💖.",
    "There's a beautiful connection between us 🔗 - A bond that feels both rare and wonderfully genuine ✨.",
    "Even when distance parts us 🌍, my care for you remains unwavering, and I am always just a heartbeat away 💓.",
    "You are the most beautiful, kind, and inspiring soul I know 🌷 - A treasure that enriches my life in countless ways ✨.",
    "Simply put, you are amazing and perfect in your own unique way 🌟 - My heart fills with gratitude every time I think of you 🙏.",
    "I am so thankful our paths crossed 🙏; meeting you has been one of life's greatest gifts 🎁.",
    "Every day, your radiant spirit inspires me to seek beauty in every moment 🌅, and I strive to reflect that light in everything I do ✨.",
    "When solitude softly speaks in the quiet hours 🌙, let the gentle cadence of my friendship fill the silence with warmth and hope 🌟.",
    "You are incredibly special to me 💖, and I would never let the bond we share fade away 🤝.",
    "No one compares to you 👑; you are simply the best, my dear friend.",
    "I must confess, I miss you even when life's brightest moments unfold ✨, because every joy is sweeter when shared with you 💞.",
    "Every moment we share—whether in person or in spirit—is a treasured memory 📸 that deepens my admiration and gratitude for having you in my life 🙏.",
    "This endless cycle of care and warmth is dedicated solely to you 🔄, with all the affection and gratitude in my heart ❤️.",
    "In the quiet language of my soul, you are the melody that transforms ordinary moments into beautiful symphonies 🎶, filling my life with grace and wonder ✨.",
    "I thank fate every day for bringing us together 🙏; you are a treasured part of my life, and I hold you in the highest regard 💫.",
    "With all my heart, I love and appreciate you dearly ❤️."
    "Please ye pyaar ka cycle hai, achee se feel karna",
    "Dost bhi tum, pyaar bhi tum 😊",
    "ek bhi tum aur hazar bhi tum 🤩",
    "dukh me tum aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "Maine shiddat se chaha hai tumhe, I love you❤️",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "And of course... wait baby.....",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "Main humesa tumhre sath hun 🤞✔",
    "kabhi khud ko akela mat samjhna💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "Thanks to God for helping us,ki hum logo ko milaya🙏",
    "You're the love of my life,",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
