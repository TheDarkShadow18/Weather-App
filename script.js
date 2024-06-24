const apiKey="57aec48d56a94a02a02f7b2d262645c0"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
const error=document.querySelector(".error")
const display=document.querySelector(".weather")
async function checkWeather(city){
	const response=await fetch(apiUrl + city+ `&appid=${apiKey}`);
	if(response.status==404){
		error.style.display="block";
		display.style.display="none";
	}
	else{
	var data = await response.json();

	console.log(data);

	document.querySelector(".city").innerText=data.name;
	document.querySelector(".temp").innerText=Math.round(data.main.temp)+ "°C";
	document.querySelector(".humidity").innerText=data.main.humidity+"%";
	document.querySelector(".wind").innerText=data.wind.speed+"km/h";

	if(data.weather[0].main=="Clouds"){
		weatherIcon.src="images/clouds.png"
	}
	else if(data.weather[0].main=="Rain"){
		weatherIcon.src="images/rain.png"
	}
	else if(data.weather[0].main=="Drizzle"){
		weatherIcon.src="images/drizzle.png"
	}
	else if(data.weather[0].main=="Mist"){
		weatherIcon.src="images/mist.png"
	}
	else if(data.weather[0].main=="Clear"){
		weatherIcon.src="images/clear.png"
	}
	else if(data.weather[0].main=="Snow"){
		weatherIcon.src="images/snow.png"
	}
}
error.style.display="none";
		display.style.display="block";
}
searchBtn.addEventListener("click",()=>{
		checkWeather(searchBox.value);
})
var input = document.querySelector("input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchBtn.click();
  }
});