const today = new Date();
const locale = "en-US";
const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const startCalendar = () => {
  const calDay = document.getElementById("calendarDay");
  const calDate = document.getElementById("calendarDate");
  const calMonth = document.getElementById("calendarMonth");

  const day = today.toLocaleDateString(locale, { day: "2-digit" });
  const weekday = today.toLocaleDateString(locale, { weekday: "short" });
  const month = today.toLocaleDateString(locale, { month: "long" });
  const year = today.toLocaleDateString(locale, { year: "numeric" });

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const numDays = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  calDay.children[0].innerText = weekday;
  calDay.children[1].innerText = day;

  calDate.innerText = `${month}, ${year}`;

  calMonth.innerHTML = null;
  weekdays.forEach((weekday) => {
    const item = document.createElement("li");
    item.classList.add("font-semibold");
    item.textContent = weekday;

    calMonth.appendChild(item);
  });

  const firstDayItem = document.createElement("li");
  firstDayItem.style.gridColumnStart = firstDay + 1;
  firstDayItem.textContent = 1;
  calMonth.appendChild(firstDayItem);

  for (let i = 2; i <= numDays; i++) {
    const item = document.createElement("li");
    if (parseInt(day) == i) {
      item.classList.add("calendar__current-day");
    }

    item.textContent = `${i}`;

    calMonth.appendChild(item);
  }
};
