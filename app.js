function updateClock() {
  const now = new Date();

  // Soat, minut, sekund
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Agar 1 xonali bo‘lsa oldiga 0 qo‘shadi (masalan 09)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;

  // Sana
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dayNumber = now.getDate();
  const year = now.getFullYear();

  document.getElementById("full-day").textContent =
    `${dayName}, ${dayNumber} ${monthName} ${year}`;
}

// Har 1 sekundda yangilanadi
setInterval(updateClock, 1000);

// Sahifa ochilganda darhol ishlashi uchun
updateClock();
