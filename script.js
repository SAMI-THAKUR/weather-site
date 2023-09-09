
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2327999802msha45bc3f088a87adp1d0a78jsna49b4069d958',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};
const getweather = (city)=>{
	fetch('https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id='+ city + '&timezone=auto&language=en&units=auto',options).then(response => {
		return response.json();
	}).then(data => {
		document.getElementById("tz").innerHTML = data.timezone;
		document.getElementById("lat").innerHTML = data.lat;
		document.getElementById("lon").innerHTML = data.lon;
		document.getElementById('temprature').innerHTML = data.current.temperature + '°C';
		document.getElementById('summary').innerHTML = data.current.summary;
		document.getElementById('feels_like').innerHTML ='Feels like ' + data.current.feels_like + '°C';
		document.getElementById('city').innerHTML = city.toUpperCase();
		document.getElementById('humidity').innerHTML = data.current.humidity + '%';
		document.getElementById('Visibility').innerHTML = data.current.visibility + ' km';
		document.getElementById('dewpoint').innerHTML = data.current.dew_point + ' km/h';
		document.getElementById('windchill').innerHTML = data.current.wind_chill + ' km/h';
		
	}).catch(error =>{
		console.log(error);
	})
}

let c = document.getElementById('cityname');
document.getElementById('weather').addEventListener('click',()=>{
	getweather(c.value)
})

/*
{
	lat: '19.07283N',
	lon: '72.88261E',
	elevation: 8,
	timezone: 'Asia/Kolkata',
	units: 'metric',
	current: {
	  icon: 'mostly_cloudy',
	  icon_num: 5,
	  summary: 'Mostly cloudy',
	  temperature: 27.8,
	  feels_like: 30,
	  wind_chill: 30,
	  dew_point: 21.5,
	  wind: { speed: 4.2, gusts: 6.7, angle: 256, dir: 'WSW' },
	  precipitation: { total: 0, type: 'none' },
	  cloud_cover: 71,
	  ozone: 272.18,
	  pressure: 1008,
	  uv_index: 2.85,
	  humidity: 68,
	  visibility: 24.14
	}
  }
  */

 