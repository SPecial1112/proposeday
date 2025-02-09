const febHolidays = [
  "Dear [Her Name] 💖,",
  "Warm wishes from my heart ❤️.",
  "You are my cherished star ✨.",
  "Every moment with you inspires me 💭.",
  "Life shines brighter with you 🌹.",
  "You hold a special place in my heart 💞.",
  "You light up my world 🌞.",
  "Our bond is beautifully unique 🔗.",
  "Distance fades when sooul is near 💓.",
  "You're my treasured delight 🌷.",
  "Simply amazing in every way 🌟.",
  "Grateful for every shared smile 🙏.",
  "Your spirit glows like sunrise 🌅.",
  "In quiet moments, you're my thought 🌙.",
  "Always here, always yours 🤝.",
  "No one compares to you 👑.",
  "I miss you in every beat ✨.",
  "Every memory with you is golden 📸.",
  "This Complement circle is all for you 🔄.",
  "You are the melody of my heart 🎶.",
  "Thankful our paths crossed 💫.",
  "Forever, You owe my Soul❤️."
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
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
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
  const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
  document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
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
