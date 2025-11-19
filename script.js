const quotes = [
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "It is better to light a single candle than to curse the darkness.", author: "Confucius" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", author: "Mahatma Gandhi" },
    { text: "Believe that life is worth living and your belief will help create the fact.", author: "William James" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Nothing will work unless you do.", author: "Maya Angelou" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
    { text: "If you can't yet do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
    { text: "Someone's sitting in the shade today because someone planted a tree a long time ago.", author: "Warren Buffett" },
    { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
    { text: "If you change the way you look at things, the things you look at change.", author: "Wayne Dyer" },
    { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
    { text: "The greatest wealth is to live content with little.", author: "Plato" },
    { text: "It does not matter how slowly you go so long as you do not stop.", author: "Confucius" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "I've failed over and over and over again in my life and that is why I succeed.", author: "Michael Jordan" },
    { text: "Insanity: doing the same thing over and over again and expecting different results.", author: "Albert Einstein" },
    { text: "Try not to become a man of success but rather to become a man of value.", author: "Albert Einstein" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
    { text: "Be kind whenever possible. It is always possible.", author: "14th Dalai Lama" },
    { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "Happiness dwells in the soul.", author: "Democritus" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Change your life today. Don't gamble on the future, act now, without delay.", author: "Simone de Beauvoir" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway" }
];

const backgrounds = [
  "url('images/bg1.jpeg')",
  "url('images/bg2.jpeg')",
  "url('images/bg3.jpeg')",
  "url('images/bg4.jpeg')",
  "url('images/bg5.jpeg')",
  "url('images/bg6.jpeg')",
  "url('images/bg7.jpeg')",
  "url('images/bg8.jpeg')",
  "url('images/bg9.jpeg')",
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

const bgRandom = Math.floor(Math.random() * backgrounds.length);
document.body.style.background = `${backgrounds[bgRandom]}, radial-gradient(#f85c70,#75e6da)`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.transition = "background 0.6s ease-in-out";   // <-- important
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