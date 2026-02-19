setInterval(() => {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();


  document.getElementById("hour").textContent = h;
  document.getElementById("minute").textContent = m;
  document.getElementById("second").textContent = s;

  document.getElementById("full-day").textContent = now.toDateString();
}, 1000);
