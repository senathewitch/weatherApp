const url = 'https://api.openweathermap.org/data/2.5/'
const key='800a80427663d1d01c70a497c7710205'

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery);

const setQuery = (e) => {
    if(e.keyCode === '') {
        alert('You did not  write anything')
    } else if (e.keyCode == '13'){
        getResult(searchBar.value);

    } else {

        
    }
}

const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&weatherAppid=${key}&units=metric&lang=en'
    fetch (query) //request url
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}

const displayResult= () => {
    let city =document.querySelector('.city')
    city.innerHTML = '${result.name}'

}
;
