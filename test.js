
var lat = 41.8;
var lon = -87.6;
var temp = 0;
var icon;
var city;
var x = document.getElementById("temp");

function handleResponse(response){
 	 city = response.city;
	var lat = response.latitude;
	var lon = response.longitude;
	
	
	var forecast = "https://api.forecast.io/forecast/b29adebe784794fa21e933198d084365/" + lat+","+lon;

var script = document.createElement("script");
script.src = forecast + "?callback=weather";
document.body.insertBefore(script,document.body.firstChild);


}

var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);













function weather(response){
 	
	temp = Math.ceil(response.currently.temperature);
	icon = response.currently.icon;
	switch(icon){
	case "clear-night": document.body.style.backgroundImage="url('clearnight.jpeg')";
		break;
	case "clear-day": document.body.style.backgroundImage="url('clearday.jpg')";
		break;
	case "rain": document.body.style.backgroundImage="url('rain.jpg')";
		break;
	case "partly-cloudy-day": document.body.style.backgroundImage="url('ptcloudyday.jpeg')";
		break;
	case "partly-cloudy-night": document.body.style.backgroundImage="url('ptcloudynight.jpeg')";
		break;
	

	
	default : document.body.style.backgroundImage="url('https://i.imgsafe.org/6fa2c8bfb7.jpeg')";

	
	}


	var element = document.getElementById("temp");
	element.innerHTML = city + "<br>temp: " + "<span id='temps'>" + temp + "</span>" + "&deg <span id=meas onclick=\"myFunction()\">F</span>"+ "<br>" + response.currently.summary;
	

	
}



function myFunction(){

	
	if( document.getElementById("meas").innerHTML == "F"){
		document.getElementById("meas").innerHTML = "C";
		temp = Math.round((temp - 32) * .5556);
		document.getElementById("temps").innerHTML = temp;
	}
	else{
		temp = Math.round(temp * 1.8 + 32);
		document.getElementById("meas").innerHTML = "F";
		document.getElementById("temps").innerHTML = temp;
	}
	
}


