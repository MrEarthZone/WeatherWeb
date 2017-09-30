$(function () {
    $("button").click(function () {
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+$("#location").val()+"&APPID=a8845efb7f9afeb5e04245239dd87a23";
        $.get(url, function (data) {
            console.log(data.weather[0].main);
            var country = data.name;
            var date = new Date();
            var temp = data.main.temp / 10;
            var description = data.weather[0].description;
            $("#where").empty();
            $("#date").empty();
            $("#temp").empty();
            $("#description").empty();
            $("#humidity").empty();
            $("#wind").empty();
            $("#desimg").empty();
            $("#where").append(country);
            $("#date").append(date.toDateString());
            $("#temp").append(temp.toFixed(0) + "°");
            $("#description").append(description);
            $("#humidity").append("Humidity : "+data.main.humidity);
            $("#wind").append("Wind Speed : "+data.wind.speed);
            if(data.weather[0].main == "Clouds"){
                $("#desimg").append("<i class="+"\"wi wi-cloudy\""+"></i>");
            }
            if(data.weather[0].main == "Clear"){
                $("#desimg").append("<i class="+"\"wi wi-day-sunny\""+"></i>");
            }
            if(data.weather[0].main == "Rain"){
                $("#desimg").append("<i class="+"\"wi wi-rain-wind\""+"></i>");
            }
            if(data.weather[0].main == "ThunderStorm"){
                $("#desimg").append("<i class="+"\"wi wi-thunderstorm\""+"></i>");
            }
            if(data.weather[0].main == "Mist"){
                $("#desimg").append("<i class="+"\"wi wi-fog\""+"></i>");
            }
            $(function initMap() {
                var la = data.coord.lon;
                var ln = data.coord.lat;
                var uluru = {lat: ln, lng: la};
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 10,
                  center: uluru
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });
              });
        });
    });
});

