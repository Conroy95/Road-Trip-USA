// Service Worker registreren voor offline gebruik
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('js/service-worker.js')
      .then(function (registration) {
        console.log('ServiceWorker geregistreerd met scope: ', registration.scope);
      }).catch(function (error) {
        console.log('ServiceWorker registratie gefaald: ', error);
      });
  });
}

// Back to top
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}


// Alleen datum tonen
function toonDatum() {
  const datumElement = document.getElementById("datum-tijd");
  const nu = new Date();

  const opties = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const datum = nu.toLocaleDateString('nl-NL', opties);

  datumElement.textContent = `📅 Vandaag is: ${datum}`;
}

document.addEventListener("DOMContentLoaded", toonDatum);



// Haal de inhoud van de <title> tag op
    const titel = document.title;

  // Zet de titel op meerdere plekken
    document.getElementById("kop").textContent = "Locatie - " + titel;
    document.getElementById("nav-link").textContent = "📍 " + titel;
    document.getElementById("intro-tekst").textContent = "Welkom in " + titel;