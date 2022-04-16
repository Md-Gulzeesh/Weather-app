// Calling location function
gettingLocation();
function getData(){
    let city = document.querySelector("#city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d11e2713cdace67cd72e441e55b790d4`;
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        append(res);
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}
function getDataLocation(lat,lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11e2713cdace67cd72e441e55b790d4`;
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        append(res);
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}
function append(data){
    let container = document.querySelector("#container");
    let city = document.querySelector("span");
    let temprature = document.getElementById("current_temp");
    let weath = document.getElementById("weather_report");
    let map = document.getElementById("gmap_canvas");
    let icon = document.getElementById("main_img");
// This section will provide current time
    let time = new Date();
   let current_time = time.toLocaleString('en-US', { hour: 'numeric',hour12: true });
   let l = current_time.length;
   console.log(typeof(current_time),current_time);
   
// This section will give day
   let day = time.getDay();
   console.log(typeof(day),"day is");
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
//   Catching other days
    document.getElementById("day_name1").innerText = daylist[day];
    document.getElementById("day_name2").innerText = daylist[(day+1)%7];
    document.getElementById("day_name3").innerText = daylist[(day+2)%7];
    document.getElementById("day_name4").innerText = daylist[(day+3)%7];
    document.getElementById("day_name5").innerText = daylist[(day+4)%7];
    document.getElementById("day_name6").innerText = daylist[(day+5)%7];
    document.getElementById("day_name7").innerText = daylist[(day+6)%7];
// Appending data to box
    if(data.name === undefined){
        alert("City Not Found!");
    }
    else{
        city.innerText = data.name;
        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=5&ie=UTF8&iwloc=&output=embed`;
        temprature.innerText = Math.floor((data.main.temp)- 273.15);
        document.getElementById("max1").innerText = Math.floor((data.main.temp_max)- 273.15);
        document.getElementById("min1").innerText = Math.floor((data.main.temp_min)- 273.15);
        document.getElementById("max2").innerText = Math.floor((data.main.temp_max)- 273.15)+ Math.floor((Math.random()*3));
        document.getElementById("min2").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        document.getElementById("max3").innerText = Math.floor((data.main.temp_max)- 273.15)+Math.floor((Math.random()*3));
        document.getElementById("min3").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        document.getElementById("max4").innerText = Math.floor((data.main.temp_max)- 273.15)+Math.floor((Math.random()*3));
        document.getElementById("min4").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        document.getElementById("max5").innerText = Math.floor((data.main.temp_max)- 273.15)+Math.floor((Math.random()*3));
        document.getElementById("min5").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        document.getElementById("max6").innerText = Math.floor((data.main.temp_max)- 273.15)+Math.floor((Math.random()*3));
        document.getElementById("min6").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        document.getElementById("max7").innerText = Math.floor((data.main.temp_max)- 273.15)+Math.floor((Math.random()*3));
        document.getElementById("min7").innerText = Math.floor((data.main.temp_min)- 273.15)-Math.floor((Math.random()*3));
        weath.innerText = data.weather[0].main;
        document.getElementById("humidity").innerText = ` ${data.main.humidity}%`;
        document.getElementById("wind").innerText = ` ${data.wind.speed}m/s`;
        document.getElementById("pressure").innerText = ` ${data.main.pressure}hpa`;

        if(data.weather[0].main === "Haze" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.src = "assets/day.svg";
        }
        else if(data.weather[0].main === "Clouds" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/cloudyday1.svg");
        }
        else if(data.weather[0].main === "Wind" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/cloudy.svg");
        }
        else if(data.weather[0].main === "Rain" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/rainy1.svg");
        }
        else if(data.weather[0].main === "Snow" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/snowy1.svg");
        }
        else if(data.weather[0].main === "Clear" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/day.svg");
        }
        else if(data.weather[0].main === "Dust" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/cloudyday3.svg");
        }
        // Am
        else if(data.weather[0].main === "Haze" && (current_time[l-2]+current_time[l-1] == "PM") && Number(current_time[0])>6){
            icon.setAttribute("src","assets/night.svg");
        }
        else if(data.weather[0].main === "Clouds" && (current_time[l-2]+current_time[l-1] == "PM") && Number(current_time[0])>6){
            icon.setAttribute("src","assets/cloudynight1.svg");
        }
        else if(data.weather[0].main === "Wind" && (current_time[l-2]+current_time[l-1] == "PM") && Number(current_time[0])>6){
            icon.setAttribute("src","assets/cloudy.svg");
        }
        else if(data.weather[0].main === "Rain" && (current_time[l-2]+current_time[l-1] == "PM")&& Number(current_time[0])>6){
            icon.setAttribute("src","assets/rainy2.svg");
        }
        else if(data.weather[0].main === "Snow" && (current_time[l-2]+current_time[l-1] == "PM")&& Number(current_time[0])>6){
            icon.setAttribute("src","assets/snowy1.svg");
        }
        else if(data.weather[0].main === "Clear" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/night.svg");
        }
        else if(data.weather[0].main === "Dust" && (current_time[l-2]+current_time[l-1] == "PM")){
            icon.setAttribute("src","assets/cloudynight3.svg");
        }
    }     

}
// This section is for enter key functionality
let input = document.querySelector("#city");
input.addEventListener("keyup",function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
       }
})
// Getting current location
function gettingLocation(){
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(position) {
        let crd = position.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getDataLocation(crd.latitude,crd.longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
}