function countdown() {
  const futureDate = new Date("Sep 23, 2024 0:00:00").getTime();
  const now = new Date().getTime();
  const gap = futureDate - now;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  let dd = Math.floor(gap / d);
  let hh = Math.floor((gap % d) / h);
  let mm = Math.floor((gap % h) / m);
  let ss = Math.floor((gap % m) / s);

  document.getElementById("dd").innerText = dd < 10 ? "0" + dd : dd;
  document.getElementById("hh").innerText = hh < 10 ? "0" + hh : hh;
  document.getElementById("mm").innerText = mm < 10 ? "0" + mm : mm;
  document.getElementById("ss").innerText = ss < 10 ? "0" + ss : ss;
}
let interval = setInterval(countdown, 1000);
