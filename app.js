// console.log("This is javscript")
const quote=document.getElementById("quote");
const author=document.getElementById("author");
const btn=document.getElementById("btn");
const tweet=document.getElementById("tweetMe");
let generateQuote= ()=>{
    fetch("https://type.fit/api/quotes").then(response=>response.json()).then((data)=>{
       let index=Math.floor(Math.random(0,1)*1643);
       quote.innerText=data[index].text;
       author.innerText=data[index].author?data[index].author:"Unknown";
       return;
    });
}
let tweetMe= ()=>{
    let tweetPost="https://twitter.com/intent/tweet/";
    window.open(tweetPost);
}
generateQuote();
btn.addEventListener('click', generateQuote);
tweet.addEventListener('click', tweetMe);
