const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function fetchRandomQuote() {
  try {
    let response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    // console.log("Response from API ::", response);
    let jsonData = await response.json();
    // console.log("JSON Data from API ::", jsonData);
    // console.log("Author from API ::", jsonData.data.author);
    quote.innerHTML = jsonData.data.content;
    author.innerHTML = jsonData.data.author;
  } catch (error) {
    console.log("Error in getting the quote details ::", error);
    throw error;
  }
}

//for default value
fetchRandomQuote();

document
  .getElementById("new-quote-btn")
  .addEventListener("click", fetchRandomQuote);
