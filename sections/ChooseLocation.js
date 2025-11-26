// Selectam butoanele din dropdown-ul cu orase
const bucharestButton = document.querySelector('.dropdown-item.bucharest');
const timisoaraButton = document.querySelector('.dropdown-item.timisoara');
const oradeaButton = document.querySelector('.dropdown-item.oradea');
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCityName(city){
    //selectam tag ul de html unde o sa updatam orasul curent
    const currentCity=document.querySelector('.current-city');
    currentCity.innerHTML=$(city);
}
function updateWeather(cityName){
    //salvam in local storage optiunea aleasa
    localStorage.setItem('city',cityName);
    //afisam vremea curenta
    displayCurrentWeather(cityName);
    //apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(cityName);
    //reafisam si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(cityName);
}
// Adaugam event linstere pe butoane pentru a schimba datele despre vreme
bucharestButton.addEventListener('click', function(){
    console.log('clicked');
});

timisoaraButton.addEventListener('click', function(){
    console.log('timisoara clicked');
});


oradeaButton.addEventListener('click', function(){
    console.log('oradea clicked');
});

arad.addEventListener("click", function () {
  updateWeather("Arad");
});


sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
