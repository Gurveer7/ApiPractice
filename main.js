import { API_KEY } from '/config.js';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response) //For Testing Purposes

        const card = document.querySelector('.card');
        card.addEventListener('mouseover', function() {
        card.addEventListener('click', function() {
            window.location.href = response.url;
        });
    });
        document.getElementById('quote').innerHTML = response.content
        document.getElementById('author').innerHTML = "- " + response.originator.name
    })
	.catch(err => console.error(err));

