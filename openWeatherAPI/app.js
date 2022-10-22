const url="https://api.openweathermap.org/data/2.5/";
const key ="8fff54d0a258c4abf236ae34bc6ce2e1"
const setQuery = (e) =>{ 
    if(e.keyCode =='13')
    getResult(searchBar.value)
    
}
const getResult = (cityName)=>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather=>{
    return weather.json()
   })
   .then(displayResult)
   

}

const displayResult=(result)=>{
    let city=document.querySelector(".city")
    city.innerText=`${result.name},${result.sys.country}`;

    let temp=document.querySelector(".temp")
    temp.innerText=`${Math.round(result.main.temp)}°C`;

     let minmax=document.querySelector(".minmax");
     minmax.innerText=` Hissedilen Sıcaklık ${Math.round(result.main.feels_like)}°C`;

     let desc=document.querySelector(".desc");
     desc.innerText=` Hava ${result.weather[0].description}`


    console.log(result)
}



const searchBar=document.getElementById("searchbar")
searchBar.addEventListener('keypress',setQuery)
