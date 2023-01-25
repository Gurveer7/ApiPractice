import { API_KEY } from '/config.js';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

window.onload = function() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then(response => response.json())
      .then(response => {
        document.getElementById('quote').innerHTML = response.content
        document.getElementById('author').innerHTML = "- " + response.originator.name
      })
      .catch(err => console.error(err));
  
    let intervalTimes = setInterval(() => {
      fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then(response => response.json())
      .then(response => {
        document.getElementById('quote').innerHTML = response.content
        document.getElementById('author').innerHTML = "- " + response.originator.name
      })
      .catch(err => console.error(err));
    }, 10000);

    // setTimeout(() => {
    //     clearInterval(intervalTimes);
    //   }, 10000);
  };
  

