const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

// --- LOGICĂ PENTRU SCROLL TO TOP (ADĂUGATĂ) ---

// 1. Selectează elementul buton
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// 2. Funcție pentru a duce pagina la început
const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// 3. Funcție pentru a gestiona vizibilitatea butonului la scroll
const handleScrollVisibility = () => {
    // Jumătatea viewport-ului. window.innerHeight este o metodă de a vedea viewport-ul în JS, conform hint-ului [cite: 138, 139]
    const halfViewportHeight = window.innerHeight / 2;

    // Verifică dacă poziția de scroll (scrollY) depășește jumătatea viewport-ului [cite: 138]
    if (window.scrollY > halfViewportHeight) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
};

// 4. Adaugă event listeneri
window.addEventListener('scroll', handleScrollVisibility);
scrollToTopBtn.addEventListener('click', handleScrollToTop);

// --- SFÂRȘIT LOGICĂ SCROLL TO TOP ---
