let nav = 0; // track the month
let clicked = null; // clic sur un jour de la semaine
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const calendar = document.getElementById("calendar");
const weekdays = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
const monthDisplay = document.getElementById("monthDisplay");

/*
 * LOAD FUNCTION
 */
function load() {
  const dt = new Date();

  if (nav != 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const dayInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayInMonth = new Date(year, month, 1);

  const dateString = firstDayInMonth.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const paddingDay = weekdays.indexOf(dateString.split(" ")[0]);
  monthDisplay.innerText = `${dt.toLocaleDateString("fr-FR", {
    month: "long",
  })} ${year}`;

  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDay + dayInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    if (i > paddingDay) {
      //
      if (i - paddingDay === day && nav === 0) {
        daySquare.id = "currentDay";
      }
      daySquare.innerText = i - paddingDay;
      daySquare.addEventListener("click", () => {});
    } else {
      //
      daySquare.classList.add("padding");
    }

    calendar.appendChild(daySquare);
  }
}

function initButton() {
  nextButton.addEventListener("click", () => {
    nav++;
    load();
  });
  backButton.addEventListener("click", () => {
    nav--;
    load();
  });
}

initButton();
load();
