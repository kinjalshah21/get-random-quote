const quote = document.getElementById('quote');
const author = document.getElementById('author');

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
		author.innerHTML = `Author: ${jsonData.data.author}`;
	} catch (error) {
		console.log('Error in getting the quote details ::', error);
		throw error;
	}
}

function copyToClipboard() {
	let copyText = document.getElementById('quote');

	// Copy the quote value
  navigator.clipboard.writeText(copyText.innerText)
		.then(() => alert('Copied the Quote'))
		.catch((err) => console.error('Copy failed:', err));
}

//for default quote value
fetchRandomQuote();

document
	.getElementById('new-quote-btn')
	.addEventListener('click', fetchRandomQuote);

document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
