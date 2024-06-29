let inputLocation = document.getElementsByClassName("location-input");
let weatherImage = document.getElementsByClassName("weather-icon");

let now = newdate;
let time = now.twoLocalTimeString;

let days = [
    
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendsday',  
    'Thursday',
    'Friday',
    'Saturday',
];

let day = days[now.getDay()];


