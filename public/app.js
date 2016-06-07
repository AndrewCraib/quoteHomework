window.onload = function(){
  main();
}

var main = function(){

var quotesArray = [
    {text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"},
    {text: "The only CSS you need to know is background-color: tomato", author: "Rick"},
    {text: "I used the jQuery diet plugin and lost 10kg in a week.", author: "Keith"},
    {text: "Scaffolding is nothing but a fiery hell.", author: "Valerie"}

];

  
  for (var i = 0; i < quotesArray.length; i++){
    createQuote(quotesArray[i].text, quotesArray[i].author);
    console.log("here");
  }

}
function createQuote(text, author){
      var quoteArticle = document.createElement('article');
        quoteArticle.classList.add('quote');

      var blockQuote = document.createElement('blockquote');
      blockQuote.innerText = text

      var cite = document.createElement('cite');
      cite.innerText = author

      blockQuote.appendChild(cite);

      quoteArticle.appendChild(blockQuote);

      var quotes = document.querySelector('#quotes');
      // quotes.appendChild(quoteArticle);
      quotes.insertBefore(quoteArticle, document.querySelector('#quote-of-the-day'));
} 


  //   var blockQuote = document.createElement('blockquote');
  //   blockQuote.innerText = "Open the pod bay doors Hal";

// }

// function createQuote(){
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');







//   var qotd = document.getElementById('quote-of-the-day');
//   console.log(qotd);

//   var buttons = document.getElementsByTagName('button');
//   console.log(buttons[0]);


//   var quotes = document.getElementsByClassName('quote');
//   var lastQuote = quotes[quotes.length-1];

//   console.log(lastQuote.innerText);

//   // qotd.style.visibility = 'hidden';
//   qotd.hidden = true;

//   var articles =  document.getElementsByTagName('article');
//   for (var i = 0; i < articles.length; i++) {
//     articles[i].style.backgroundColor = "wheat";
//   }

//   createQuote();

// // }

//     var quoteArticle = document.createElement('article');
//     quoteArticle.classList.add('quote');

//   var blockQuote = document.createElement('blockquote');
//   blockQuote.innerText = "The only CSS you need to know is background-color: tomato";

//   var cite = document.createElement('cite');
//   cite.innerText = "Rick";

//   blockQuote.appendChild(cite);

//   quoteArticle.appendChild(blockQuote);

//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);
// } 