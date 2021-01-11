let weather = {
    apiKey: "17fa48d8a3db0c5995c4c036bf52c5cb",
    
    
    
searchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey)
        
      
      .then((response) => 
      response.json())
      .then((data) => 
      console.log(data));
      
      
      
    },
    showWeather: function (data) {
      const { name } = data;
      const { description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      
      document.querySelector(".city").innerText = + name;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".description").innerText = description;
      document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText ="Wind speed: " + speed + " MPH";
     
    
    },
    search: function () {
      this.searchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button")
  .addEventListener("click", function () {
    weather.search();
  });
  
  






