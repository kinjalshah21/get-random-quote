const quote = document.getElementById('quote');
const author = document.getElementById('author');
let quoteValue = '';

//fetch the API response
async function fetchRandomQuote() {
	try {
		let response = await fetch(
			'https://api.freeapi.app/api/v1/public/quotes/quote/random'
		);
		// console.log("Response from API ::", response);
		let jsonData = await response.json();
		// console.log("JSON Data from API ::", jsonData);
		// console.log("Author from API ::", jsonData.data.author);
		quote.innerHTML = jsonData.data.content;
		quoteValue = quote.innerHTML;
		author.innerHTML = `Author: ${jsonData.data.author}`;
	} catch (error) {
		console.log('Error in getting the quote details ::', error);
		throw error;
	}
}

// Copy the text to Clipboard
function copyToClipboard() {
	let copyText = document.getElementById('quote');

	// Copy the quote value
	navigator.clipboard
		.writeText(copyText.innerText)
		.then(() => alert('Copied the Quote'))
		.catch((err) => console.error('Copy failed:', err));
}

// Share the Quote on Twitter
function shareOnTwitter() {
	let shareURL = 'http://twitter.com/share?';

	let params = {
		url: 'https://github.com/kinjalshah21/get-random-quote',
		text: `Quote of the day: ${quoteValue}`,
		hashtags: 'quoteOfTheDay',
	};

	for (let prop in params) {
		shareURL += '&' + prop + '=' + encodeURIComponent(params[prop]);
	}

	window.open(
		shareURL,
		'',
		'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
	);
}

//for default quote value
fetchRandomQuote();

document.getElementById('new-quote-btn').addEventListener('click', fetchRandomQuote);
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
document.getElementById('share-tweeter').addEventListener('click', shareOnTwitter);
