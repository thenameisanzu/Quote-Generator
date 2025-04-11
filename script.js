const quotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");

function getQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  quoteEl.textContent = quote.text;
  authorEl.textContent = quote.author;
}

function copyQuote() {
  const quoteText = quoteEl.textContent;
  const authorText = authorEl.textContent;
  const fullQuote = quoteText + " - " + authorText;

  navigator.clipboard.writeText(fullQuote);
  alert("Quote copied!");
}

newQuoteBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);

// Load a quote when page opens
getQuote();