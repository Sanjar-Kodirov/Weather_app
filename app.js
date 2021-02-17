const h1 = document.getElementsByTagName('h1');
const temperatureDescription = document.querySelector('.temperature-description');
const locationTimezone = document.querySelector('.location-timezone');
const degree = document.querySelector('.degree');
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            console.log(lat);
            console.log(position);
            fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&appid=76a9adc3c5d5cc00cd93a598d1d0e15e`)
            .then(response=> response.json())
            .then(data => {
                console.log(data)
                let location = data.list[0].name;
                let description = data.list[0].weather[0].description;
                let degre = data.list[0].wind.deg;
                degree.innerHTML = degre;
                temperatureDescription.innerHTML = description;
                locationTimezone.innerHTML = location;
            })
            .catch(el => console.log(el));
        })
    }else{
        h1.textContent = 'Hey you have some problem with the geolocation';
    }
});